'use client';

import { useState, useRef, useActionState } from 'react';
import { Upload, Trash2, CheckCircle2, Save } from 'lucide-react';
import { saveInvoiceSettings } from '@/app/actions/invoices';
import { CURRENCIES, INVOICE_SETTINGS_SECTIONS } from '@/lib/invoiceSchema';
import MediaPickerButton from '@/components/admin/MediaPickerButton';

const inputCls =
    'w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20';

/* Image field: upload to /api/admin/upload or paste a URL, with a small preview. */
function ImageField({ value, onChange }) {
    const [uploading, setUploading] = useState(false);
    const [err, setErr] = useState('');
    const inputRef = useRef(null);

    const onFile = async (e) => {
        const file = e.target.files?.[0];
        e.target.value = '';
        if (!file) return;
        setErr('');
        setUploading(true);
        try {
            const fd = new FormData();
            fd.append('file', file);
            const res = await fetch('/api/admin/upload', { method: 'POST', body: fd });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Upload failed');
            onChange(data.url);
        } catch (e2) {
            setErr(e2.message);
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="space-y-2.5">
            <div className="flex items-center gap-3">
                {value ? (
                    // Dark tile so white logos are visible too.
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={value}
                        alt="Preview"
                        className="h-12 w-24 shrink-0 rounded-lg border border-slate-200 bg-slate-800 object-contain p-1"
                    />
                ) : (
                    <div className="flex h-12 w-24 shrink-0 items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 text-[10px] text-slate-400">
                        None
                    </div>
                )}
                <div className="flex flex-wrap items-center gap-2">
                    <button
                        type="button"
                        onClick={() => inputRef.current?.click()}
                        disabled={uploading}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-bold text-white hover:opacity-90 disabled:opacity-60"
                    >
                        <Upload size={13} />
                        {uploading ? 'Uploading…' : value ? 'Replace' : 'Upload'}
                    </button>
                    <MediaPickerButton onSelect={(urls) => onChange(urls[0])} />
                    {value ? (
                        <button
                            type="button"
                            onClick={() => onChange('')}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                        >
                            <Trash2 size={13} /> Remove
                        </button>
                    ) : null}
                </div>
            </div>
            <input
                value={value || ''}
                onChange={(e) => onChange(e.target.value)}
                placeholder="…or paste an image URL / path"
                className={inputCls}
            />
            {err ? <p className="text-xs text-red-600">{err}</p> : null}
            <input ref={inputRef} type="file" accept="image/*" onChange={onFile} className="hidden" />
        </div>
    );
}

export default function InvoiceSettingsForm({ initial }) {
    const [state, formAction, pending] = useActionState(saveInvoiceSettings, null);
    const [values, setValues] = useState(initial);
    const set = (name, v) => setValues((p) => ({ ...p, [name]: v }));

    const renderInput = (f) => {
        const v = values[f.name] ?? '';
        switch (f.type) {
            case 'image':
                return <ImageField value={v} onChange={(nv) => set(f.name, nv)} />;
            case 'textarea':
                return (
                    <textarea
                        rows={5}
                        value={v}
                        onChange={(e) => set(f.name, e.target.value)}
                        className={inputCls}
                    />
                );
            case 'currency':
                return (
                    <select value={v} onChange={(e) => set(f.name, e.target.value)} className={inputCls}>
                        {CURRENCIES.map((c) => (
                            <option key={c.code} value={c.code}>
                                {c.label}
                            </option>
                        ))}
                    </select>
                );
            default:
                return (
                    <input
                        type={f.type === 'number' ? 'number' : 'text'}
                        step={f.type === 'number' ? 'any' : undefined}
                        min={f.type === 'number' ? 0 : undefined}
                        value={v}
                        onChange={(e) => set(f.name, e.target.value)}
                        className={inputCls}
                    />
                );
        }
    };

    return (
        <form action={formAction} className="space-y-6">
            <input type="hidden" name="data" value={JSON.stringify(values)} />

            {state?.error ? (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                    {state.error}
                </div>
            ) : null}
            {state?.success ? (
                <div className="flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                    <CheckCircle2 size={16} /> Invoice settings saved.
                </div>
            ) : null}

            {INVOICE_SETTINGS_SECTIONS.map((section) => (
                <section key={section.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                    <h2 className="mb-5 text-base font-bold text-slate-900">{section.title}</h2>
                    <div className="grid gap-5 md:grid-cols-2">
                        {section.fields.map((f) => (
                            <div
                                key={f.name}
                                className={f.type === 'textarea' || f.type === 'image' ? 'md:col-span-2' : ''}
                            >
                                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                                    {f.label}
                                </label>
                                {renderInput(f)}
                                {f.hint ? <p className="mt-1 text-xs text-slate-400">{f.hint}</p> : null}
                            </div>
                        ))}
                    </div>
                </section>
            ))}

            <button
                type="submit"
                disabled={pending}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white hover:opacity-90 disabled:opacity-60"
            >
                <Save size={16} /> {pending ? 'Saving…' : 'Save settings'}
            </button>
        </form>
    );
}
