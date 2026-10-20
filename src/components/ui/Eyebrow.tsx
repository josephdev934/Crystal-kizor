// Section label: thin vertical hairline + "04 / STUDIO COKA"
export default function Eyebrow({ number, children, className = "" }: { number: string; children: string; className?: string }) {
  return (
    <p className={`flex items-center gap-4 text-label font-semibold uppercase tracking-label ${className}`}>
      <span aria-hidden="true" className="h-10 w-px bg-current opacity-60" />
      {number} / {children}
    </p>
  );
}
