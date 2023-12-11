import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const Nav = styled.nav`
    .navbar-list {
      display: flex;
      gap: 4.8rem;

      li {
        text-decoration: none;
        list-style: none;
        a {
          text-decoration: none;
          &:link,
          &:hover {
            text-decoration: none;
            font-size: 1.8rem;
            text-transform: uppercase;
            color: ${({ theme }) => theme.colors.black};
            transition: color 0.3s linear;
          }
        }
      }
    }
    .mobile-navbar-btn {
      display: none;

      .close-outline {
        display: none;
      }
    }
    .mobile-navbar-btn[name="close-outline"] {
      display: none;
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 999;
        .mobile-nav-icon {
          font-size: 4rem;
          cursor: pointer;
        }
      }

      /* Hide the navbar list */
      .navbar-list {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        display: flex;
        justify-content: center;
        text-align: center;
        flex-direction: column;
        transform: translateX(100%);

        li {
          .navbar-link {
            font-size: 4.2rem;
          }
        }
      }

      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 3%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
      }

      .active .close-outline {
        display: inline-block;
      }

      .active .navbar-list {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
      }
    }
  `;

  return (
    <Nav>
      <div className={open ? `menuIcon active` : "menuIcon"}>
        <ul className="navbar-list">
          <li className="navbar-link">
            <NavLink onClick={() => setOpen(false)} to="/">
              Home
            </NavLink>
          </li>
          <li className="navbar-link">
            <NavLink onClick={() => setOpen(false)} to="/about">
              About
            </NavLink>
          </li>
          <li className="navbar-link">
            <NavLink onClick={() => setOpen(false)} to="/service">
              Service
            </NavLink>
          </li>
          <li className="navbar-link">
            <NavLink onClick={() => setOpen(false)} to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
        {/* nav icon */}
        <div className="mobile-navbar-btn">
          <AiOutlineMenu
            onClick={() => setOpen(true)}
            name="menu-outline"
            className="mobile-nav-icon"
          />
          <IoMdClose
            onClick={() => setOpen(false)}
            name="close-outline"
            className="close-outline mobile-nav-icon"
          />
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
