import { FaArrowRight } from "react-icons/fa";
import tool1 from "../../assets/tool1.png";
import tool2 from "../../assets/tool2.png";
import tool3 from "../../assets/tool3.png";
import tool4 from "../../assets/tool4.png";
import tool5 from "../../assets/tool5.png";
import tool6 from "../../assets/tool6.png";
import tool7 from "../../assets/tool7.png";
import tool8 from "../../assets/tool8.png";
import tool9 from "../../assets/tool9.png";
import tool10 from "../../assets/tool10.png";
import tool11 from "../../assets/tool11.png";
import tool12 from "../../assets/tool12.png";
import tool13 from "../../assets/tool13.png";
import tool14 from "../../assets/tool14.png";
import tooling from "../../assets/tooling.png";
import toolingL2 from "../../assets/toolingL1.png";
import emoji1 from "../../assets/emoji1.png";
import meta from "../../assets/meta.png";

const Section2 = () => {
    return (
        <section className="pt-8 sm:pt-14 md:pt-[100px]">
            <div>
                <div className="flex items-center flex-col gap-5 px-2 sm:px-10">
                    <h3 className="text-xl sm:text-3xl md:text-5xl font-bold">
                        Millions run on Notion every day
                    </h3>
                    <p className="w-[80%] md:w-[60%] text-center text-md sm:text-xl ">
                        Powering the world’s best teams, from next-generation
                        startups to established enterprises.
                    </p>
                    <a
                        href="https://www.notion.so/customers"
                        className="flex items-center gap-2 font-medium text-blue-500 -mt-2 group hover:underline"
                    >
                        Read Customer Stories <FaArrowRight className="mt-1 group-hover:border-b-[2px] border-blue-500" />
                    </a>
                </div>
                {/* image tools */}
                <div className="flex items-center justify-center flex-wrap gap-8 px-5 md:px-[120px] mx-auto mt-10">
                    <img src={tool1} alt="" className="w-[100px]" />
                    <img src={tool2} alt="" className="w-[100px]" />
                    <img src={tool3} alt="" className="w-[140px]" />
                    <img src={tool4} alt="" className="w-[80px]" />
                    <img src={tool5} alt="" className="w-[100px]" />
                    <img src={tool6} alt="" className="w-[100px]" />
                    <img src={tool7} alt="" className="w-[60px]" />
                    <img src={tool8} alt="" className="w-[100px]" />
                    <img src={tool9} alt="" className="w-[100px]" />
                    <img src={tool10} alt="" className="w-[100px]" />
                    <img src={tool11} alt="" className="w-[100px]" />
                    <img src={tool12} alt="" className="w-[100px]" />
                    <img src={tool13} alt="" className="w-[100px]" />
                    <img src={tool14} alt="" className="w-[100px]" />
                </div>

                <div className="mt-[100px]">
                    <div className="flex items-center flex-col gap-5 px-2 sm:px-10">
                        <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center">
                            Consolidate tools. <br /> Cut costs.
                        </h3>
                        <div className="relative mt-4 md:mt-8 px-2 sm:px-10 flex items-center flex-col">
                            <img
                                src={tooling}
                                alt=""
                                className="w-[80%] md:w-[60%] "
                            />
                            <img
                                src={toolingL2}
                                alt=""
                                className=" absolute w-[90%] md:w-[65%] object-contain"
                            />
                            <img
                                src={emoji1}
                                alt=""
                                className="absolute w-[10%] md:w-[16%] right-10 sm:right-18 lg:right-[90px] -top-10 sm:-top-[100px] lg:-top-[130px]"
                            />
                        </div>
                    </div>
                    <div className="flex items-center flex-col gap-5 px-2 sm:px-10 mt-8 md:mt-14">
                        <p className="text-center text-lg md:text-3xl font-medium px-3 lg:px-[100px] md:mx-8 font-serif">
                            &ldquo;We got rid of nearly a dozen different tools
                            because of what Notion does for us.&rdquo;
                        </p>
                        <div className="flex items-center justify-center gap-2 -mt-2">
                            <img src={meta} alt="" className="w-[20%]" />
                            <span>
                                <span className="text-sm md:text-lg font-bold">
                                    Justin Watt
                                </span>
                                <p className="text-sm ">
                                    Director of Ops & Marketing, MetaLab
                                </p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section2;
