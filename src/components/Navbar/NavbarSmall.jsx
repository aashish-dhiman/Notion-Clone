import { useState } from "react";
import logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { VscSparkle } from "react-icons/vsc";
import { SiWikipedia } from "react-icons/si";
import { GoGoal } from "react-icons/go";
import { IoDocumentOutline } from "react-icons/io5";

const NavbarSmall = () => {
    const [open, setOpen] = useState(false);
    const [activeTab, setActiveTab] = useState();

    return (
        <nav className="relative">
            <div className="flex items-center justify-between w-full p-3 fixed top-0 left-0 bg-white border-b-[1px] z-50">
                <div>
                    <a
                        href="https://www.notion.so/product"
                        className="flex items-center gap-2"
                    >
                        <img src={logo} alt="logo" className="w-9 h-9" />
                        <span className="font-bold text-lg">Notion</span>
                    </a>
                </div>
                <span
                    className="text-[26px] select-none"
                    onClick={() => {
                        setOpen(!open);
                    }}
                >
                    {!open ? <GiHamburgerMenu /> : <IoCloseSharp />}
                </span>
            </div>
            {open && (
                <div className="fixed top-[60px] flex flex-col items-start w-full bg-white z-30 px-4 min-h-screen overflow-y-scroll ">
                    {/* products */}
                    <div className="border-b-[1px] w-full">
                        <div
                            className="flex items-center justify-between py-5 w-full  text-lg font-bold cursor-pointer"
                            onClick={() => {
                                activeTab === "product"
                                    ? setActiveTab("null")
                                    : setActiveTab("product");
                            }}
                        >
                            Product
                            <IoIosArrowForward
                                className={`${
                                    activeTab === "product"
                                        ? "rotate-90"
                                        : "rotate-0 "
                                } transition-all ease-in-out duration-200`}
                            />
                        </div>
                        {activeTab === "product" && (
                            <div className="flex items-start w-full bg-white select-none">
                                <div className="flex flex-col w-full">
                                    <a href="https://www.notion.so/product/wikis">
                                        <div className="flex items-center gap-2 hover:bg-gray-100 py-1 px-2 rounded-md">
                                            <SiWikipedia className="text-[22px] text-[#ed665d] " />

                                            <span className="text-md font-[500]">
                                                Wikis
                                            </span>
                                        </div>
                                    </a>
                                    <a href="https://www.notion.so/product/projects">
                                        <div className="flex items-center gap-2 hover:bg-gray-100 py-1 px-2 rounded-md">
                                            <GoGoal className="text-[22px] text-[#369ad8] " />

                                            <span className="text-md font-[500]">
                                                Projects
                                            </span>
                                        </div>
                                    </a>
                                    <a href="https://www.notion.so/product/docs">
                                        <div className="flex items-center gap-2 hover:bg-gray-100 py-1 px-2 rounded-md">
                                            <IoDocumentOutline className="text-[22px] text-[#ffbb33] " />

                                            <span className="text-md font-[500]">
                                                Docs
                                            </span>
                                        </div>
                                    </a>
                                    <a href="https://www.notion.so/product/ai">
                                        <div className="flex items-center gap-2 hover:bg-gray-100 py-1 px-2 rounded-md">
                                            <VscSparkle className="text-[22px] text-[#a748de] " />

                                            <span className="text-md font-[500]">
                                                Notion AI
                                            </span>
                                        </div>
                                    </a>

                                    <a href="https://www.notion.so/templates">
                                        <div className="flex flex-col items-start hover:bg-gray-100 py-1 px-3 rounded-md">
                                            <span className="text-md font-[500]">
                                                Template Gallery
                                            </span>
                                        </div>
                                    </a>
                                    <a href="https://www.notion.so/customers">
                                        <div className="flex flex-col items-start hover:bg-gray-100 py-1 px-3 rounded-md">
                                            <span className="text-md font-[500]">
                                                Customer stories
                                            </span>
                                        </div>
                                    </a>
                                    <a href="https://www.notion.so/templates">
                                        <div className="flex flex-col items-start hover:bg-gray-100 py-1 px-3 rounded-md">
                                            <span className="text-md font-[500]">
                                                Connections
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* solutions */}
                    <div className="border-b-[1px] w-full">
                        <div
                            className="flex items-center justify-between py-5 w-full  text-lg font-bold cursor-pointer"
                            onClick={() => {
                                activeTab === "solution"
                                    ? setActiveTab("null")
                                    : setActiveTab("solution");
                            }}
                        >
                            Solutions
                            <IoIosArrowForward
                                className={`${
                                    activeTab === "solution"
                                        ? "rotate-90"
                                        : "rotate-0 "
                                } transition-all ease-in-out duration-200`}
                            />
                        </div>

                        {activeTab === "solution" && (
                            <div className="flex items-start w-full bg-white select-none">
                                <div className="flex flex-col w-full">
                                    <span className="text-gray-500 text-sm">
                                        BY TEAM SIZE
                                    </span>
                                    <a href="https://www.notion.so/enterprise">
                                        <div className="flex items-center gap-2 hover:bg-gray-100 py-1 px-2 mt-2 rounded-md">
                                            <span className="text-md font-[500]">
                                                Enterprise
                                            </span>
                                        </div>
                                    </a>
                                    <a href="https://www.notion.so/personal">
                                        <div className="flex items-center gap-2 hover:bg-gray-100 py-1 px-2 rounded-md">
                                            <span className="text-md font-[500]">
                                                Small business
                                            </span>
                                        </div>
                                    </a>
                                    <a href="https://www.notion.so/product/docs">
                                        <div className="flex items-center gap-2 hover:bg-gray-100 py-1 px-2 rounded-md">
                                            <span className="text-md font-[500]">
                                                Personal
                                            </span>
                                        </div>
                                    </a>

                                    <span className="text-gray-500 text-sm mt-4">
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

                                    <span className="text-gray-500 text-sm mt-4">
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
                    </div>

                    {/* Resources */}
                    <div className="border-b-[1px] w-full">
                        <div
                            className="flex items-center justify-between py-5 w-full  text-lg font-bold cursor-pointer"
                            onClick={() => {
                                activeTab === "resource"
                                    ? setActiveTab("null")
                                    : setActiveTab("resource");
                            }}
                        >
                            Resources
                            <IoIosArrowForward
                                className={`${
                                    activeTab === "resource"
                                        ? "rotate-90"
                                        : "rotate-0 "
                                } transition-all ease-in-out duration-200`}
                            />
                        </div>

                        {activeTab === "resource" && (
                            <div className="flex items-start w-full bg-white select-none">
                                <div className="flex-1 flex flex-col ">
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
                    </div>

                    {/* Download */}
                    <div className="border-b-[1px] w-full">
                        <div
                            className="flex items-center justify-between py-5 w-full  text-lg font-bold cursor-pointer"
                            onClick={() => {
                                activeTab === "download"
                                    ? setActiveTab("null")
                                    : setActiveTab("download");
                            }}
                        >
                            Download
                            <IoIosArrowForward
                                className={`${
                                    activeTab === "download"
                                        ? "rotate-90"
                                        : "rotate-0 "
                                } transition-all ease-in-out duration-200`}
                            />
                        </div>

                        {activeTab === "download" && (
                            <div className="flex items-start w-full bg-white select-none">
                                <div className="flex-1 flex flex-col ">
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
                    </div>

                    {/* Pricing */}
                    <div className="border-b-[1px] w-full">
                        <a href="https://www.notion.so/pricing">
                            <div className="flex items-center justify-between py-5 w-full text-lg font-bold cursor-pointer">
                                Pricing
                            </div>
                        </a>
                    </div>

                    {/* Demo */}
                    <div className="border-b-[1px] w-full">
                        <a href="https://www.notion.so/contact-sales">
                            <div className="flex items-center justify-between py-5 w-full text-lg font-bold cursor-pointer">
                                Request a demo
                            </div>
                        </a>
                    </div>

                    <div className="flex-1 flex items-start flex-col mt-6 gap-5 w-full">
                        <a
                            href="https://www.notion.so/signup"
                            className="bg-black text-white font-bold w-full mx-auto py-2 text-center hover:bg-gray-800 rounded-lg "
                        >
                            Get Notion free
                        </a>
                        <a
                            href="https://www.notion.so/login"
                            className="bg-white text-black font-bold w-full mx-auto py-2 text-center hover:bg-gray-100 rounded-lg border-[1px]"
                        >
                            Log in
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavbarSmall;
