import styled from "styled-components";
import search from "/icons/search.png";

const StyledContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const StyledTextField = styled.input`
  height: 56px;
  padding: 12px 16px;
  border-radius: 10px;
  border: 2px solid;
  border-color: #c98cf1;
  background: transparent;
  box-sizing: border-box;
  width: 100%;
  color: #d9d9d9;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
`;

const SearchIcon = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 38px;
  height: 38px;
`;

const TextField = ({ setFilter }) => {
  return (
    <StyledContainer>
      <StyledTextField
        onChange={(event) => {
          setFilter(event.target.value);
        }}
        type="text"
        placeholder="Search here"
      />
      <SearchIcon src={search} alt="search" />
    </StyledContainer>
  );
};

export default TextField;
