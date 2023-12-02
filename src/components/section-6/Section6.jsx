import { FaArrowRight } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaFlagCheckered } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import png65 from "../../assets/png65.png";
import { GrDocumentNotes } from "react-icons/gr";
import { IoIosAirplane } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { IoBed } from "react-icons/io5";

const Section6 = () => {
    return (
        <section className="pt-8 sm:pt-14 md:pt-[100px] px-2 md:px-0">
            <div className="flex items-center flex-col gap-5 px-2 sm:px-10">
                <h3 className="text-xl sm:text-3xl md:text-5xl font-bold">
                    Endless ways to use it
                </h3>

                <a
                    href="https://www.notion.so/templates"
                    className="flex items-center gap-2 font-medium text-blue-400 mt-2 group hover:underline"
                >
                    Browse all templates{" "}
                    <FaArrowRight className="mt-1 group-hover:border-b-[2px] border-blue-400" />
                </a>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 min-h-full mt-6">
                {/* primary bar */}
                <div className="flex-1 cursor-pointer bg-[#f6f5f4] rounded-xl p-8 -mb-5">
                    <div className="w-[90%]">
                        <span>
                            <FaHome className="text-[22px] text-[#ea4e43]" />
                        </span>
                        <div className="mt-4">
                            <h5 className="text-xl font-bold">Company wiki</h5>
                            <a
                                href="https://www.notion.so/templates/company-home"
                                className="flex items-center gap-2 font-medium text-blue-400 mt-2 group hover:underline"
                            >
                                Get template{" "}
                                <FaArrowRight className="mt-1 group-hover:border-b-[2px] border-blue-400" />
                            </a>
                        </div>
                    </div>
                    <img
                        src={png65}
                        alt=""
                        className="ml-7 -mb-7 rounded-xl pt-14"
                    />
                </div>

                {/* sidebar */}
                <div className="flex-1 min-h-full flex items-center flex-col gap-3 sm:gap-6 mt-6 w-full">
                    {/* row 1 */}
                    <div className="flex items-center gap-3 sm:gap-6 justify-between w-full">
                        <div className="flex-1 cursor-pointer bg-[#f6f5f4] rounded-xl p-8 px-2 sm:px-4">
                            {" "}
                            <span>
                                <FaFlagCheckered className="text-[22px] text-[#0a85d1]" />
                            </span>
                            <div className="mt-4 ">
                                <h5 className="text-md sm:text-xl font-bold w-full">
                                    Product roadmap
                                </h5>
                                <a
                                    href="https://www.notion.so/templates/roadmap"
                                    className="flex items-center gap-2 font-medium text-blue-400 mt-4 group hover:underline"
                                >
                                    Get template{" "}
                                    <FaArrowRight className="mt-1 group-hover:border-b-[2px] border-blue-400" />
                                </a>
                            </div>
                        </div>

                        <div className="flex-1 cursor-pointer bg-[#f6f5f4] rounded-xl p-8 px-2 sm:px-4">
                            {" "}
                            <span>
                                <FaCheckCircle className="text-[24px] text-orange-500 " />
                            </span>
                            <div className="mt-4 ">
                                <h5 className="text-md sm:text-xl font-bold">
                                    OKRs
                                </h5>
                                <a
                                    href="https://www.notion.so/templates/notions-company-goals"
                                    className="flex items-center gap-2 font-medium text-blue-400 mt-4 group hover:underline"
                                >
                                    Get template{" "}
                                    <FaArrowRight className="mt-1 group-hover:border-b-[2px] border-blue-400" />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* row 2 */}
                    <div className="flex items-center gap-3 sm:gap-6 justify-between w-full">
                        <div className="flex-1 cursor-pointer bg-[#f6f5f4] rounded-xl p-8 px-2 sm:px-4">
                            {" "}
                            <span>
                                <GrDocumentNotes className="text-[22px] text-orange-400" />
                            </span>
                            <div className="mt-4 ">
                                <h5 className="text-md sm:text-xl font-bold w-full">
                                    Meeting notes
                                </h5>
                                <a
                                    href="https://www.notion.so/templates/meeting-notes-startup"
                                    className="flex items-center gap-2 font-medium text-blue-400 mt-4 group hover:underline"
                                >
                                    Get template{" "}
                                    <FaArrowRight className="mt-1 group-hover:border-b-[2px] border-blue-400" />
                                </a>
                            </div>
                        </div>

                        <div className="flex-1 cursor-pointer bg-[#f6f5f4] rounded-xl p-8 px-2 sm:px-4">
                            {" "}
                            <span>
                                <IoIosAirplane className="text-[26px] text-[#ea4e43] " />
                            </span>
                            <div className="mt-4 ">
                                <h5 className="text-md sm:text-xl font-bold">
                                    Vacation planner
                                </h5>
                                <a
                                    href="https://www.notion.so/templates/travel-planning"
                                    className="flex items-center gap-2 font-medium text-blue-400 mt-4 group hover:underline"
                                >
                                    Get template{" "}
                                    <FaArrowRight className="mt-1 group-hover:border-b-[2px] border-blue-400" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* row 3 */}
                    <div className="flex items-center gap-3 sm:gap-6 justify-between w-full">
                        <div className="flex-1 cursor-pointer bg-[#f6f5f4] rounded-xl p-8 px-2 sm:px-4">
                            {" "}
                            <span>
                                <SlCalender className="text-[22px] text-[#2a9d99]" />
                            </span>
                            <div className="mt-4 ">
                                <h5 className="text-md sm:text-xl font-bold w-full">
                                    Editorial calender
                                </h5>
                                <a
                                    href="https://www.notion.so/templates/notions-editorial-calendar"
                                    className="flex items-center gap-2 font-medium text-blue-400 mt-4 group hover:underline"
                                >
                                    Get template{" "}
                                    <FaArrowRight className="mt-1 group-hover:border-b-[2px] border-blue-400" />
                                </a>
                            </div>
                        </div>

                        <div className="flex-1 cursor-pointer bg-[#f6f5f4] rounded-xl p-8 px-2 sm:px-4">
                            {" "}
                            <span>
                                <IoBed className="text-[24px] text-[#9d34da] " />
                            </span>
                            <div className="mt-4 ">
                                <h5 className="text-md sm:text-xl font-bold">
                                    Habit tracker
                                </h5>
                                <a
                                    href="https://www.notion.so/templates/notion-habit-tracker"
                                    className="flex items-center gap-2 font-medium text-blue-400 mt-4 group hover:underline"
                                >
                                    Get template{" "}
                                    <FaArrowRight className="mt-1 group-hover:border-b-[2px] border-blue-400" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section6;
