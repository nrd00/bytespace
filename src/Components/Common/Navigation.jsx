import { Link } from "react-router";
import { Handbag } from 'lucide-react';
import Logo from "../Logo";



const Navigation = () => {
    return (
        <div className="py-4 sticky top-0 left-0 w-full z-50">
            <div className="container flex justify-between">
                <Logo position="header" usage=""/>
                <nav className="flex gap-x-4 items-center text-[#F5F5F6] text-base">
                    <Link to="/">Home</Link>
                    <Link to="/courses">Courses</Link>
                    <Link to="/creator">Creator</Link>
                </nav>
                <div className="flex gap-x-3 items-center text-[#F5F5F6] text-base">
                    <Link to="/login">Sign In</Link>
                    <Link to="/signup">Join Us</Link>
                    <button>
                        <Handbag />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navigation;