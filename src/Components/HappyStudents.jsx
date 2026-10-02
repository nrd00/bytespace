

const HappyStudents = ({className='bg-white'}) => {
  const avatars = [
    "https://i.pravatar.cc/100?img=12",
    "https://i.pravatar.cc/100?img=32",
    "https://i.pravatar.cc/100?img=47",
    "https://i.pravatar.cc/100?img=5",
    "https://i.pravatar.cc/100?img=16",
    "https://i.pravatar.cc/100?img=25",
    "https://i.pravatar.cc/100?img=44",
  ];

  return (
    <div className={`w-fit rounded-2xl ${className} px-4 py-3 shadow-lg`}>
      <p className="text-sm font-medium text-gray-800">
        Happy Students
      </p>

      <div className="flex items-center gap-1 text-xs text-gray-500">
        <span>4.5 (240)</span>
        <span className="text-yellow-400">★</span>
      </div>

      <div className="mt-1 flex items-center">
        <div className="flex -space-x-3">
          {avatars.map((avatar, index) => (
            <img
              key={index}
              src={avatar}
              alt={`Student ${index + 1}`}
              className="h-9 w-9 rounded-full border-2 border-white object-cover"
            />
          ))}
        </div>

        <div className="relative z-10 ml-1 flex h-9 min-w-9 items-center justify-center rounded-full bg-lime-400 px-2 text-xs font-semibold text-black">
          2K+
        </div>
      </div>
    </div>
  );
};

export default HappyStudents;