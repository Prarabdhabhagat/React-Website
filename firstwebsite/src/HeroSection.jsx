import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "./styles/Button";
import { useGlobalContext } from "./Context";

function HeroSection() {
  const { name, image } = useGlobalContext();
  return (
    <>
      <Wrapper>
        <div className="container grid grid-two-column">
          <div className="section-hero-data">
            <p className="hero-top-data">THIS IS ME</p>
            <h1 className="hero-heading">{name}</h1>
            <p className="hero-para">
              sit amet consectetur adipisicing elit. Quasi sed dicta voluptatem
              sit possimus, accusantium aut est itaque culpa sunt delectus
              tenetur.
            </p>
            <Button className="btn hireme-btn">
              <NavLink to="/contact">Hire Me</NavLink>
            </Button>
          </div>
          {/* For Image */}
          <div className="section-hero-image">
            <picture>
              <img src={image} alt="heroImage" className="hero-img" />
            </picture>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default HeroSection;

const Wrapper = styled.section`
  padding: 9rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .btn {
    max-width: 16rem;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;
