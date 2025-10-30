/* Simple JSX button wrapper (Kernel style) */
export function Button({ className = "", variant = "default", size = "md", ...props }) {
  const base = "kernel-button inline-flex items-center justify-center rounded-lg font-medium transition-all";
  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };
  const variants = {
    default: "bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-95",
    outline: "border-2 border-[#333333] text-white bg-transparent hover:border-gray-400",
    ghost: "bg-transparent hover:bg-[var(--accent)]",
  };
  return (
    <button className={`${base} ${sizes[size]} ${variants[variant] || variants.default} ${className}`} {...props} />
  );
}
export default Button;
