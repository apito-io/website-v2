import React, {useState} from 'react';
import {Icon} from '@iconify/react';
import githubIcon from '@iconify-icons/mdi/github'; // Use any GitHub icon from Iconify

/*
  <a className="button button--outline margin-left--md margin-right--sm" target="_blank"
                 href='https://app.apito.io'>
                  Login
              </a>
              <a className="button button--primary margin-right--md" target="_blank"
                 href='https://app.apito.io'>
                  Sign Up
              </a>
 */
const ExtraRightNavbarButtons = () => {

    const [isProductMenuOpen, setProductMenuOpen] = useState(false);

    return (
        <div className="flex space-x-8 items-center">

            {/* Cloud Button */}
            <a href="https://app.apito.io" className="font-medium hover:text-primary">
                Apito Cloud
            </a>

            {/* GitHub Source Code Button */}
            <a
                href="https://github.com/apito-io/engine"
                className="flex items-center px-4 py-2 bg-gray-800 text-white font-medium text-sm rounded-lg hover:bg-primary hover:text-white transition-colors duration-200 whitespace-nowrap"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Icon icon={githubIcon} className="w-5 h-5 mr-2"/>
                Source Code
            </a>

            {/* Login Button */}
            {/*<a
                href="https://app.apito.io"
                className="px-4 py-3 border border-primary text-primary font-medium text-sm rounded-md hover:bg-primary hover:text-white transition-colors duration-200"
            >
                Login
            </a>

             Signup Button
            <a
                href="https://app.apito.io"
                className="px-4 py-3 bg-primary text-white font-medium text-sm rounded-md hover:bg-red-600 transition-colors duration-200"
            >
                Signup
            </a>*/}
        </div>
    );
};

export default ExtraRightNavbarButtons;
