import React, { FC } from "react";
import { ActiveLink } from "./ActiveLink";
import styles from "./Navbar.module.css";

interface Pages{
  text:string,
  href:string
}

const menuItems:Array<Pages> = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const Navbar:FC= () => {
  return (
    <nav className={styles["menu-container"]}>
      {menuItems.map((link) => (
        <ActiveLink key={link.text} text={link.text} href={link.href} />
      ))}
    </nav>
  );
};
