import styled from "styled-components";

const Wrapper = styled.section`
  background: white;
  margin-top: 1.5rem;
  text-align: center;
  width: 100%;

  h3 {
    background: white;
    margin: 0 auto;
    font-size: 14pt;
    font-weight: normal;
    padding: 4rem;

    a {
      color: black;
    }
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <h3>
        Made with ❤️ by{" "}
        <a href="https://github.com/AyushiPrakash" target="_blank">
          Ayushi!
        </a>
      </h3>
    </Wrapper>
  );
};

export default Footer;
