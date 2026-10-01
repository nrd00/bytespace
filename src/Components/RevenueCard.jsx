

const RevenueCard = ({

    title = 'Total Revenue',
  subtitle = 'July 1-28',
  amount = '$120.29',
  badgeText = '+12$',
  progress = 65, 
  mode = 'bar',
}) => {

    const isBarMode = mode === 'bar';
    return (
        <div
      className={`rounded-3xl bg-[#0047FF] p-6 text-white shadow-md font-sans transition-all ${
        isBarMode ? 'w-full max-w-md' : 'w-56'
      }`}
    >
      {/* Title & Subtitle Section */}
      <div>
        <h3 className="text-base font-medium tracking-tight text-white/95">
          {title}
        </h3>
        <p className="text-xs font-normal text-blue-200/80 mt-0.5">
          {subtitle}
        </p>
      </div>

      {/* Amount & Accent Pill Section */}
      <div
        className={`mt-3 flex ${
          isBarMode ? 'items-center justify-between' : 'flex-col items-start gap-3'
        }`}
      >
        <span className="text-2xl font-semibold tracking-tight text-white">
          {amount}
        </span>

        {/* Lime Accent Badge */}
        <span className="inline-block rounded-full bg-[#CCFF00] px-3.5 py-1 text-xs font-bold text-black shadow-sm">
          {badgeText}
        </span>
      </div>

      {/* Conditional Progress Bar (Shown only in 'bar' mode) */}
      {isBarMode && (
        <div className="mt-5 w-full bg-white/30 h-2.5 rounded-full overflow-hidden p-0.5 backdrop-blur-sm">
          <div
            className="bg-[#CCFF00] h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
          />
        </div>
      )}
    </div>
    );
};

export default RevenueCard;