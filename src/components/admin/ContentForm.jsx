'use client';

import { useState, useActionState } from 'react';
import { Plus, Trash2, ArrowUp, ArrowDown } from 'lucide-react';
import { saveContentItem } from '@/app/actions/content';
import { CONTENT_TYPES, slugify } from '@/lib/contentSchemas';

const inputCls =
    'w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20';

function Field({ label, hint, required, children }) {
    return (
        <div>
            <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                {label}
                {required && <span className="text-red-500"> *</span>}
            </label>
            {children}
            {hint && <p className="mt-1 text-xs text-slate-400">{hint}</p>}
        </div>
    );
}

/* ── List of plain strings (one per line) ──────────────── */
function StringListField({ value, onChange }) {
    return (
        <textarea
            rows={Math.max(3, (value?.length || 0) + 1)}
            value={(value || []).join('\n')}
            onChange={(e) => onChange(e.target.value.split('\n'))}
            placeholder="One item per line"
            className={inputCls}
        />
    );
}

/* ── List of objects with sub-fields ───────────────────── */
function ObjectListField({ field, rows, onChange }) {
    const subfields = field.subfields;
    const emptyRow = () =>
        Object.fromEntries(subfields.map((sf) => [sf.name, '']));

    const list = rows || [];
    const update = (i, key, val) =>
        onChange(
            list.map((r, idx) => (idx === i ? { ...r, [key]: val } : r))
        );
    const add = () => onChange([...list, emptyRow()]);
    const remove = (i) => onChange(list.filter((_, idx) => idx !== i));
    const move = (i, dir) => {
        const j = dir === 'up' ? i - 1 : i + 1;
        if (j < 0 || j >= list.length) return;
        const next = [...list];
        [next[i], next[j]] = [next[j], next[i]];
        onChange(next);
    };

    return (
        <div className="space-y-3">
            {list.length === 0 ? (
                <p className="rounded-lg border border-dashed border-slate-300 bg-slate-50 px-4 py-5 text-center text-sm text-slate-400">
                    No rows yet.
                </p>
            ) : (
                list.map((row, i) => (
                    <div
                        key={i}
                        className="rounded-xl border border-slate-200 p-4"
                    >
                        <div className="mb-2 flex items-center justify-between">
                            <span className="text-xs font-bold uppercase tracking-wide text-slate-400">
                                #{i + 1}
                            </span>
                            <div className="flex items-center gap-1">
                                <button
                                    type="button"
                                    onClick={() => move(i, 'up')}
                                    disabled={i === 0}
                                    className="rounded-md p-1.5 text-slate-400 hover:bg-slate-100 disabled:opacity-30"
                                    title="Move up"
                                >
                                    <ArrowUp size={14} />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => move(i, 'down')}
                                    disabled={i === list.length - 1}
                                    className="rounded-md p-1.5 text-slate-400 hover:bg-slate-100 disabled:opacity-30"
                                    title="Move down"
                                >
                                    <ArrowDown size={14} />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => remove(i)}
                                    className="rounded-md p-1.5 text-slate-400 hover:bg-red-50 hover:text-red-600"
                                    title="Remove"
                                >
                                    <Trash2 size={14} />
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                            {subfields.map((sf) =>
                                sf.type === 'textarea' ? (
                                    <textarea
                                        key={sf.name}
                                        value={row[sf.name] || ''}
                                        onChange={(e) =>
                                            update(i, sf.name, e.target.value)
                                        }
                                        rows={2}
                                        placeholder={sf.label}
                                        className={inputCls}
                                    />
                                ) : (
                                    <input
                                        key={sf.name}
                                        value={row[sf.name] || ''}
                                        onChange={(e) =>
                                            update(i, sf.name, e.target.value)
                                        }
                                        placeholder={sf.label}
                                        className={inputCls}
                                    />
                                )
                            )}
                        </div>
                    </div>
                ))
            )}
            <button
                type="button"
                onClick={add}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50"
            >
                <Plus size={15} /> Add row
            </button>
        </div>
    );
}

function ColorField({ value, onChange }) {
    const valid = /^#[0-9a-fA-F]{6}$/.test(value || '');
    return (
        <div className="flex items-center gap-2">
            <input
                type="color"
                value={valid ? value : '#000000'}
                onChange={(e) => onChange(e.target.value)}
                className="h-10 w-12 cursor-pointer rounded-lg border border-slate-300 bg-white p-1"
                aria-label="Colour picker"
            />
            <input
                value={value || ''}
                onChange={(e) => onChange(e.target.value)}
                placeholder="#EE314F"
                className={inputCls}
            />
        </div>
    );
}

