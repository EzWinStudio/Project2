"use client";

import { useEffect, useState } from "react";

export default function CopyInvite({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button type="button" className="btn btn-ghost copy-btn" onClick={copy} aria-live="polite">
      {copied ? "Kopyalandı ✓" : label}
    </button>
  );
}
