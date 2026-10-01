

const GrowthArticle = ({title, subTitle}) => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-[#111827] leading-[1.15] tracking-tight max-w-110 px-3 mb-10">
          {title}
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed max-w-115 font-normal">
          {subTitle}
        </p>

        </div>
    );
};

export default GrowthArticle;