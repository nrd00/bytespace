

const TestimonialCard = ({testimonial}) => {
  
  
    return (
        <article className="rounded-[20px] bg-white p-5 shadow-[0_10px_35px_rgba(0,0,0,0.03)] sm:p-6">
      {/* Avatar */}
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="h-16 w-16 rounded-full object-cover"
      />

      {/* Name + Role */}
      <div className="mt-5">
        <h3 className="text-[17px] font-bold leading-tight text-black">
          {testimonial.name}
        </h3>

        <p className="mt-1 text-sm font-normal text-[#1455ff]">
          {testimonial.role}
        </p>
      </div>

      {/* Testimonial */}
      <p className="mt-6 text-[14px] leading-[1.7] text-[#606060]">
        {testimonial.text}
      </p>
    </article>
    );
};

export default TestimonialCard;