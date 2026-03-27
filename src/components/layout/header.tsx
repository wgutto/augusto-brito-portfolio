"use client"

import {
    MobileNav,
    MobileNavHeader,
    MobileNavMenu,
    MobileNavToggle,
    Navbar,
    NavbarLogo,
    NavBody,
    NavItems,
} from "../ui/resizable-navbar"
import { useState } from "react"
import { NAV_ITEMS } from "@/data/constants"

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="fixed w-full top-2 z-50">
            <Navbar>
                <NavBody>
                    <NavbarLogo />
                    <NavItems items={NAV_ITEMS} />
                </NavBody>

                <MobileNav>
                    <MobileNavHeader>
                        <NavbarLogo />
                        <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
                    </MobileNavHeader>

                    <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
                        {NAV_ITEMS.map((item, index) => (
                            <a href={item.link} key={index} onClick={() => setIsOpen(false)}>
                                <p>{item.name}</p>
                            </a>
                        ))}
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>
        </header>
    )
}
