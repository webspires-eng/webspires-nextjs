'use client';

import { useId, useState } from 'react';
import { Building2 } from 'lucide-react';

/**
 * Text input with a dropdown of previous clients (from past invoices).
 * Typing filters by company, name or email; picking one calls `onPick`
 * so the form can fill every client field at once. Keyboard: ↑ ↓ Enter Esc.
 */
export default function ClientSuggestInput({
    value,
    onChange,
    onPick,
    clients = [],
    className = '',
    ...inputProps
}) {
    const listId = useId();
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(0);

    const q = String(value || '').trim().toLowerCase();
    const matches = q
        ? clients
              .filter((c) =>
                  `${c.clientCompany} ${c.clientName} ${c.clientEmail}`
                      .toLowerCase()
                      .includes(q)
              )
              .slice(0, 6)
        : [];
    const show = open && matches.length > 0;

    const pick = (c) => {
        onPick(c);
        setOpen(false);
    };

    const onKeyDown = (e) => {
        if (!show) return;
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setActive((a) => (a + 1) % matches.length);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setActive((a) => (a - 1 + matches.length) % matches.length);
        } else if (e.key === 'Enter') {
            e.preventDefault(); // pick instead of submitting the form
            pick(matches[Math.min(active, matches.length - 1)]);
        } else if (e.key === 'Escape') {
            setOpen(false);
        }
    };

    return (
        <div className="relative">
            <input
                {...inputProps}
                value={value}
                onChange={(e) => {
                    onChange(e.target.value);
                    setOpen(true);
                    setActive(0);
                }}
                onFocus={() => setOpen(true)}
                onBlur={() => setOpen(false)}
                onKeyDown={onKeyDown}
                autoComplete="off"
                role="combobox"
                aria-expanded={show}
                aria-controls={listId}
                aria-autocomplete="list"
                className={className}
            />
            {show ? (
                <ul
                    id={listId}
                    role="listbox"
                    className="absolute left-0 right-0 top-full z-20 mt-1 max-h-72 overflow-auto rounded-xl border border-slate-200 bg-white py-1 shadow-lg"
                >
                    {matches.map((c, i) => (
                        <li
                            key={`${c.clientCompany}|${c.clientName}`}
                            role="option"
                            aria-selected={i === active}
                            // mousedown (not click) so the input's blur doesn't close the list first
                            onMouseDown={(e) => {
                                e.preventDefault();
                                pick(c);
                            }}
                            onMouseEnter={() => setActive(i)}
                            className={`flex cursor-pointer items-start gap-2.5 px-3.5 py-2.5 text-sm ${
                                i === active ? 'bg-slate-100' : ''
                            }`}
                        >
                            <Building2 size={16} className="mt-0.5 shrink-0 text-slate-400" />
                            <span className="min-w-0">
                                <span className="block truncate font-semibold text-slate-800">
                                    {c.clientCompany || c.clientName}
                                </span>
                                <span className="block truncate text-xs text-slate-500">
                                    {[c.clientCompany ? c.clientName : '', c.clientEmail, c.clientPhone]
                                        .filter(Boolean)
                                        .join(' · ')}
                                </span>
                            </span>
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
}
