import Button from "./Button";
import { Search } from "lucide-react";
import limeAbstractLeft from "../assets/images/lime-abstract.svg";
import limeAbstractRight from "../assets/images/lime-abstract-2.svg"
import whiteLeftTop from "../assets/images/white-abstract-1.svg"
import whiteLeftBottom from "../assets/images/white-abstract-2.svg"
import whiteRightTop from "../assets/images/white-abstract-3.svg"
import halfEclipse from "../assets/images/half-eclipse.svg"
import studentPic from "../assets/images/hero-character.png"
import HappyStudents from "./HappyStudents";
import ProgressCard from "./ProgressCard";
import DesignCard from "./DesignCard";

const HomeHero = () => {
  return (
    <div className="container min-h-screen">
        {/* Left lime abstract */}
      <div className="absolute -left-10 top-[20%] w-36 sm:left-0 sm:w-48">
        <img src={limeAbstractLeft} alt="" className="h-auto w-full" />
      </div>

      {/* Right lime abstract */}
        <div className="absolute -right-10 top-[15%] w-32 sm:right-0 sm:w-48">
          <img
            src={limeAbstractRight}
            alt=""
            className="h-auto w-full"
          />
        </div>

        {/* Left middle abstract */}
        <div className="absolute left-[12%] top-[45%] w-28 sm:w-36">
          <img
            src={whiteLeftTop}
            alt=""
            className="h-auto w-full"
          />
        </div>

        {/* Right middle abstract */}
        <div className="absolute right-[10%] top-[50%] w-26 sm:w-34">
          <img
            src={whiteRightTop}
            alt=""
            className="h-auto w-full"
          />
        </div>



      <div className="">
        <h1 className="font-heading text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl text-white text-center">
          Get Access to Hundreds
          <br />
          of Courses Available
        </h1>

        <p className="mx-auto mt-5 text-lg leading-relaxed text-[#E5E6E8] sm:text-base text-center">
          Unlock your creativity, gain valuable knowledge and grow your business
          with our wide range of courses.
        </p>
      </div>
      <div className="flex gap-x-4 w-full py-3 justify-center pt-15">
        <div className="flex gap-x-2 border border-[#CED0D3] text-[#82868E] rounded-3xl px-5 py-2.5 items-center bg-white">
          <Search className="text-[#82868E] text-sm" />
          <input
            placeholder="Course, topic, creator"
            className=" outline-0 min-w-115 "
          />
        </div>
        <Button text="Search" />
      </div>


      <div className="relative" >
        <div className="flex justify-center mt-8 ">
            <img src={halfEclipse} />
        </div>

        <div className="absolute top-[20%] left-[20%]">
          <DesignCard />
        </div>

        <div className="absolute bottom-[10%] left-[16%] z-50">
          <HappyStudents />
        </div>
        <div className="absolute top-[20%] right-[30%] z-50">
          <ProgressCard />
        </div>

        {/* Left middle abstract */}
        <div className="absolute left-[0%] bottom-[10%] w-30 sm:w-50">
          <img
            src={whiteLeftBottom}
            alt=""
            className="h-auto w-full"
          />
        </div>

        <div className="absolute right-[-4%] bottom-[10%] w-30 sm:w-50">
          <img
            src={whiteLeftTop}
            alt=""
            className="h-auto w-full"
          />
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
            <img src={studentPic} alt="" />
        </div>

      </div>
    </div>
  );
};

export default HomeHero;
