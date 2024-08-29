import React from "react";
import {Icon} from "@iconify/react";


const MegaMenu = ({cols= 3, items = []}) => {

    if (cols === 3) {

    }

    return (
        <div
            className="absolute z-[999] hidden min-w-[180px] max-w-screen-xl overflow-auto rounded-xl border border-blue-gray-50 bg-white p-3 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none lg:block"
            role="menu"
        >
            <ul className={`grid grid-cols-${cols} gap-y-2 outline-none outline-0`} role="menuitem">
                {items.map((item, index) => (
                    <a key={index} href="#">
                        <button
                            role="menuitem"
                            className="flex w-full cursor-pointer select-none items-center gap-3 rounded-lg px-3 pb-2 pt-[9px] text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                        >
                            <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2">
                                {/* Dynamically render the icon */}
                                <Icon icon={item.icon} className="h-6 w-6 text-gray-900" />
                            </div>
                            <div>
                                <h6 className="flex items-center font-sans text-sm font-bold tracking-normal text-blue-gray-900 antialiased">
                                    {item.name}
                                </h6>
                                <p className="block font-sans text-xs !font-medium text-blue-gray-500 antialiased">
                                    {item.description}
                                </p>
                            </div>
                        </button>
                    </a>
                ))}
            </ul>
        </div>
    );
};

export default MegaMenu;
