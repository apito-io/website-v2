import React from 'react';
import NavbarLayout from '@theme/Navbar/Layout';
import NavbarContent from '@theme/Navbar/Content';

export default function Navbar() {
    return (
        <NavbarLayout>
            <NavbarContent showLeftLagacyMenu={false} showRightLagacyMenu={false}/>
        </NavbarLayout>
    );
}
