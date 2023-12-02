import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex items-center p-4 fixed top-0 left-0">
            <div>
                <a
                    href="https://www.notion.so/product"
                    className="flex items-center gap-2"
                >
                    <img src={logo} alt="logo" className="w-9 h-9" />
                    <span className="font-bold text-lg">Notion</span>
                </a>
            </div>
            <div>
                <span>Product</span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div></div>
        </nav>
    );
};

export default Navbar;
