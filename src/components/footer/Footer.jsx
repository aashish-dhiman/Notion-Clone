import React from "react";

const Footer = () => {
    return (
        <footer className="mx-4 border-t-[1px] py-16 px-20">
            <div>
                <div className="mx-6 sm:m-0 ">
                    <select
                        id="language"
                        className="bg-transparent text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[150px] p-2.5 "
                    >
                        <option value="English">English, USA</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Arabic">Arabic</option>
                        <option value="Romania">Romania</option>
                    </select>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
