import React, { useEffect, useState } from "react";
import tab5 from "../../assets/tab5.png";
import tab6 from "../../assets/tab6.png";
import tab7 from "../../assets/tab7.png";
import tab8 from "../../assets/tab8.png";
import tab9 from "../../assets/tab9.png";
import tab10 from "../../assets/tab10.png";
import png40 from "../../assets/png40.png";
import png41 from "../../assets/png41.png";
import png42 from "../../assets/png42.png";
import png43 from "../../assets/png43.png";
import png44 from "../../assets/png44.png";
import png45 from "../../assets/png45.png";

const TabbedComponents = () => {
    const obj = [
        {
            id: 1,
            title: "Engineering",

            img: tab5,
            logo: png40,
        },
        {
            id: 2,
            title: "Design",

            img: tab6,
            logo: png41,
        },
        {
            id: 3,
            title: "Product",

            img: tab7,
            logo: png42,
        },
        {
            id: 4,
            title: "Marketing",

            img: tab8,
            logo: png43,
        },
        {
            id: 5,
            title: "Operations",

            img: tab9,
            logo: png44,
        },
        {
            id: 6,
            title: "HR",

            img: tab10,
            logo: png45,
        },
    ];

    const [activeTab, setActiveTab] = useState(1);
    const [tabImage, setTabImage] = useState(tab5);

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
        const intervalId = setInterval(switchTabsAutomatically, 4000);

        return () => clearInterval(intervalId);
    }, [activeTab]);

    return (
        <div className="flex items-center flex-col gap-5 mt-10">
            {/* tabs */}
            <div className="flex items-center justify-center gap-3 flex-wrap w-full">
                {obj?.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className={`${
                                activeTab === item.id
                                    ? "bg-white border-[1px]"
                                    : "bg-[#f6f5f4] "
                            } p-2 md:p-3 rounded-xl group flex-1 cursor-pointer transition-all ease-in-out `}
                            onClick={() => tabHandler(item.id)}
                        >
                            <span className="flex items-center gap-1 flex-col">
                                <img
                                    src={item.logo}
                                    className={`w-[50%] hidden lg:block`}
                                />{" "}
                                <h3 className="text-md md:text-lg font-[500] leading-10">
                                    {item.title}
                                </h3>
                            </span>
                        </div>
                    );
                })}
            </div>
            <div className="rounded-xl overflow-hidden border-2">
                <img src={tabImage} alt="image" />
            </div>
        </div>
    );
};

export default TabbedComponents;
