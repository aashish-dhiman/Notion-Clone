import { useEffect, useState } from "react";
import tab1 from "../../assets/tab1.png";
import tab2 from "../../assets/tab2.png";
import tab3 from "../../assets/tab3.png";
import tab4 from "../../assets/tab4.png";
import { VscSparkle } from "react-icons/vsc";
import { SiWikipedia } from "react-icons/si";
import { GoGoal } from "react-icons/go";
import { IoDocumentOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

const TabbedComponents = () => {
    const obj = [
        {
            id: 1,
            title: "AI",
            detail: "Ask literally anything. Notion will answer.",
            link: "https://www.notion.so/product/ai",
            img: tab1,
            logo: VscSparkle,
            colour: "#a748de",
        },
        {
            id: 2,
            title: "Wikis",
            detail: "Centralize your knowledge. No more hunting for answers.",
            link: "https://notion.so/product/wikis",
            img: tab2,
            logo: SiWikipedia,
            colour: "#ed665d",
        },
        {
            id: 3,
            title: "Projects",
            detail: "Ask literally anything. Notion will answer.",
            link: "https://www.notion.so/product/projects",
            img: tab3,
            logo: GoGoal,
            colour: "#369ad8",
        },
        {
            id: 4,
            title: "Docs",
            detail: "Simple, powerful, beautiful. Next gen notes & docs.",
            link: "https://www.notion.so/product/docs",
            img: tab4,
            logo: IoDocumentOutline,
            colour: "#ffbb33",
        },
    ];

    const [activeTab, setActiveTab] = useState(1);
    const [tabImage, setTabImage] = useState(tab1);

    const tabHandler = (id) => {
        setActiveTab(id);
        const activeItem = obj?.find((item) => {
            return item.id === id;
        });
        setTabImage(activeItem.img);
    };

    const switchTabsAutomatically = () => {
        const currentTabIndex = obj.findIndex((item) => item.id === activeTab);
        const nextTabIndex = (currentTabIndex + 1) % obj.length; 
        const nextTabId = obj[nextTabIndex].id;
        tabHandler(nextTabId);
    };

    // automatically switch tabs after every 3 seconds
    useEffect(() => {
        const intervalId = setInterval(switchTabsAutomatically, 3000);

        return () => clearInterval(intervalId);
    }, [activeTab]); 

    return (
        <div className="flex items-center flex-col gap-5">
            {/* tabs */}
            <div className="flex items-center justify-between gap-4 flex-wrap">
                {obj?.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className={`${
                                activeTab === item.id
                                    ? "bg-white"
                                    : "bg-[#f6f5f4]"
                            } rounded-xl group flex-1 h-[150px] p-4 md:px-5 cursor-pointer`}
                            onMouseEnter={() => tabHandler(item.id)}
                        >
                            <a href={item.link}></a>
                            <span className="flex items-center gap-3">
                                <item.logo
                                    className={`text-[24px] text-[${item.colour}]`}
                                />{" "}
                                <h3 className="text-xl md:text-2xl font-[700] md:leading-10">
                                    {item.title}
                                </h3>
                                {item.id===1 && <span className="text-[#ac53df] bg-[#f0e1f9] text-[8px] sm:text-xs px-1 sm:px-2 font-bold rounded-xl">Now with Q&A</span>}
                            </span>
                            <p
                                className={`text-[14px] font-semibold ${
                                    item.id === activeTab ? "mt-2" : "mt-3 md:mt-5"
                                } group-hover:mt-2 transition-all ease-in-out duration-200`}
                            >
                                {item.detail}
                            </p>
                            <a
                                href={item.link}
                                className={`group-hover:flex ${
                                    item.id === activeTab ? "flex" : "hidden"
                                } text-[14px] font-medium items-center gap-2 ${
                                    item.id === 1
                                        ? "text-[#a748de]"
                                        : item.id === 2
                                        ? "text-[#ed665d]"
                                        : item.id === 3
                                        ? "text-[#369ad8]"
                                        : "text-[#ffbb33]"
                                } `}
                            >
                                Learn More <FaArrowRight className="mt-1" />
                            </a>
                        </div>
                    );
                })}
            </div>
            <div className="rounded-lg mx-auto">
                <img src={tabImage} alt="image" />
            </div>
        </div>
    );
};

export default TabbedComponents;
