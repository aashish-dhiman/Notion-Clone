import { useState } from "react";
import logo from "../../assets/logo.png";
import png01 from "../../assets/png01.png";
import png02 from "../../assets/png02.png";
import png03 from "../../assets/png03.png";
import { IoIosArrowDown } from "react-icons/io";
import { VscSparkle } from "react-icons/vsc";
import { SiWikipedia } from "react-icons/si";
import { GoGoal } from "react-icons/go";
import { IoDocumentOutline } from "react-icons/io5";

const NavbarPC = () => {
    const [activeNav, setActiveNav] = useState();
    const handler = (nav) => {
        setActiveNav(nav);
    };

    return (
        <nav className="flex items-center gap-5 w-full p-3 fixed top-0 left-0 bg-white border-b-[1px] z-50">
            <div>
                <a
                    href="https://www.notion.so/product"
                    className="flex items-center gap-2"
                >
                    <img src={logo} alt="logo" className="w-9 h-9" />
                    <span className="font-bold text-lg">Notion</span>
                </a>
            </div>
            <div className="flex-1 flex items-center gap-2">
                <span
                    className={`flex items-center gap-1 font-medium px-2 py-1 rounded-md hover:bg-gray-100 group cursor-pointer transition-all ease-in-out duration-150 relative ${
                        activeNav === "product" ? "bg-gray-100" : "bg-white"
                    }`}
                    onMouseEnter={() => handler("product")}
                    onMouseLeave={() => handler("null")}
                >
                    Product{" "}
                    <IoIosArrowDown
                        className={`text-[12px] mt-1 font-extrabold group-hover:rotate-180 ${
                            activeNav === "product" ? "rotate-180" : ""
                        }`}
                    />
                </span>

                {/* hover product nav    */}
                {activeNav === "product" && (
                    <div
                        className="absolute top-[46px] left-[130px] flex items-start w-fit rounded-md shadow-2xl bg-white"
                        onMouseEnter={() => handler("product")}
                        onMouseLeave={() => handler("null")}
                    >
                        <div className="flex-1 flex flex-col w-full p-1 border-r-[1px]">
                            <a href="https://www.notion.so/product/wikis">
                                <div className="flex items-center gap-2 hover:bg-gray-100 py-1 px-2 rounded-md">
                                    <SiWikipedia className="text-[22px] text-[#ed665d] " />
                                    <div className="flex flex-col items-start">
                                        <span className="text-md font-[500]">
                                            Wikis
                                        </span>
                                        <p className="text-sm text-gray-500 whitespace-nowrap -mt-1 ">
                                            Centralize your knowledge
                                        </p>
                                    </div>
                                </div>
                            </a>
                            <a href="https://www.notion.so/product/projects">
                                <div className="flex items-center gap-2 hover:bg-gray-100 py-1 px-2 rounded-md">
                                    <GoGoal className="text-[22px] text-[#369ad8] " />
                                    <div className="flex flex-col items-start">
                                        <span className="text-md font-[500]">
                                            Projects
                                        </span>
                                        <p className="text-sm text-gray-500 whitespace-nowrap -mt-1 ">
                                            For every team or size
                                        </p>
                                    </div>
                                </div>
                            </a>
                            <a href="https://www.notion.so/product/docs">
                                <div className="flex items-center gap-2 hover:bg-gray-100 py-1 px-2 rounded-md">
                                    <IoDocumentOutline className="text-[22px] text-[#ffbb33] " />
                                    <div className="flex flex-col items-start">
                                        <span className="text-md font-[500]">
                                            Docs
                                        </span>
                                        <p className="text-sm text-gray-500 whitespace-nowrap -mt-1 ">
                                            Simple & powerful
                                        </p>
                                    </div>
                                </div>
                            </a>
                            <a href="https://www.notion.so/product/ai">
                                <div className="flex items-center gap-2 hover:bg-gray-100 py-1 px-2 rounded-md">
                                    <VscSparkle className="text-[22px] text-[#a748de] " />
                                    <div className="flex flex-col items-start">
                                        <span className="text-md font-[500]">
                                            Notion AI
                                        </span>
                                        <p className="text-sm text-gray-500 whitespace-nowrap -mt-1 ">
                                            Integrated AI assistant
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="flex-1 flex flex-col h-full p-1">
                            <a href="https://www.notion.so/templates">
                                <div className="flex flex-col items-start hover:bg-gray-100 py-1 px-3 rounded-md">
                                    <span className="text-md font-[500]">
                                        Template Gallery
                                    </span>
                                    <p className="text-sm text-gray-500 whitespace-nowrap -mt-1 ">
                                        Setups to get you started
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.notion.so/customers">
                                <div className="flex flex-col items-start hover:bg-gray-100 py-1 px-3 rounded-md">
                                    <span className="text-md font-[500]">
                                        Customer stories
                                    </span>
                                    <p className="text-sm text-gray-500 whitespace-nowrap -mt-1 ">
                                        See how teams use Notion
                                    </p>
                                </div>
                            </a>
                            <a href="https://www.notion.so/templates">
                                <div className="flex flex-col items-start hover:bg-gray-100 py-1 px-3 rounded-md">
                                    <span className="text-md font-[500]">
                                        Connections
                                    </span>
                                    <p className="text-sm text-gray-500 whitespace-nowrap -mt-1 ">
                                        Connect your tools to Notion
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                )}

                <span
                    className={`flex items-center gap-1 font-medium px-2 py-1 rounded-md hover:bg-gray-100 group cursor-pointer transition-all ease-in-out duration-150 relative ${
                        activeNav === "download" ? "bg-gray-100" : "bg-white"
                    }`}
                    onMouseEnter={() => handler("download")}
                    onMouseLeave={() => handler("null")}
                >
                    Download{" "}
                    <IoIosArrowDown
                        className={`text-[12px] mt-1 font-extrabold group-hover:rotate-180 ${
                            activeNav === "download" ? "rotate-180" : ""
                        }`}
                    />
                </span>

                {/* download hover nav */}
                {activeNav === "download" && (
                    <div
                        className="absolute top-[46px] left-[228px] flex items-start w-fit rounded-md shadow-2xl bg-white"
                        onMouseEnter={() => handler("download")}
                        onMouseLeave={() => handler("null")}
                    >
                        <div className="flex-1 flex flex-col h-full p-1">
                            <a href="https://www.notion.so/mobile">
                                <div className="flex flex-col items-start hover:bg-gray-100 py-1 px-3 rounded-md">
                                    <span className="text-md font-[500]">
                                        iOS & Android
                                    </span>
                                </div>
                            </a>
                            <a href="https://www.notion.so/desktop">
                                <div className="flex flex-col items-start hover:bg-gray-100 py-1 px-3 rounded-md">
                                    <span className="text-md font-[500]">
                                        Mac & Windows
                                    </span>
                                </div>
                            </a>
                            <a href="https://www.notion.so/web-clipper">
                                <div className="flex flex-col items-start hover:bg-gray-100 py-1 px-3 rounded-md">
                                    <span className="text-md font-[500]">
                                        Web Clipper
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                )}

                <span
                    className={`flex items-center gap-1 font-medium px-2 py-1 rounded-md hover:bg-gray-100 group cursor-pointer transition-all ease-in-out duration-150 relative ${
                        activeNav === "solution" ? "bg-gray-100" : "bg-white"
                    }`}
                    onMouseEnter={() => handler("solution")}
                    onMouseLeave={() => handler("null")}
                >
                    Solutions{" "}
                    <IoIosArrowDown
                        className={`text-[12px] mt-1 font-extrabold group-hover:rotate-180 ${
                            activeNav === "solution" ? "rotate-180" : ""
                        }`}
                    />
                </span>

                {/* solution hover nav */}
                {activeNav === "solution" && (
                    <div
                        className="absolute top-[46px] left-[340px] flex items-start w-fit rounded-md shadow-2xl bg-white "
                        onMouseEnter={() => handler("solution")}
                        onMouseLeave={() => handler("null")}
                    >
                        <div className="flex-1 flex flex-col w-full p-1 border-r-[1px] min-w-fit">
                            <span className="text-gray-500 text-xs px-3">
                                BY TEAM SIZE
                            </span>
                            <a href="https://www.notion.so/enterprise">
                                <div className="flex items-center gap-2 hover:bg-gray-100 py-1 px-2 mt-2 rounded-md">
                                    <img
                                        src={png01}
                                        alt=""
                                        className="w-[15%]"
                                    />
                                    <div className="flex flex-col items-start">
                                        <span className="text-md font-[500]">
                                            Enterprise
                                        </span>
                                        <p className="text-sm text-gray-500 whitespace-nowrap -mt-1 ">
                                            Advanced features for your org
                                        </p>
                                    </div>
                                </div>
                            </a>
                            <a href="https://www.notion.so/personal">
                                <div className="flex items-center gap-2 hover:bg-gray-100 py-1 px-2 rounded-md">
                                    <img
                                        src={png02}
                                        alt=""
                                        className="w-[15%]"
                                    />
                                    <div className="flex flex-col items-start">
                                        <span className="text-md font-[500]">
                                            Small business
                                        </span>
                                        <p className="text-sm text-gray-500 whitespace-nowrap -mt-1 ">
                                            Run your team on one tool
                                        </p>
                                    </div>
                                </div>
                            </a>
                            <a href="https://www.notion.so/product/docs">
                                <div className="flex items-center gap-2 hover:bg-gray-100 py-1 px-2 rounded-md">
                                    <img
                                        src={png03}
                                        alt=""
                                        className="w-[15%]"
                                    />
                                    <div className="flex flex-col items-start">
                                        <span className="text-md font-[500]">
                                            Personal
                                        </span>
                                        <p className="text-sm text-gray-500 whitespace-nowrap -mt-1 ">
                                            Free for individuals
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="flex-1 flex flex-col h-full p-1 border-r-[1px] min-w-fit min-h-full">
                            <span className="text-gray-500 text-xs px-3 whitespace-nowrap">
                                BY TEAM FUNCTION
                            </span>
                            <a href="https://www.notion.so/product/notion-for-design">
                                <div className="flex flex-col items-start hover:bg-gray-100 py-1 px-3 mt-2 rounded-md">
                                    <span className="text-md font-[500]">
                                        Design
                                    </span>
                                </div>
                            </a>
                            <a href="https://www.notion.so/product/notion-for-engineering">
                                <div className="flex flex-col items-start hover:bg-gray-100 py-1 px-3 rounded-md">
                                    <span className="text-md font-[500]">
                                        Engineering
                                    </span>
                                </div>
                            </a>
                            <a href="https://www.notion.so/product/notion-for-product">
                                <div className="flex flex-col items-start hover:bg-gray-100 py-1 px-3 rounded-md">
                                    <span className="text-md font-[500]">
                                        Product
                                    </span>
                                </div>
                            </a>
                            <a href="https://www.notion.so/product/notion-for-product">
                                <div className="flex flex-col items-start hover:bg-gray-100 py-1 px-3 rounded-md">
                                    <span className="text-md font-[500]">
                                        Managers
                                    </span>
                                </div>
                            </a>
                        </div>
                        <div className="flex-1 flex flex-col h-full p-1 min-w-fit">
                            <span className="text-gray-500 text-xs px-3">
                                NOTION FOR
                            </span>
                            <a href="https://www.notion.so/startups">
                                <div className="flex flex-col items-start hover:bg-gray-100 py-1 px-3 mt-2 rounded-md">
                                    <span className="text-md font-[500]">
                                        Startups
                                    </span>
                                </div>
                            </a>
                            <a href="https://www.notion.so/remote">
                                <div className="flex flex-col items-start hover:bg-gray-100 py-1 px-3 rounded-md">
                                    <span className="text-md font-[500]">
                                        Remote work
                                    </span>
                                </div>
                            </a>
                            <a href="https://www.notion.so/product/notion-for-education">
                                <div className="flex flex-col items-start hover:bg-gray-100 py-1 px-3 rounded-md">
                                    <span className="text-md font-[500]">
                                        Education
                                    </span>
                                </div>
                            </a>
                            <a href="https://www.notion.so/nonprofits">
                                <div className="flex flex-col items-start hover:bg-gray-100 py-1 px-3 rounded-md">
                                    <span className="text-md font-[500]">
                                        Nonprofits
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                )}

                <span
                    className={`flex items-center gap-1 font-medium px-2 py-1 rounded-md hover:bg-gray-100 group cursor-pointer transition-all ease-in-out duration-150 relative ${
                        activeNav === "resource" ? "bg-gray-100" : "bg-white"
                    }`}
                    onMouseEnter={() => handler("resource")}
                    onMouseLeave={() => handler("null")}
                >
                    Resources{" "}
                    <IoIosArrowDown
                        className={`text-[12px] mt-1 font-extrabold group-hover:rotate-180 ${
                            activeNav === "resource" ? "rotate-180" : ""
                        }`}
                    />
                </span>

                {/* resources hover nav */}
                {activeNav === "resource" && (
                    <div
                        className="absolute top-[46px] left-[448px] flex items-start w-fit rounded-md shadow-2xl bg-white"
                        onMouseEnter={() => handler("resource")}
                        onMouseLeave={() => handler("null")}
                    >
                        <div className="flex-1 flex flex-col h-full p-1">
                            <a href="https://www.notion.so/blog">
                                <div className="flex flex-col items-start hover:bg-gray-100 py-1 px-3 rounded-md">
                                    <span className="text-md font-[500]">
                                        Blog
                                    </span>
                                </div>
                            </a>
                            <a href="https://www.notion.so/help/guides">
                                <div className="flex flex-col items-start hover:bg-gray-100 py-1 px-3 rounded-md">
                                    <span className="text-md font-[500]">
                                        Guides & tutorials
                                    </span>
                                </div>
                            </a>
                            <a href="https://www.notion.so/webinars">
                                <div className="flex flex-col items-start hover:bg-gray-100 py-1 px-3 rounded-md">
                                    <span className="text-md font-[500]">
                                        Webinars
                                    </span>
                                </div>
                            </a>
                            <a href="https://www.notion.so/help">
                                <div className="flex flex-col items-start hover:bg-gray-100 py-1 px-3 rounded-md">
                                    <span className="text-md font-[500]">
                                        Help center
                                    </span>
                                </div>
                            </a>
                            <a href="https://developers.notion.com/">
                                <div className="flex flex-col items-start hover:bg-gray-100 py-1 px-3 rounded-md">
                                    <span className="text-md font-[500]">
                                        API docs
                                    </span>
                                </div>
                            </a>
                            <a href="https://www.notion.so/notion/04f306fbf59a413fae15f42e2a1ab029">
                                <div className="flex flex-col items-start hover:bg-gray-100 py-1 px-3 rounded-md">
                                    <span className="text-md font-[500]">
                                        Community
                                    </span>
                                </div>
                            </a>
                            <a href="https://www.notion.so/consultants">
                                <div className="flex flex-col items-start hover:bg-gray-100 py-1 px-3 rounded-md">
                                    <span className="text-md font-[500]">
                                        Hire a consultant
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                )}

                <a href="https://www.notion.so/pricing">
                    <span className="flex items-center gap-1 font-medium px-2 py-1 rounded-md hover:bg-gray-100 ">
                        Pricing
                    </span>
                </a>
            </div>
            <div className="flex items-center gap-3">
                <a
                    href="https://www.notion.so/contact-sales"
                    className="border-r-[1px] pr-2"
                >
                    <span className="px-2 py-1 rounded-md font-medium hover:bg-gray-100 group cursor-pointer transition-all ease-in-out duration-150 ">
                        Request a demo
                    </span>
                </a>
                <a href="https://www.notion.so/login">
                    <span className="px-2 py-1 rounded-md hover:bg-gray-100 font-[500] group cursor-pointer transition-all ease-in-out duration-150">
                        Log in
                    </span>
                </a>
                <a
                    href="https://www.notion.so/signup"
                    className="bg-black hover:bg-gray-800 text-white font-medium rounded-md px-3 py-1 text-[14px]"
                >
                    Get Notion Free
                </a>
            </div>
        </nav>
    );
};

export default NavbarPC;