function initialValues(cfg, item) {
    const data = item?.data || {};
    const values = {};
    for (const f of cfg.fields) {
        const v = data[f.name];
        if (f.type === 'stringList') {
            values[f.name] = Array.isArray(v) ? v : [];
        } else if (f.type === 'objectList') {
            values[f.name] = Array.isArray(v) ? v : [];
        } else {
            values[f.name] = v == null ? '' : String(v);
        }
    }
    return values;
}

export default function ContentForm({ type, item = null }) {
    const cfg = CONTENT_TYPES[type];
    const isEdit = Boolean(item);
    const [state, action, pending] = useActionState(saveContentItem, null);

    const [values, setValues] = useState(() => initialValues(cfg, item));
    const [slug, setSlug] = useState(item?.slug || '');

    const setField = (name, val) =>
        setValues((v) => ({ ...v, [name]: val }));

    const titleValue = values[cfg.slugFromField] || '';

    return (
        <form action={action} className="space-y-6">
            <input type="hidden" name="type" value={type} />
            {isEdit && <input type="hidden" name="id" value={item.id} />}
            <input type="hidden" name="slug" value={slug} />
            <input
                type="hidden"
                name="data"
                value={JSON.stringify(values)}
            />

            <div className="flex flex-wrap items-center justify-between gap-3">
                <h1 className="text-2xl font-extrabold text-slate-900">
                    {isEdit ? `Edit ${cfg.singular}` : `New ${cfg.singular}`}
                </h1>
                <button
                    type="submit"
                    disabled={pending}
                    className="rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white hover:opacity-90 disabled:opacity-60"
                >
                    {pending ? 'Saving…' : isEdit ? 'Update' : 'Create'}
                </button>
            </div>

            {state?.error && (
                <p
                    role="alert"
                    className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                >
                    {state.error}
                </p>
            )}

            {/* Slug */}
            {cfg.dynamicPath || cfg.slugRequired ? (
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                    <Field
                        label="Slug (URL)"
                        hint={
                            cfg.slugRequired
                                ? 'Leave blank to auto-generate from the title. Lowercase, hyphenated.'
                                : 'Optional — auto-generated if left blank.'
                        }
                    >
                        <input
                            value={slug}
                            onChange={(e) => setSlug(e.target.value)}
                            placeholder={
                                slugify(titleValue) || 'my-page-url'
                            }
                            className={inputCls}
                        />
                    </Field>
                </div>
            ) : null}

            {/* Fields */}
            <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-5">
                {cfg.fields.map((f) => {
                    if (f.type === 'objectList') {
                        return (
                            <Field
                                key={f.name}
                                label={f.label}
                                hint={f.hint}
                                required={f.required}
                            >
                                <ObjectListField
                                    field={f}
                                    rows={values[f.name]}
                                    onChange={(rows) => setField(f.name, rows)}
                                />
                            </Field>
                        );
                    }
                    if (f.type === 'stringList') {
                        return (
                            <Field
                                key={f.name}
                                label={f.label}
                                hint={f.hint || 'One item per line.'}
                                required={f.required}
                            >
                                <StringListField
                                    value={values[f.name]}
                                    onChange={(arr) => setField(f.name, arr)}
                                />
                            </Field>
                        );
                    }
                    if (f.type === 'color') {
                        return (
                            <Field
                                key={f.name}
                                label={f.label}
                                hint={f.hint}
                                required={f.required}
                            >
                                <ColorField
                                    value={values[f.name]}
                                    onChange={(val) => setField(f.name, val)}
                                />
                            </Field>
                        );
                    }
                    if (f.type === 'textarea') {
                        return (
                            <Field
                                key={f.name}
                                label={f.label}
                                hint={f.hint}
                                required={f.required}
                            >
                                <textarea
                                    value={values[f.name] || ''}
                                    onChange={(e) =>
                                        setField(f.name, e.target.value)
                                    }
                                    rows={f.rows || 3}
                                    placeholder={f.placeholder}
                                    className={inputCls}
                                />
                            </Field>
                        );
                    }
                    return (
                        <Field
                            key={f.name}
                            label={f.label}
                            hint={f.hint}
                            required={f.required}
                        >
                            <input
                                value={values[f.name] || ''}
                                onChange={(e) =>
                                    setField(f.name, e.target.value)
                                }
                                placeholder={f.placeholder}
                                className={inputCls}
                            />
                        </Field>
                    );
                })}
            </div>
        </form>
    );
}
