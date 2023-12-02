import logo from "../../assets/logo.png";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedin, FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
import FooterLinks from "../../utils/footerLinks";

const socials = [
    {
        id: 1,
        icon: CiInstagram,
        link: "https://www.instagram.com/notionhq/",
        hover: "#d62976",
    },
    {
        id: 2,
        icon: FaTwitter,
        link: "https://twitter.com/NotionHQ",
        hover: "#1DA1F2",
    },
    {
        id: 3,
        icon: FaLinkedin,
        link: "https://www.linkedin.com/company/notionhq/",
        hover: "#0077b5",
    },
    {
        id: 4,
        icon: FaFacebook,
        link: "https://www.facebook.com/NotionHQ/",
        hover: "#316FF6",
    },
    {
        id: 5,
        icon: FaYoutube,
        link: "https://www.youtube.com/channel/UCoSvlWS5XcwaSzIcbuJ-Ysg",
        hover: "#CD201F",
    },
];

const Footer = () => {
    return (
        <footer className="mx-4 border-t-[1px] py-16 px-6 md:px-[100px]">
            <div className="flex items-start flex-col md:flex-row justify-center gap-6">
                <div className="w-[20%] flex flex-col gap-6 items-start">
                    {/* logo */}
                    <div>
                        <a
                            href="https://www.notion.so/product"
                            className="flex items-center gap-2"
                        >
                            <img src={logo} alt="logo" className="w-9 h-9" />
                            <span className="font-bold text-lg">Notion</span>
                        </a>
                    </div>

                    {/* social icons */}
                    <div className="flex gap-1">
                        {socials?.map((item) => {
                            return (
                                <span
                                    key={item.id}
                                    className="text-[22px] cursor-pointer p-1 hover:bg-gray-200 group rounded-md"
                                >
                                    <a href={item.link}>
                                        <item.icon
                                            className={`${
                                                item.id === 1
                                                    ? "group-hover:text-[#d62976]"
                                                    : item.id === 2
                                                    ? "group-hover:text-[#1da1f2]"
                                                    : item.id === 3
                                                    ? "group-hover:text-[#0077b5]"
                                                    : item.id === 4
                                                    ? "group-hover:text-[#316ff6]"
                                                    : "group-hover:text-[#CD201F]"
                                            } text-gray-500`}
                                        />
                                    </a>
                                </span>
                            );
                        })}
                    </div>
                    <div className="mx-2 sm:m-0 ">
                        <select
                            id="language"
                            className="bg-gray-200 text-gray-900 text-sm rounded-lg ring-blue-500 border-blue-500 block w-[150px] px-4 py-3 "
                        >
                            <option value="English">English, USA</option>
                            <option value="Hindi">Hindi</option>
                            <option value="Arabic">Arabic</option>
                            <option value="Romania">Romania</option>
                            <option value="Deutsch">Deutsch</option>
                        </select>
                    </div>
                </div>

                {/* links section */}
                <div className="flex-1 flex flex-col gap-4 mt-6 md:mt-0">
                    <div className="columns-2 lg:columns-3">
                        {FooterLinks?.map((item, i) => {
                            return (
                                <div key={i} className="">
                                    <span className="text-md font-semibold">
                                        {item.tag}
                                    </span>
                                    <ul className="pl-[2px] flex flex-col gap-1 mt-2 mb-8">
                                        {item?.Links.map((it, i) => {
                                            return (
                                                <li
                                                    key={i}
                                                    className="text-gray-400 font-[500] "
                                                >
                                                    <a
                                                        href={it.link}
                                                        className="hover:underline hover:text-blue-500"
                                                    >
                                                        {it.name}
                                                    </a>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                    <div className="">
                        <p className="text-sm">
                            We do not sell or share your personal information
                        </p>
                        <span className="text-gray-400 text-[14px]">
                            © {new Date().getFullYear()} Notion Labs, Inc.
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
