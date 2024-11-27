import React from "react";

const fetchValue = (value) => {
    switch (typeof value) {
        case 'boolean':
            return value ? checkIcon() : crossIcon();
        case 'string':
            return value;
        default:
            return 'N/A';
    }
}


const checkIcon = () => {
    return (
        <span
            className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
            </svg>
        </span>
    )
}

const crossIcon = () => {
    return (
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
            stroke-width="2.2" className="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
            <path d="M18 6L6 18M6 6l12 12"></path>
        </svg>
    )
}

const features = [
    {
        feature: 'Unlimited Projects & Sync',
        free: true,
        content: true,
        api: true,
        enterprise: true,
    },
    {
        feature: 'API Publish',
        free: 'Single Project',
        content: 'Per Project',
        api: 'Per Project',
        enterprise: true,
    },
    {
        feature: 'API Calls / Month',
        free: '10K',
        content: '20K',
        api: '2M',
        enterprise: true,
    },
    {
        feature: 'Media CDN',
        free: '100 MB',
        content: '5 GB',
        api: '50 GB',
        enterprise: true,
    },
    {
        feature: 'Database Records',
        free: '1,000',
        content: '5,000',
        api: '100,000',
        enterprise: true,
    },
    {
        feature: 'Team Members',
        free: false,
        content: '2 Seats',
        api: '5 Seats',
        enterprise: true,
    },
    {
        feature: 'GraphQL Server/API',
        free: true,
        content: true,
        api: true,
        enterprise: true,
    },
    {
        feature: 'RESTful API',
        free: true,
        content: true,
        api: true,
        enterprise: true,
    },
    {
        feature: 'Content Management API',
        free: true,
        content: true,
        api: true,
        enterprise: true,
    },
    {
        feature: 'Database Backup & Restore Setup',
        free: false,
        content: true,
        api: true,
        enterprise: true,
    },
    {
        feature: 'Ability to Connect Remote Database',
        free: false,
        content: true,
        api: true,
        enterprise: true,
    },
    {
        feature: 'Kubernetes Deployment Support',
        free: false,
        content: true,
        api: true,
        enterprise: true,
    },
    {
        feature: 'CI & CD Repository Setup Support',
        free: false,
        content: true,
        api: true,
        enterprise: true,
    },
    {
        feature: 'Highly Performer API with millisecond response',
        free: false,
        content: true,
        api: true,
        enterprise: true,
    },
    {
        feature: 'Option to Scale Individual Project API & Database',
        free: false,
        content: true,
        api: true,
        enterprise: true,
    },
    {
        feature: 'Managed Database on Demand',
        free: false,
        content: true,
        api: true,
        enterprise: true,
    },
    {
        feature: 'Option to Choose Datacenter',
        free: false,
        content: true,
        api: true,
        enterprise: true,
    },
    {
        feature: 'Dedicated Instance Setup on Demand',
        free: false,
        content: true,
        api: true,
        enterprise: true,
    },
    {
        feature: 'Support via Email',
        free: false,
        content: true,
        api: true,
        enterprise: true,
    },
    {
        feature: 'Team Support via Discord or WhatsApp',
        free: false,
        content: true,
        api: true,
        enterprise: true,
    },
];

const button = () => {
    return (
        <a href="https://app.apito.io/" target="_blank" rel="noreferrer" className="ml-2">
        <button
            className="flex items-center mt-auto text-white bg-primary border-0 py-2 px-4 w-full focus:outline-none hover:bg-white-600 rounded">Let's Start
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
        </button></a>
    );
}

