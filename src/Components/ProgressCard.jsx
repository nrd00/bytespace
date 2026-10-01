

const ProgressCard = ({ progress = 55 }) => {
    return (
        <div className="max-w-50 w-full bg-white rounded-2xl p-6 border border-gray-100 shadow-sm font-sans">
      {/* Label */}
      <p className="text-gray-700 font-medium text-sm sm:text-base tracking-tight">
        Learning Progress
      </p>

      {/* Percentage Output */}
      <h3 className="text-4xl sm:text-5xl font-black text-gray-900 my-3 tracking-tight">
        {progress}%
      </h3>

      {/* Progress Track & Fill Bar */}
      <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
        <div
          className="bg-lime-400 h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
    );
};

export default ProgressCard;