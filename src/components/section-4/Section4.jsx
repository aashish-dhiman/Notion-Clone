import TabbedComponents from "./TabbedComponents";
const Section4 = () => {
    return (
        <section className="pt-14 md:pt-[100px]">
            <div className="flex items-center justify-center gap-5 ">
                <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-center">
                    Every team, side-by-side
                </h3>
            </div>

            {/* Tabbed components */}
            <TabbedComponents />
        </section>
    );
};

export default Section4;
