import { FaArrowRight } from "react-icons/fa";
import png66 from "../../assets/png66.png"

const Section7 = () => {
    return (
        <section className="pt-8 sm:pt-14 md:pt-[100px] px-2 md:px-0 -mb-20">
            <div className="flex items-center flex-col gap-5 px-2 sm:px-10 text-center">
                <h3 className="text-2xl sm:text-3xl md:text-6xl font-bold">
                    Get started for free
                </h3>
                <p className="w-[70%] md:w-[60%] text-center text-lg ">
                    Play around with it first. Pay and add your team later.
                </p>
                <div className="flex items-center gap-5">
                    <a
                        href="https://www.notion.so/signup"
                        className="bg-black hover:bg-gray-800 text-white font-medium rounded-lg px-4 py-2 text-[14px]"
                    >
                        Try Notion Free
                    </a>
                    <a
                        href="https://www.notion.so/contact-sales"
                        className="flex items-center gap-2 font-medium text-blue-400 group hover:underline"
                    >
                        Request a demo{" "}
                        <FaArrowRight className="mt-1 group-hover:border-b-[2px] border-blue-400" />
                    </a>
                </div>
            </div>
            <div className="flex items-center">
                <img src={png66} alt="" className="w-[60%] mx-auto mt-6" />
            </div>
        </section>
    );
};

export default Section7;
