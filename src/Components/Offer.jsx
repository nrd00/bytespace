import Button from "./Button";
import OfferBg from "../assets/images/creator-bg.png";

const Offer = () => {
  return (
    <div
      className="w-full max-w-full min-h-100 overflow-hidden bg-cover bg-center py-21"
      style={{
        backgroundImage: `url(${OfferBg})`,
      }}
    >
      <div className="container">
        <h2 className="text-[#F5F5F6] text-5xl font-semibold mx-auto max-w-160 pb-10">Unlock Your Potential as a Creator with ByteSpace</h2>
        <p className="max-w-240 text-base text-[#F5F5F6] leading-6 text-center mx-auto pb-10">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <div className="flex justify-center items-center">
        <Button text="Join as Creator" />
        </div>
      </div>
    </div>
  );
};

export default Offer;
