import styled from "styled-components";
import TextField from "../TextField";

const StyledHeader = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  img {
      max-width: 212px;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 30px 0;
  }
`;

const Header = ({ filter, setFilter }) => {
  return (
    <StyledHeader>
      <img src="/images/logo.png" alt="logo" />
      <TextField filter={filter} setFilter={setFilter} />
    </StyledHeader>
  );
};

export default Header;
