export function Card({ className = "", ...props }) {
  return <div className={`kernel-card bg-[var(--card)] rounded-lg ${className}`} {...props} />;
}
export function CardHeader({ className = "", ...props }) {
  return <div className={`p-6 ${className}`} {...props} />;
}
export function CardTitle({ className = "", ...props }) {
  return <h3 className={`text-lg font-bold text-[var(--foreground)] ${className}`} {...props} />;
}
export function CardDescription({ className = "", ...props }) {
  return <p className={`text-[var(--muted-foreground)] ${className}`} {...props} />;
}
export function CardContent({ className = "", ...props }) {
  return <div className={`p-6 pt-0 ${className}`} {...props} />;
}
export default Card;
