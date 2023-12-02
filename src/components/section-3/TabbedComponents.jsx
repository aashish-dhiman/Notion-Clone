import { useEffect, useState } from "react";
import png30 from "../../assets/png30.png";
import png31 from "../../assets/png31.png";
import png32 from "../../assets/png32.png";
import png33 from "../../assets/png33.png";
import png34 from "../../assets/png34.png";
import png35 from "../../assets/png35.png";

const TabbedComponents = () => {
    const obj = [
        {
            id: 1,
            title: "Board",
            img: png30,
        },
        {
            id: 2,
            title: "Table",
            img: png31,
        },
        {
            id: 3,
            title: "Timeline",

            img: png32,
        },
        {
            id: 4,
            title: "Calender",

            img: png33,
        },
        {
            id: 5,
            title: "Gallery",

            img: png34,
        },
        {
            id: 6,
            title: "List",

            img: png35,
        },
    ];

    const [activeTab, setActiveTab] = useState(1);
    const [tabImage, setTabImage] = useState(png30);

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

            <div className="mx-auto mt-10 rounded-xl overflow-hidden">
                <img src={tabImage} alt="image" />
            </div>
            <div className="flex items-center justify-center gap-3 flex-wrap mt-1">
                {obj?.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className={`${
                                activeTab === item.id
                                    ? "bg-gray-200 "
                                    : "bg-[#f6f5f4]"
                            } rounded-xl px-3 py-[2px] cursor-pointer border-[1px]`}
                            onClick={() => tabHandler(item.id)}
                        >
                            <span className="text-md text-gray-800 ">
                                {item.title}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TabbedComponents;
