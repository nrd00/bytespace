import TestimonialCard from "./TestimonialCard";
import Sarah from '../assets/images/sarah.png'
import James from '../assets/images/james.png'
import Alex from '../assets/images/alex.png'

const Testimonials =()=> {

    const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    image: Sarah,
    text: `"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."`,
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    image: James,
    text: `"I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."`,
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    image: Alex,
    text: `"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally!"`,
  },
];

  return (
    <section className="relative isolate overflow-hidden bg-[#fafafa]">
      

      {/* Lime glow */}
      <div
        className="
          pointer-events-none
          absolute
          -top-55
          left-1/2
          -z-10
          h-162.5
          w-212.5
          -translate-x-1/2
          rounded-full
          bg-[radial-gradient(circle,rgba(207,255,0,0.65)_0%,rgba(207,255,0,0.28)_35%,rgba(207,255,0,0)_72%)]
          blur-3xl
        "
      />

      {/* Bottom-left blue/lavender glow */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-75
          -left-70
          -z-10
          h-162.5
          w-162.5
          rounded-full
          bg-[radial-gradient(circle,rgba(125,155,255,0.5)_0%,rgba(125,155,255,0.2)_40%,rgba(125,155,255,0)_72%)]
          blur-3xl
        "
      />

      {/* Small right-side green glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-75
          top-[30%]
          -z-10
          h-150
          w-150
          rounded-full
          bg-[radial-gradient(circle,rgba(210,255,0,0.3),transparent_70%)]
          blur-3xl
        "
      />

      {/* Top decorative line */}
      <div className="absolute inset-x-0 top-0 flex h-0.2">
        <span className="w-[7%] bg-[#d8ff00]" />
        <span className="w-[7%] bg-[#174cff]" />
        <span className="w-[7%] bg-[#d8ff00]" />
        <span className="flex-1 bg-[#174cff]" />
        <span className="w-[12%] bg-[#d8ff00]" />
        <span className="w-[8%] bg-[#174cff]" />
      </div>

      {/* =========================
          CONTENT
      ========================== */}

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-25">
        {/* Heading area */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Heading */}
          <div>
            <h2
              className="
                max-w-125
                text-4xl
                font-bold
                leading-[1.1]
                tracking-[-0.03em]
                text-black
                sm:text-5xl
                lg:text-[40px]
                xl:text-[42px]
              "
            >
              Discover What Our
              <br />
              Community Is Saying
            </h2>
          </div>

          {/* Description */}
          <div className="lg:pl-8">
            <p className="max-w-130 text-[15px] leading-[1.6] text-[#555]">
              At ByteSpace, our vibrant community of learners and creators is
              at the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating
              on our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;