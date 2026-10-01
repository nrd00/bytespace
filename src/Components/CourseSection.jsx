import { courses, courseCategories } from "../data/course";
import { useState } from "react";
import { BarChart3, Star } from "lucide-react";


const CourseSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Featured");

  // 2. Filter courses dynamically based on the active category
  const filteredCourses =
    selectedCategory === "Featured"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  

  return (
    <div className="py-18">
      <div className="container">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B0F19] tracking-tight leading-tight text-center">
          Discover Your Passion, <br className="hidden sm:inline" />
          Build Your Skills
        </h2>

        <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-normal text-center pt-5">
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different fields, from technology
          to the arts, and make a difference in your career and life.
        </p>

        <div className="my-8 flex flex-wrap items-center gap-3 max-w-200 mx-auto">
          {courseCategories.map((category) => {
            const isActive = selectedCategory === category;

            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
          shrink-0
          rounded-full
          px-5
          py-2
          text-sm
          font-medium
          transition-colors
          cursor-pointer
          ${
            isActive
              ? "bg-[#D4FB20] text-black shadow-sm"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }
        `}
              >
                {category}
              </button>
            );
          })}
          <button className="px-5 py-2 text-sm text-[#003BE2] cursor-pointer hover:bg-gray-100 rounded-full">
            + More
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div
                key={course.id}
                className="w-full rounded-[28px] border border-gray-300 bg-white p-5"
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-[18px]">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-64 object-cover"
                  />

                  {/* Image bottom statistics */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2">
                    <span className="rounded-full bg-white/80 backdrop-blur-sm px-4 py-2 text-[10px] font-medium text-gray-700">
                      {course.lessons || 17} Lessons
                    </span>

                    <span className="rounded-full bg-white/80 backdrop-blur-sm px-4 py-2 text-[10px] font-medium text-gray-700">
                      {course.duration || "2 hours 16 mins"}
                    </span>

                    <span className="rounded-full bg-white/80 backdrop-blur-sm px-4 py-2 text-[10px] font-medium text-gray-700">
                      {course.comments || 59} Comments
                    </span>
                  </div>
                </div>

                {/* Title + Rating */}
                <div className="mt-7 flex items-start justify-between gap-3">
                  <h3 className="text-[27px] leading-tight font-bold text-gray-900 line-clamp-2">
                    {course.title}
                  </h3>

                  <div className="flex shrink-0 items-center gap-1 pt-1">
                    <span className="text-xl text-gray-600">
                      {course.rating || "4.5"}
                    </span>

                    <Star
                      size={24}
                      fill="currentColor"
                      className="text-gray-300"
                    />
                  </div>
                </div>

                {/* Creator */}
                <p className="mt-1 text-base text-gray-500">
                  by{" "}
                  <span className="text-blue-600">{course.creator?.name}</span>
                </p>

                {/* Bottom section */}
                <div className="mt-7 flex items-center justify-between">
                  {/* Level */}
                  <div className="flex items-center gap-2 rounded-full bg-gray-100 px-5 py-3">
                    <BarChart3 size={22} className="text-gray-600" />

                    <span className="text-sm font-medium text-gray-600">
                      {course.level}
                    </span>
                  </div>

                  {/* Students / Avatars */}
                  <div className="flex items-center">
                    {/* Replace these with actual course creator/student images */}
                    <div className="flex -space-x-3">
                      {(course.students || [])
                        .slice(0, 4)
                        .map((student, index) => (
                          <img
                            key={index}
                            src={student.image}
                            alt=""
                            className="h-10 w-10 rounded-full border-2 border-white object-cover"
                          />
                        ))}
                    </div>

                    <span className="ml-1 flex h-10 min-w-10 items-center justify-center rounded-full bg-lime-400 px-2 text-sm font-medium text-gray-900">
                      {course.studentCount ? `${course.studentCount}+` : "26+"}
                    </span>
                  </div>
                </div>

                {/* Price */}
                <div className="mt-5 flex items-end gap-2">
                  <span className="text-3xl font-bold leading-none text-blue-700">
                    ${course.price}
                  </span>

                  <span className="mb-0.5 text-sm text-gray-500">
                    /lifetime
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No courses found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
