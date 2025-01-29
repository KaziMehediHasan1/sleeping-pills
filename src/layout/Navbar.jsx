import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import DropdownMenuBar from "../components/Dropdown";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrooling, setScrooling] = useState(false);
  const NavLinks = [
    {
      title: (
        <section className="flex items-center justify-center space-x-2">
          <FaHome /> <span>Home</span>
        </section>
      ),
      path: "/",
    },
    {
      title: "About us",
      path: "/about",
    },
    {
      title: "Pruoducts",
      path: "/products",
      subMenu: {
        sleepingTabltes: "sleepingTabltes",
        anxiety: "Anxiety Medication",
        pain: "PainKillers",
        nootroopicks: "nootroopicks",
      },
      sleeping: {
        zopicione: "Zopicione 7.5mg / 10mg",
        zolpidem: "Zolpidem 10mg",
        Nitrazepam: "Nitrazepam 10mg",
        Eszopniclone: "Eszopniclone",
      },
    },
    {
      title: "FAQS",
      path: "/questions",
    },
    {
      title: "Testimonials",
      path: "/testimonials",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contact us",
      path: "/contact",
    },
    {
      title: "Bitcoin Discount",
      path: "/bitcoin",
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      setScrooling(true);
    } else {
      setScrooling(false);
    }
  });

  return (
    <div
      className={` ${scrooling
        ? "fixed z-20 w-full transition-all duration-500 bg-white shadow-lg"
        : " bg-transparent"
        }`}
    >
      <div className="lg:w-[1250px] mx-auto">
        <Navbar
          maxWidth="full"
          className="px-0 mx-auto "
          classNames={{ wrapper: "px-0" }}
          onMenuOpenChange={setIsMenuOpen}
        >
          <NavbarContent>
            <NavbarBrand className="px-2 lg:px-0">
              <h1 className="text-4xl text-gray-950 font-extrabold uppercase text-center lg:text-start ">
                Sleeping Pills
              </h1>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="flex gap-4" justify="center">
            <img
              src="https://www.sleepingpillsuk.com/images/head_btc.png"
              alt="logo"
              className={`relative`}
            />
            <div className={`border z-[-10] border-dashed mr-3 border-black space-x-4 rounded-lg bg-[#F7F7F7] py-2 flex px-6 ${scrooling && "hidden"}  absolute lg:top-[280px] lg:right-[250px] md:right-4 md:top-56 top-[160px] right-3`}>
              <div className="sm:text-[17px] font-semibold uppercase">
                <p>Get 10% off on </p> <p>every order!</p>
              </div>
              <div>
                <p className="uppercase text-center text-xs sm:text-xl">
                  Apply Code
                </p>
                <p className="bg-gray-900 text-white px-4 py-1 uppercase font-semibold text-xl border border-dashed">
                  SLEEP2025
                </p>
              </div>
            </div>
          </NavbarContent>

          {/* Toggle Bar For sm device only */}

          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden"
          />

          {/* lg device to show  */}
          <NavbarContent justify="end ">
            <div className="lg:flex items-center space-x-1 hidden">
              <Button
                color="primary"
                className="bg-gray-900 text-white hover:text-black hover:bg-white"
                variant="bordered"
                radius="none"
              >
                <div className="flex items-center space-x-1">
                  <span>(0)</span>
                  <p>My Cart</p>
                </div>
              </Button>
              <DropdownMenuBar />
            </div>
          </NavbarContent>

          <NavbarMenu className="z-50">
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  className="w-full"
                  color={
                    index === 2
                      ? "primary"
                      : index === menuItems.length - 1
                        ? "danger"
                        : "foreground"
                  }
                  href="#"
                  size="lg"
                >
                  {item}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
        <section>
          {/* NavLink Section only for lg device */}
          <nav className="lg:grid lg:grid-cols-9 gap-x-[1px] items-center text-white hidden r">
            {NavLinks?.map((navlink, index) => {
              const isFifthLlink = index === 4;
              return (
                <NavLink
                  to={navlink.path}
                  className={`text-center text-xl  font-semibold bg-[#0782A7] py-3 last:col-span-2 ${isFifthLlink && "px-2"
                    }`}
                >
                  {navlink.title}
                </NavLink>
              );
            })}
          </nav>
        </section>
      </div>
    </div>
  );
};

export default Header;
