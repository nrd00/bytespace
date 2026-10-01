import Button from "../Button";
import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className="pt-8 pb-5 border border-t-[#242528]">
      <div className="container">
        <Logo />
        <div className="wrapper grid grid-cols-2 pt-5">
          <div>
            <p className="text-[#242528] text-base pb-5">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>
            <div className="flex gap-x-4 w-full py-3">
              <input
                placeholder="Enter your email"
                className="px-5 py-2.5 outline-0 border border-[#CED0D3] text-[#242528] rounded-3xl w-1/2"
              />
              <Button text="Search" />
            </div>
            <p className="pt-5 text-sm text-[#242528]">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>
          <div className="flex justify-between pl-3">
            <ul className="flex flex-col text-base text-[#242528] gap-y-4">
              <li>Featured Courses</li>
              <li>Featured Categories</li>
              <li>Business</li>
              <li>IT</li>
              <li>Design</li>
            </ul>
            <ul className="flex flex-col text-base text-[#242528] gap-y-4">
              <li>Development</li>
              <li>Marketing</li>
              <li>Photography</li>
              <li>Finance</li>
              <li>Sport</li>
            </ul>
            <ul className="flex flex-col text-base text-[#242528] gap-y-4">
              <li>Become a Creator</li>
              <li>Affiliate Program</li>
              <li>Contact</li>
              <li>Help</li>
              <li>About</li>
            </ul>
          </div>
        </div>
        <hr className="mt-25"></hr>
        <div className="flex justify-between pt-5">
          <p className="text-[#242528] text-sm">@ 2023 ByteSpace. All rights reserved.</p>
          <ul className="flex gap-x-5 text-[#242528] text-base">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookies Settings</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
