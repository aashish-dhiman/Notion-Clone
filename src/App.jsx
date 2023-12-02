import "./App.css";
import Navbar from "./components/Navbar";
import Section1 from "./components/section-hero/Section1";
import Section2 from "./components/section-2/Section2";
import Section3 from "./components/section-3/Section3";
import Section4 from "./components/section-4/Section4";

function App() {
    return (
        <>
            <Navbar />
            <main className="px-[10px] sm:px-[40px] md:px-[120px] py-20">
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
            </main>
        </>
    );
}

export default App;
