import CategoryCard from "./CategoryCard";

import {
  Wrench,
  Code2,
  Laptop,
  Building2,
  Megaphone,
  Camera,
} from "lucide-react";

const categories = [
  {
    name: "Design",
    icon: Wrench,
  },
  {
    name: "Development",
    icon: Code2,
  },
  {
    name: "IT & Software",
    icon: Laptop,
  },
  {
    name: "Business",
    icon: Building2,
  },
  {
    name: "Marketing",
    icon: Megaphone,
  },
  {
    name: "Photography",
    icon: Camera,
  },
];

const LearningCategories = () => {
    return (
         <section className="bg-white px-5 py-16 sm:px-8 lg:py-18">
      <div className="mx-auto max-w-275">

        {/* Heading */}
        <div className="text-center">
          <h2
            className="
              text-[28px]
              font-bold
              leading-tight
              tracking-tight
              text-[#101426]
              sm:text-[32px]
              lg:text-[34px]
            "
          >
            Explore Diverse Learning Paths at Bytespace
          </h2>

          <p
            className="
              mx-auto
              mt-3
              max-w-175
              text-[13px]
              leading-[1.7]
              text-[#8a8e99]
              sm:text-[14px]
            "
          >
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there's something for everyone. Unleash your potential
            and explore our carefully curated categories.
          </p>
        </div>

        {/* Categories */}
        <div
          className="
            mt-12
            grid
            grid-cols-2
            gap-4
            sm:grid-cols-3
            lg:grid-cols-6
            lg:gap-7
          "
        >
          {categories.map((category) => (
            <CategoryCard
              key={category.name}
              category={category}
            />
          ))}
        </div>
      </div>
    </section>
    );
};

export default LearningCategories;