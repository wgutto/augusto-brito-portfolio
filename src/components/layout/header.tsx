"use client"

import { MobileNav, MobileNavHeader, MobileNavMenu, MobileNavToggle, Navbar, NavbarLogo, NavBody, NavItems } from "../ui/resizable-navbar"
import { useState } from "react"

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const navItems = [
        { name: "Sobre", link: "#about" },
        { name: "Habilidades", link: "#skills" },
        { name: "Projetos", link: "#projects" },
        { name: "Contato", link: "#contact" }
    ]

    return (
        <header className="fixed w-full mt-2 z-50">
            <Navbar>
                <NavBody className="py-3">
                    <NavbarLogo />
                    <NavItems
                        items={navItems}
                    />
                </NavBody>

                <MobileNav>
                    <MobileNavHeader>
                        <NavbarLogo />
                        <MobileNavToggle
                            isOpen={isOpen}
                            onClick={() => setIsOpen(!isOpen)}
                        />
                    </MobileNavHeader>

                    <MobileNavMenu
                        isOpen={isOpen}
                        onClose={() => setIsOpen(false)}
                    >
                        {navItems.map((item, index) =>
                            <a
                                href={item.link}
                                key={index}
                                onClick={() => setIsOpen(false)}
                            >
                                <p>{item.name}</p>
                            </a>
                        )}
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>
        </header>
    )
}