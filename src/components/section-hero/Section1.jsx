import { FaArrowRight } from "react-icons/fa";
import hero1 from "../../assets/hero1.png";
import TabbedComponents from "./TabbedComponents";

const Section1 = () => {
    return (
        <section className="mt-10 sm:mt-4">
            {/* hero section */}
            <div>
                <div className="flex flex-col items-center gap-3 text-center">
                    <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold px-3 sm:px-[100px] mx-auto text-center">
                        Write, plan, share. <br />
                        With AI at your side.
                    </h1>

                    <p className="text-lg sm:text-xl md:text-2xl font-semibold px-4  ">
                        Notion is the connected workspace where better, faster
                        work happens.
                    </p>
                    <a
                        href="https://www.notion.so/signup"
                        className="bg-black hover:bg-gray-800 text-white font-medium rounded-lg px-4 py-2 flex items-center gap-3 mt-2 text-[16px]"
                    >
                        Get Notion Free <FaArrowRight className="mt-1" />
                    </a>
                </div>
                <div className="mt-10">
                    <img
                        src={hero1}
                        alt="hero"
                        className="w-[80%] md:w-[60%] mx-auto"
                    />
                </div>
            </div>

            {/* tabbed components */}
            <TabbedComponents />
        </section>
    );
};

export default Section1;
