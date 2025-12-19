export function SectionSpacer() {
  return (
    <div className="relative w-full h-12 md:h-16 lg:h-20 bg-[var(--color-bg-primary)] overflow-hidden flex items-center justify-center">
      {/* Horizontal subtle continuity line - Extremely minimalist */}
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[var(--color-steel-dark)]/20 to-transparent" />
    </div>
  );
}
