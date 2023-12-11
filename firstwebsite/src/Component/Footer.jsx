import React from "react";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <section className="footer-container">
        {/* Top */}
        <div className="grid grid-two-column">
          <div className="footer-left">
            <h3>Ready to get Started?</h3>
            <h3>Talk to us today.</h3>
          </div>
          <div>
            <NavLink to="/">
              <Button className="btn hireme-btn">GET STARTED</Button>
            </NavLink>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer>
        <div className="container grid grid-four-column">
          {/* 1st */}
          <div className="footer-about">
            <h3>Prarabdha bhagat</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui,
              voluptas.
            </p>
          </div>
          {/* 2nd */}
          <div className="footer-subscribe">
            <h3>Subscribe to lastest updates</h3>
            <form action="#">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter a email"
                required
                autoComplete="off"
              />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
          {/* 3rd */}
          <div className="footer-social">
            <h3>Follows Us</h3>
            <div className="footer-social-icons">
              <div>
                <FaWhatsapp className="icons" />
              </div>
              <div>
                <FaInstagram className="icons" />
              </div>
              <div>
                <FaFacebook className="icons" />
              </div>
            </div>
          </div>
          <div className="footer-callUs">
            <h3>Call Us</h3>
            <div>
              <h3>9876534567</h3>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.section`
  margin: 50px;
  .footer-container {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }
  footer {
    width: 100%;
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social-icons {
      display: flex;
      gap: 10px;

      .icons {
        font-size: 30px;
        color: white;
        cursor: pointer;
      }
    }
  }
`;
