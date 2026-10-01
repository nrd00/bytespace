import logo1 from "../assets/images/logo-1.svg";
import logo2 from "../assets/images/logo-2.svg";
import logo3 from "../assets/images/logo-3.svg";
import logo4 from "../assets/images/logo-4.svg";
import logo5 from "../assets/images/logo-5.svg";




const Partner = ({partner}) => {
    
    
  return (
    <>
      <div className="container flex gap-x-4 items-center">
        <img src={partner.img} className="w-10 h-10" />
        <p className="font-bold text-[#82868E] text-lg">
          {partner.company}
        </p>
      </div>
    </>
  );
};

const Partners = () => {
  const partners = [
    {
      company: "Outero",
      img: logo1,
    },
    {
      company: "Company1",
      img: logo2,
    },
    {
      company: "Real State",
      img: logo3,
    },
    {
      company: "Finito",
      img: logo4,
    },
    {
      company: "Metero",
      img: logo5,
    },
  ];

  return (
    <>
    <section className="py-10 flex gap-x-5 justify-between items-center bg-[#F5F5F6]">
      {partners.map((partner, index) => 
        <Partner partner={partner} key={index}/>
      )}
    </section>
    </>
  );
};

export default Partners;
