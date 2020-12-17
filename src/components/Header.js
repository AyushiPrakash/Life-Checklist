import styled from "styled-components";

const Wrapper = styled.section`
  max-width: 1024px;
  padding: 1rem;
  margin: 0 auto;
  text-align: center;

  h1 {
    display: block;
    background: white;
    color: white;
    padding: 2rem;
    margin: 0;
    font-size: 2rem;
    font-weight: bold;

    background: linear-gradient(131deg, #0dadef, #0bda51, #0dadef);
    background-size: 600% 600%;

    -webkit-animation: Gradient 8s ease infinite;
    -moz-animation: Gradient 8s ease infinite;
    animation: Gradient 8s ease infinite;

    @-webkit-keyframes Gradient {
      0% {
        background-position: 0% 11%;
      }
      50% {
        background-position: 100% 90%;
      }
      100% {
        background-position: 0% 11%;
      }
    }
    @-moz-keyframes Gradient {
      0% {
        background-position: 0% 11%;
      }
      50% {
        background-position: 100% 90%;
      }
      100% {
        background-position: 0% 11%;
      }
    }
    @keyframes Gradient {
      0% {
        background-position: 0% 11%;
      }
      50% {
        background-position: 100% 90%;
      }
      100% {
        background-position: 0% 11%;
      }
    }
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <h1>Life Checklist</h1>
    </Wrapper>
  );
};

export default Header;
