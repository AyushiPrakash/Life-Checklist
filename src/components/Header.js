import styled from "styled-components";

const Wrapper = styled.section`
  max-width: 1024px;
  padding: 1rem;
  margin: 0 auto;
  text-align: center;

  h1 {
    display: block;
    background: white;
    padding: 2rem;
    margin:0;
    font-size: 2rem;
    font-weight: bold;
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
