export function Badge({ className = "", ...props }) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs
                  bg-[var(--accent)] border-[var(--border)] text-[var(--foreground)] ${className}`}
      {...props}
    />
  );
}
export default Badge;
