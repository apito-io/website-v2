import React, {useState} from 'react';
import chevronDown from '@iconify-icons/mdi/chevron-down';
import {Icon} from "@iconify/react";
import MegaMenu from "./mega-menu"; // Chevron down icon

const productsItems = [
    {
        name: "Open Source API Builder",
        description: "Build APIs effortlessly with our open-source tools.",
        icon: "logos:opensource"
    },
    {
        name: "Enterprise Solutions",
        description: "Powerful solutions tailored for large-scale businesses.",
        icon: "flat-color-icons:business"
    },
    {
        name: "One Command API Deploy",
        description: "Deploy your APIs instantly with a single command.",
        icon: "flat-color-icons:upload"
    },
    {
        name: "For the Freelancers",
        description: "Tips and tools to streamline your freelance projects.",
        icon: "flat-color-icons:idea"
    }
];

const solutionItems = [
    {
        name: "API Builder",
        description: "Build scalable APIs fast with REST and GraphQL support.",
        icon: "icon-park:api"
    },
    {
        name: "Headless CMS",
        description: "Flexible CMS for decoupled front-end and back-end.",
        icon: "flat-color-icons:document"
    },
    {
        name: "AWS CMS",
        description: "Integrate with AWS for scalable, reliable apps.",
        icon: "logos:aws"
    },
    {
        name: "Backend as a Service",
        description: "Serverless backend, no server management needed.",
        icon: "emojione:cloud"
    },
    {
        name: "Firebase CMS",
        description: "Powerful CMS built on Firebase's real-time database.",
        icon: "logos:firebase"
    },
    {
        name: "API Development",
        description: "Design, test, and deploy APIs with ease.",
        icon: "flat-color-icons:flow-chart"
    },
    {
        name: "How to Guides",
        description: "Exclusive deals on Apito services.",
        icon: "flat-color-icons:discount"
    }

];

const ExtraLeftNavbarButtons = () => {

    const [isProductMenuOpen, setProductMenuOpen] = useState(false);
    const [isSolutionsMenuOpen, setSolutionsMenuOpen] = useState(false);

    return (
        <div className="flex space-x-4 items-center">

            {/* Mega Menu for Product */}
            <div className="relative">
                <button
                    className="flex items-center font-medium hover:text-primary"
                    onClick={() => {
                        setProductMenuOpen(!isProductMenuOpen)
                        setSolutionsMenuOpen(false)
                    }}
                >
                    Products
                    <Icon icon={chevronDown} className="w-5 h-5 ml-2" />
                </button>

                {/* Mega Menu Dropdown */}
                {isProductMenuOpen && (
                    <div className="absolute left-0 mt-2 w-[800px] bg-white text-black rounded-lg shadow-lg z-50">
                        <MegaMenu cols={2} items={productsItems} />
                    </div>
                )}
            </div>

            <div className="relative">
                <button
                    className="flex items-center font-medium hover:text-primary"
                    onClick={() => {
                        setSolutionsMenuOpen(!isSolutionsMenuOpen)
                        setProductMenuOpen(false)
                    }}
                >
                    Solutions
                    <Icon icon={chevronDown} className="w-5 h-5 ml-2"/>
                </button>

                {/* Mega Menu Dropdown */}
                {isSolutionsMenuOpen && (
                    <div className="absolute left-0 mt-2 w-[800px] bg-white text-black rounded-lg shadow-lg z-50">
                        <MegaMenu cols={3} items={solutionItems}/>
                    </div>
                )}
            </div>

            {/* Cloud Button */}
            <a href="/docs/using-apito-as-backend-as-service" className="font-medium hover:text-primary">
                BaaS
            </a>

            {/* Cloud Button */}
            <a href="/blog" className="font-medium hover:text-primary">
                Blog
            </a>

            {/* Cloud Button */}
            <a href="/docs" className="font-medium hover:text-primary">
                Docs
            </a>

            {/* Cloud Button */}
            <a href="/pricing" className="font-medium hover:text-primary">
                Pricing
            </a>


        </div>
    );
};

export default ExtraLeftNavbarButtons;
