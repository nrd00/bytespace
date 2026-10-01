
const AvatarGroup = () => {
    return (
        <div className="flex items-center -space-x-2">
            <img
              className="h-8 w-8 rounded-full border-2 border-white object-cover"
              src="https://i.pravatar.cc/100?img=3"
              alt="Student"
            />
            <img
              className="h-8 w-8 rounded-full border-2 border-white object-cover"
              src="https://i.pravatar.cc/100?img=5"
              alt="Student"
            />
            <img
              className="h-8 w-8 rounded-full border-2 border-white object-cover"
              src="https://i.pravatar.cc/100?img=9"
              alt="Student"
            />
            <img
              className="h-8 w-8 rounded-full border-2 border-white object-cover"
              src="https://i.pravatar.cc/100?img=12"
              alt="Student"
            />
            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-lime-400 text-[11px] font-bold text-gray-900">
              26+
            </div>
          </div>
    );
};

export default AvatarGroup;