export default function EventCard({ title, subtitle, variant, className = "" }) {
  const styles = {
    blue: "bg-brand-blueBg border-l-[3px] border-brand-blueBorder",
    green: "bg-brand-greenBg border-l-[3px] border-brand-greenBorder",
    gold: "bg-brand-goldBg border-l-[3px] border-brand-goldBorder"
  };

  const textColors = {
    blue: "text-brand-dark",
    green: "text-green-800",
    gold: "text-amber-900"
  };

  const subtextColors = {
    blue: "text-slate-500",
    green: "text-green-600/70",
    gold: "text-amber-700/70"
  };

  return (
    <div className={`p-2.5 h-full ${styles[variant]} ${className}`}>
      <div className={`text-[10px] sm:text-xs font-bold leading-tight ${textColors[variant]}`}>
        {title}
      </div>
      {subtitle && (
        <div className={`text-[9px] sm:text-[10px] mt-0.5 leading-tight ${subtextColors[variant]}`}>
          {subtitle}
        </div>
      )}
    </div>
  );
}
