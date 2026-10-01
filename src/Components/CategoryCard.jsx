

const CategoryCard = ({category}) => {
  const Icon = category.icon;

  return (
    <button
      type="button"
      className="
        group
        flex
        h-31.5
        w-full
        flex-col
        items-center
        justify-center
        rounded-2xl
        border
        border-[#d9dce1]
        bg-white
        transition-all
        duration-200
        hover:-translate-y-1
        hover:border-[#baff00]
        hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)]
      "
    >
      {/* Icon circle */}
      <span
        className="
          flex
          h-11.25
          w-11.25
          items-center
          justify-center
          rounded-full
          bg-[#baff00]
          text-[#17191f]
          transition-transform
          duration-200
          group-hover:scale-110
        "
      >
        <Icon
          size={22}
          strokeWidth={2.2}
        />
      </span>

      {/* Category name */}
      <span className="mt-3 text-[15px] font-medium text-[#202124]">
        {category.name}
      </span>
    </button>
  );
}

export default CategoryCard;