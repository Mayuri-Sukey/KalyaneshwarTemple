import React, { useState, useEffect, useRef } from "react";
import { IoLogoAndroid } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Logo from "../assets/kalyneshwar/Om_symbol.svg.png";
import NavbarItems from "./NavbarItems";
import items from "../Data/navlist.json";
import { Link } from "react-router-dom";


// import "./styles.css"; // Ensure this path is correct for your project structure

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    if (open) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.body.classList.remove("no-scroll");
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <section>
      <div className="header">
        <div className="download">
          <div className="social-btn nav-btn">
            <IoLogoAndroid /> <span>Android</span>
          </div>

          <div className="social-btn nav-btn">
            <FaApple /> <span>IOS</span>
          </div>
        </div>
        <Link to="/" className="logo">
          <img src={Logo} alt="Logo" width={70} />
          <span>Shree Kalyaneshwar Mandir, Nagpur</span>
        </Link>

        <div
          className="humburger"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <div className="social-btn nav-btn wid">
            {open ? <IoClose /> : <GiHamburgerMenu />}
          </div>
        </div>
      </div>

      <div ref={navbarRef} className={`navbar ${open ? "open" : ""}`}>
        <div className="cancel-btn" onClick={() => setOpen(false)}>
          <IoClose />
        </div>
        {items.map((item, index) => (
          <NavbarItems key={index} item={item} className="navbar-items" />
        ))}
      </div>
    </section>
  );
};

export default Navbar;
