import WomanImg from "../img/woman_hero.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className=" h-[800px] bg-[url('./img/bg_hero.svg')] bg-no-repeat bg-cover bg-center py-24">
      <div className="container p-[30px] lg:p-0 mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className=" font-semibold flex items-center uppercase">
            <div className=" w-10 h-[2px] bg-red-500 mr-3"></div>
            <div>New Trend</div>
          </div>
          <h1 className="text-[70px] leadin-[1.1] font-light mb-4">
            AUTUMN SALE STYLISH <br />
            <span>WOMEN</span>
          </h1>
          <Link to={'/'} className="self-start uppercase font-semibold border-b-2 border-black">Discover More</Link>
        </div>
        <div className="hidden lg:block">
          <img src={WomanImg} alt="" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
