import { FaArrowRight } from "react-icons/fa";
import png52 from "../../assets/png52.png";
import png53 from "../../assets/png53.png";
import png54 from "../../assets/png54.png";
import png55 from "../../assets/png55.png";
import png56 from "../../assets/png56.png";
import png57 from "../../assets/png57.png";
import png58 from "../../assets/png58.png";
import png59 from "../../assets/png59.png";
import png61 from "../../assets/png61.png";
import png62 from "../../assets/png62.png";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Section5 = () => {
    return (
        <section className="pt-8 sm:pt-14 md:pt-[100px] px-4 md:px-0">
            <div>
                <div className="flex items-center flex-col gap-5 md:px-10 text-center">
                    <h3 className="text-xl sm:text-3xl md:text-5xl font-bold text-center">
                        Join a global movement. <br /> Unleash your creativity.
                    </h3>
                    <p className="w-[80%] md:w-[60%] text-center text-md sm:text-xl ">
                        Our vibrant community produces content, teaches courses,
                        and leads events all over the world.
                    </p>
                    <a
                        href="https://www.notion.so/community"
                        className="flex items-center gap-2 font-medium text-blue-500 -mt-2 group hover:underline"
                    >
                        Learn More{" "}
                        <FaArrowRight className="mt-1 group-hover:border-b-[2px] border-blue-500" />
                    </a>
                </div>
            </div>

            <div className="mt-6 overflow-hidden">
                <img src={png52} alt="" />
                <div>
                    <div className="flex items-center justify-between gap-6 flex-wrap">
                        <div className="flex-1 flex items-start flex-col p-3 md:px-6 md:py-7 bg-[#f6f5f4] rounded-xl">
                            <span className="text-blue-500 text-5xl font-bold">
                                1M+
                            </span>
                            <p className="font-medium">community members</p>
                        </div>
                        <div className="flex-1 flex items-start flex-col p-3 md:px-6 md:py-7 bg-[#f6f5f4] rounded-xl">
                            <span className="text-blue-500 text-5xl font-bold">
                                150+
                            </span>
                            <p className="font-medium">community groups</p>
                        </div>
                        <div className="flex-1 flex items-start flex-col p-3 md:px-6 md:py-7 bg-[#f6f5f4] rounded-xl">
                            <span className="text-blue-500 text-5xl font-bold">
                                50+
                            </span>
                            <p className="font-medium">countries represented</p>
                        </div>
                    </div>

                    {/* ///////////////////// */}

                    <div className="flex items-center flex-col md:flex-row justify-center gap-6 overflow-hidden">
                        <div className="flex-1 bg-[#f6f5f4] rounded-xl p-8 mt-6 h-[450px]">
                            <div className="">
                                <h5 className="text-xl font-bold">
                                    An always-on support network
                                </h5>
                                <p className="mt-1 text-lg">
                                    Swap setups and share tips in over 149
                                    online communities.
                                </p>
                            </div>

                            <img src={png53} alt="" className="w-[70%] mt-6" />
                        </div>
                        <div className="flex-1 bg-[#f6f5f4] rounded-xl p-8 mt-6 h-[450px]">
                            <div className="">
                                <h5 className="text-xl font-bold">
                                    Choose your language
                                </h5>
                                <p className="mt-1 text-lg">
                                    Notion currently supports English, Korean,
                                    Japanese, French, German, Spanish, and
                                    Portuguese. With more to come!
                                </p>
                            </div>

                            <img
                                src={png54}
                                alt=""
                                className="ml-7 -mb-7 rounded-xl mt-20"
                            />
                        </div>
                    </div>

                    {/* //////////////////////// */}

                    <div className="flex items-center flex-col md:flex-row justify-center gap-6 overflow-hidden h-full">
                        {/* slider */}
                        <div className="md:w-[65%] bg-[#f6f5f4] rounded-xl p-4 md:p-8 mt-6 md:h-[590px] hidden md:flex select-none">
                            <Swiper
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                className="mySwiper"
                                pagination={{ clickable: true }}
                            >
                                <SwiperSlide>
                                    <img
                                        src={png55}
                                        alt=""
                                        className="w-full h-full object-contain"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src={png56}
                                        alt=""
                                        className="w-full h-full object-contain"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src={png57}
                                        alt=""
                                        className="w-full h-full object-contain"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src={png58}
                                        alt=""
                                        className="w-full h-full object-contain"
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </div>

                        {/* cards */}
                        <div className="md:w-[35%]  rounded-xl mt-6 flex flex-col gap-6">
                            <div className="bg-[#f6f5f4] p-4 rounded-xl">
                                <div className="flex items-start gap-2">
                                    <img
                                        src={png59}
                                        alt=""
                                        className="w-[15%]"
                                    />
                                    <span className="flex flex-col items-start">
                                        <h5 className="text-md font-bold">
                                            Deborah Mecca
                                        </h5>
                                        <span className="text-gray-500 text-sm">
                                            @DebMecca
                                        </span>
                                    </span>
                                </div>
                                <p className="mt-2 text-md leading-5 tracking-tight ">
                                    I used to HATE documenting things. And then
                                    I started using{" "}
                                    <span className="text-blue-600 font-[500]">
                                        {" "}
                                        @NotionHQ
                                    </span>{" "}
                                    and I document a lot. A LOT A LOT. Now I
                                    just realize that it wasn't that I hated
                                    documenting, I just hated Google Docs.
                                </p>
                            </div>

                            <div className="bg-[#f6f5f4] p-4 rounded-xl">
                                <div className="flex items-start gap-2">
                                    <img
                                        src={png61}
                                        alt=""
                                        className="w-[15%]"
                                    />
                                    <span className="flex flex-col items-start">
                                        <h5 className="text-md font-bold">
                                            André Blackman
                                        </h5>
                                        <span className="text-gray-500  ">
                                            @mindofandre
                                        </span>
                                    </span>
                                </div>
                                <p className="mt-2 text-md leading-5 tracking-tight">
                                    One of the most incredible things about
                                    <span className="text-blue-600 font-[500]">
                                        {" "}
                                        @NotionHQ
                                    </span>{" "}
                                    is the dynamic community being built -
                                    creating and sharing at its best.
                                </p>
                            </div>

                            <div className="bg-[#f6f5f4] p-4 rounded-xl">
                                <div className="flex items-start gap-2">
                                    <img
                                        src={png62}
                                        alt=""
                                        className="w-[15%]"
                                    />
                                    <span className="flex flex-col items-start">
                                        <h5 className="text-md font-bold">
                                            Oliver Peyre
                                        </h5>
                                        <span className="text-gray-500  ">
                                            @opeyre
                                        </span>
                                    </span>
                                </div>
                                <p className="mt-2 text-md leading-5 tracking-tight">
                                    <span className="text-blue-600 font-[500]">
                                        {" "}
                                        @NotionHQ
                                    </span>{" "}
                                    Truly impressed by the velocity and quality
                                    of your work. Making using Notion even more
                                    fun week after week!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* //////////////////////// */}
                </div>
            </div>
        </section>
    );
};

export default Section5;
