import logo from "../assets/logo.png";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
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
                <span className="flex items-center gap-1 font-medium px-2 py-1 rounded-md hover:bg-gray-100 group cursor-pointer transition-all ease-in-out duration-150">
                    Product{" "}
                    <IoIosArrowDown className="text-[12px] mt-1 font-extrabold group-hover:rotate-180" />
                </span>
                <span className="flex items-center gap-1 font-medium px-2 py-1 rounded-md hover:bg-gray-100 group cursor-pointer transition-all ease-in-out duration-150">
                    Download{" "}
                    <IoIosArrowDown className="text-[12px] mt-1 font-extrabold group-hover:rotate-180" />
                </span>
                <span className="flex items-center gap-1 font-medium px-2 py-1 rounded-md hover:bg-gray-100 group cursor-pointer transition-all ease-in-out duration-150">
                    Solutions{" "}
                    <IoIosArrowDown className="text-[12px] mt-1 font-extrabold group-hover:rotate-180" />
                </span>
                <span className="flex items-center gap-1 font-medium px-2 py-1 rounded-md hover:bg-gray-100 group cursor-pointer transition-all ease-in-out duration-150">
                    Resources{" "}
                    <IoIosArrowDown className="text-[12px] mt-1 font-extrabold group-hover:rotate-180" />
                </span>
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
                    className="bg-black hover:bg-gray-800 text-white font-medium rounded-lg px-2 py-1 text-[14px]"
                >
                    Get Notion Free
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
