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
import { useState } from "react";
const Header = () => {
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

  // for scrolling
  // window.addEventListener("scroll", () => {
  //   const navbar = document.getElementsByClassName("navbar");
  //   if (window.scrollY > 50) {
  //     navbar?.classList?.add("bg-white", "shadow-md");
  //     navbar?.classList?.remove("bg-transparent");
  //   } else {
  //     navbar?.classList?.add("bg-transparent");
  //     navbar?.classList?.remove("bg-white", "shadow-md");
  //   }
  // });

  return (
    <div className="mt-2  ">
      <Navbar
        
        maxWidth="full"
        className="px-0 mx-auto  "
        classNames={{ wrapper: "px-0" }}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent>
          <NavbarBrand className="">
            <h1 className="text-4xl text-gray-950 font-extrabold uppercase text-center lg:text-start ">
              Sleeping Pills
            </h1>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4 " justify="center">
          <img
            src="https://www.sleepingpillsuk.com/images/head_btc.png"
            alt="logo"
            className="relative"
          />
          <div className="border z-[-10] border-dashed border-black space-x-4 rounded-lg bg-[#F7F7F7] py-2 flex  px-6 absolute lg:top-[280px] lg:right-[250px] md:right-4 md:top-[150px] ">
            <div className="text-[17px] font-semibold uppercase">
              <p>Get 10% off on </p> <p>every order!</p>
            </div>
            <div>
              <p className="uppercase text-center">Apply Code</p>
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
                className={`text-center text-xl  font-semibold bg-[#0782A7] py-3 last:col-span-2 ${
                  isFifthLlink && "px-2"
                }`}
              >
                {navlink.title}
              </NavLink>
            );
          })}
        </nav>
      </section>
    </div>
  );
};

export default Header;