const PricingDetails = () => {
    return (
        <section className="text-gray-700 body-font overflow-hidden border-t border-gray-200">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="lg:w-2/6 mt-48 hidden lg:block">
                    <div
                        className="mt-px border-t border-gray-300 border-b border-l rounded-tl-lg rounded-bl-lg overflow-hidden">
                        {features.map((feature, index) => (
                            <p key={index} className={`text-gray-900 h-12 text-center px-4 flex items-center justify-start ${index % 2 === 0 ? 'bg-gray-100' : ''}`}>{feature.feature}</p>
                        ))}
                    </div>
                </div>
                <div className="flex lg:w-4/6 w-full flex-wrap lg:border border-gray-300 rounded-lg">
                    <div
                        className="lg:w-1/4 lg:mt-px w-full mb-10 lg:mb-0 border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none">
                        <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
                            <h3 className="tracking-widest">DEVELOPER</h3>
                            <h2 className="text-5xl text-gray-900 font-medium leading-none mb-4 mt-2">Free</h2>
                            <span className="text-sm text-gray-600">Free forever</span>
                        </div>
                        {
                            features.map((feature, index) => (
                                <p key={index} className={`text-gray-600 text-center h-12 flex items-center justify-center ${index % 2 === 0 ? 'bg-gray-100' : ''}`}>
                                    { fetchValue(feature.free) }
                                </p>
                            ))
                        }
                        <div className="border-t border-gray-300 p-6 text-center rounded-bl-lg">
                            {button()}
                        </div>
                    </div>
                    <div
                        className="lg:w-1/4 lg:-mt-px w-full mb-10 lg:mb-0 border-2">

                        <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
                            <h3 className="tracking-widest">CONTENT FIRST</h3>
                            <h2 className="text-5xl text-gray-900 font-medium flex items-center justify-center leading-none mb-4 mt-2">$35
                                <span className="text-gray-600 text-base ml-1">/mo</span>
                            </h2>
                            <span className="text-sm text-gray-600">Charging $380 per year</span>
                        </div>
                        {
                            features.map((feature, index) => (
                                <p key={index} className={`text-gray-600 text-center h-12 flex items-center justify-center ${index % 2 === 0 ? 'bg-gray-100' : ''}`}>
                                    { fetchValue(feature.content) }
                                </p>
                            ))
                        }
                        <div className="p-6 text-center border-t border-gray-300">
                            {button()}
                        </div>
                    </div>
                    <div
                        className="lg:w-1/4 w-full lg:mt-px border-2 border-primary border-l rounded-lg relative">
                        <span
                            className="bg-primary text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                        <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
                            <h3 className="tracking-widest">API FIRST</h3>
                            <h2 className="text-5xl text-gray-900 font-medium flex items-center justify-center leading-none mb-4 mt-2">$120
                                <span className="text-gray-600 text-base ml-1">/mo</span>
                            </h2>
                            <span className="text-sm text-gray-600">Charging $1300 per year</span>
                        </div>
                        {
                            features.map((feature, index) => (
                                <p key={index} className={`text-gray-600 text-center h-12 flex items-center justify-center ${index % 2 === 0 ? 'bg-gray-100' : ''}`}>
                                    { fetchValue(feature.api) }
                                </p>
                            ))
                        }
                        <div className="p-6 text-center border-t border-gray-300">
                            {button()}
                        </div>
                    </div>
                    <div
                        className="lg:w-1/4 w-full lg:mt-px border-2 lg:border-none rounded-lg lg:rounded-none relative">
                        <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
                            <h3 className="tracking-widest">ENTERPRISE</h3>
                            <h2 className="text-5xl text-gray-900 font-medium flex items-center justify-center leading-none mb-4 mt-2">Let's Talk
                            </h2>
                            <span className="text-sm text-gray-600">Flexible pricing for your business</span>
                        </div>
                        {
                            features.map((feature, index) => (
                                <p key={index} className={`text-gray-600 text-center h-12 flex items-center justify-center ${index % 2 === 0 ? 'bg-gray-100' : ''}`}>
                                    { fetchValue(feature.enterprise) }
                                </p>
                            ))
                        }
                        <div className="p-6 text-center border-t border-gray-300">
                            {button()}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PricingDetails;
