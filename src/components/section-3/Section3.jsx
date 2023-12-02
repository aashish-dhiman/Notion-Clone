import emoji2 from "../../assets/emoji2.png";
import product1 from "../../assets/product1.png";
import product2 from "../../assets/product2.png";
import tinder from "../../assets/tinder.png";
import { FaShuffle } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import TabbedComponents from "./TabbedComponents";

const Section3 = () => {
    return (
        <section className="pt-14 md:pt-[100px]">
            <div className="flex flex-col md:flex-row items-center justify-start gap-5 md:gap-0 relative">
                <img
                    src={emoji2}
                    alt=""
                    className="w-[30%] md:w-[20%] order-2 md:order-1 relative md:ml-4 -left-[120px] md:static"
                />
                <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold md:ml-10 order-1 md:order-2">
                    Powerful building blocks
                </h3>
            </div>

            {/* Tabbed components */}
            <div className="bg-[#f6f5f4] rounded-xl p-8 -mt-2 md:-mt-3">
                <div className="w-[90%] sm:w-[70%] md:w-[50%]">
                    <span>
                        <FaShuffle className="text-[24px] text-blue-500" />
                    </span>
                    <div className="mt-4">
                        <h5 className="text-xl font-bold">
                            Visualize, filter & sort any way you want
                        </h5>
                        <p className="">
                            Show only tasks assigned to you, or items marked as
                            urgent. Break down any project in the way that’s
                            most helpful to you.
                        </p>
                    </div>
                </div>
                {/* Tab Images */}
                <TabbedComponents />
            </div>

            <div className="flex items-center flex-col sm:flex-row justify-center gap-6 overflow-hidden">
                <div className="flex-1 bg-[#f6f5f4] rounded-xl p-8 mt-6">
                    <div className="w-[100%]">
                        <span>
                            <FaEye className="text-[28px] text-blue-500" />
                        </span>
                        <div className="mt-4">
                            <h5 className="text-xl font-bold">
                                Customize the info you track
                            </h5>
                            <p className="mt-1 text-lg">
                                Create your own labels, tags, owners, and more,
                                so everyone has context and everything stays
                                organized.
                            </p>
                        </div>
                    </div>
                    <img
                        src={product1}
                        alt=""
                        className="ml-7 -mb-7 rounded-xl"
                    />
                </div>
                <div className="flex-1 bg-[#f6f5f4] rounded-xl p-8 mt-6">
                    <div className="">
                        <span>
                            <IoIosColorPalette className="text-[28px] text-blue-500" />
                        </span>
                        <div className="mt-4">
                            <h5 className="text-xl font-bold">
                                Build any page, communicate any idea
                            </h5>
                            <p className="mt-1 text-lg">
                                Everything is drag and drop in Notion — images,
                                toggles, to-do’s, even embedded databases.
                            </p>
                        </div>
                    </div>
                    <img
                        src={product2}
                        alt=""
                        className="ml-7 -mb-7 rounded-xl"
                    />
                </div>
            </div>
            <div className="flex items-center flex-col justify-center gap-4 mt-6 md:mt-10">
                <p className="text-center text-lg md:text-3xl font-medium px-3 md:px-[150px] md:mx-10 font-serif ">
                    {" "}
                    &ldquo;Notion adapts to your needs. It’s as minimal or as
                    powerful as you need it to be.&rdquo;
                </p>
                <span className="flex items-center gap-4">
                    <img src={tinder} alt="" className="w-[15%]" />
                    <span className="text-sm md:text-lg font-bold">
                        <p>Rahim Makani</p>
                        <p className="text-sm ">
                            Director of Product, Matchgroup
                        </p>
                    </span>
                </span>
            </div>
        </section>
    );
};

export default Section3;
