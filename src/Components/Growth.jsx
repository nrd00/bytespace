import GrowthArticle from "./GrowthArticle";
import HeroCharacter from "../assets/images/hero-character.png";
import LadyCharacter from "../assets/images/Image.png";
import ProgressCard from "./ProgressCard";
import limeAbstract from "../assets/images/lime-abstract-3.png";
import limeAbstract2 from "../assets/images/lime-abstract-4.svg";
import courseCard from "../assets/images/course-card.png";
import RevenueCard from "./RevenueCard";

const Growth = () => {
  const stats = [
    { value: "12K", label: "Students" },
    { value: "70+", label: "Courses" },
    { value: "16", label: "Creators" },
  ];

  const article = [
    {
      title: "Your Path to Professional Growth Starts Here!",
      subTitle:
        "Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.",
    },
    {
      title: "Create & Manage Courses Easily.",
      subTitle:
        "ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses. ",
    },
  ];

  const features = [
    "Share Your Expertise",
    "Monetize Your Passion",
    "Flexibility and Autonomy",
    "Build a Community",
  ];

  console.log(top);

  return (
    <section
      className=" min-h-screen w-full
      py-20
    bg-white
    bg-[radial-gradient(circle_at_25%_5%,rgba(210,255,40,0.45),transparent_28%),radial-gradient(circle_at_0%_50%,rgba(120,155,255,0.30),transparent_25%),radial-gradient(circle_at_5%_100%,rgba(210,255,40,0.65),transparent_25%),radial-gradient(circle_at_90%_95%,rgba(100,140,255,0.35),transparent_30%)]"
    >
      <div className="container">
        <div className="growth-top grid grid-cols-1 md:grid-cols-2 mb-15">
          <div>
            <GrowthArticle
              title={article[0].title}
              subTitle={article[0].subTitle}
            />
            <div className="flex items-center gap-10 sm:gap-14 font-sans mt-10">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  {/* Stat Value */}
                  <span className="text-3xl sm:text-4xl font-bold text-[#1B51F4] tracking-tight">
                    {stat.value}
                  </span>
                  {/* Stat Label */}
                  <span className="text-sm sm:text-base font-normal text-gray-500 mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute z-10">
              <img src={courseCard} className="max-w-95 max-h-95" />
            </div>
            <div className="flex justify-center relative z-20">
              <img src={HeroCharacter} alt="" />
            </div>
            <div className="absolute top-[30%] right-[18%] z-30">
              <ProgressCard />
            </div>
            <div className="absolute top-[0%] right-[-2%] z-40">
              <img src={limeAbstract} />
            </div>
          </div>
        </div>
        <div className="growth-top grid grid-cols-1 md:grid-cols-2">
          <div className="relative">
            <div className="max-w-60 max-h-30 absolute z-0 top-0 left-5">
              <RevenueCard
                mode="bar"
                title="Total Revenue"
                subtitle="July 1-28"
                amount="$120.29"
                badgeText="+12$"
                progress={65}
              />
            </div>

            <div className="max-w-20 max-h-20 absolute z-0 top-[40%] left-0">
              <RevenueCard
                mode="compact"
                title="Year to Date"
                subtitle="2023"
                amount="$1,200.38"
                badgeText="+12$"
              />
            </div>
            <div className="flex justify-center">
              <img src={LadyCharacter} alt="" className="max-w-105 max-h-150 z-10 relative" />
            </div>
            <div className="absolute top-[12%] right-[13%] z-20">
              <img src={limeAbstract2} />
            </div>
          </div>
          <div>
            <GrowthArticle
              title={article[1].title}
              subTitle={article[1].subTitle}
            />
            <ul className="space-y-4 font-sans mt-15">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-gray-800 font-medium text-base"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0052FF] text-white shadow-sm">
                    <svg
                      className="h-3.5 w-3.5 stroke-current"
                      fill="none"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>

                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Growth;
