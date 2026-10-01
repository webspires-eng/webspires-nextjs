'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import { A4_WIDTH } from '@/components/invoices/InvoiceDocument';

/*
 * Shrinks the fixed-width A4 <InvoiceDocument> to fit narrow screens (phones
 * opening a WhatsApp link) with a CSS transform. dompdf.js measures the live
 * DOM, so InvoiceActions sets [data-invoice-exporting] on <html> while it
 * exports — the rule below drops the transform for that moment so the PDF is
 * always generated at true A4 size.
 */
export default function InvoicePaper({ children, className = '' }) {
    const outerRef = useRef(null);
    const innerRef = useRef(null);
    const [scale, setScale] = useState(1);
    const [height, setHeight] = useState(null);

    useLayoutEffect(() => {
        const outer = outerRef.current;
        const inner = innerRef.current;
        if (!outer || !inner) return;
        const update = () => {
            const s = Math.min(1, outer.clientWidth / A4_WIDTH);
            setScale(s);
            setHeight(inner.offsetHeight * s);
        };
        update();
        const ro = new ResizeObserver(update);
        ro.observe(outer);
        ro.observe(inner);
        return () => ro.disconnect();
    }, []);

    const scaled = scale < 1;

    return (
        <div ref={outerRef} className="invoice-paper-fit w-full">
            <style>{`
                [data-invoice-exporting] .invoice-paper-box { height: auto !important; }
                [data-invoice-exporting] .invoice-paper-scale { transform: none !important; }
            `}</style>
            <div
                className="invoice-paper-box"
                style={{ height: scaled && height ? height : undefined }}
            >
                <div
                    ref={innerRef}
                    className={`invoice-paper-scale ${className}`}
                    style={{
                        width: A4_WIDTH,
                        margin: scaled ? 0 : '0 auto',
                        transform: scaled ? `scale(${scale})` : undefined,
                        transformOrigin: 'top left',
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}
