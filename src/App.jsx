import "./App.css";
import Navbar from "./components/Navbar";
import Section1 from "./components/section-hero/Section1";
import Section2 from "./components/section-2/Section2";
function App() {
    return (
        <>
            <Navbar />
            <main className="px-[10px] sm:px-[40px] md:px-[120px] py-20">
                <Section1 />
                <Section2 />
            </main>
        </>
    );
}

export default App;
