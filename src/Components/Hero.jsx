
import Navigation from "./Common/Navigation";

const Hero = ({children}) => {
        
    return (
        <div className="blue-bg overflow-hidden">
            <Navigation />
            {children}
        </div>
    );
};

export default Hero;