import React from "react";
import styled from "styled-components";

function Contact() {
  return (
    <Wrapper>
      <h2 className="common-heading">Feel free to contact Us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.334272555887!2d78.37989687471178!3d17.443707801181112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb937325d054f7%3A0x5c247c47cccaa902!2sLifestyle%20Men&#39;s%20PG!5e0!3m2!1sen!2sin!4v1702111616967!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xrgwnaeo"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter the username"
              autoComplete="off"
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter the email"
              autoComplete="off"
              required
            />
            <textarea
              name="message"
              cols={30}
              rows={6}
              placeholder="Enter the message"
              autoComplete="off"
              required
            ></textarea>
            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
}

export default Contact;

const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;

  .container {
    margin-top: 6rem;
    text-align: center;
    .contact-form {
      max-width: 50rem;
      margin: 0 auto;
      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;
