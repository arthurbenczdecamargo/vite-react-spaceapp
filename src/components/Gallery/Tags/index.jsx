import styled from "styled-components";

import tags from "./tags.json";

const StyledTagTitle = styled.h3`
  color: #d9d9d9;
  font-size: 24px;
  margin: 0;
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
  }
`;

const StyledTag = styled.button`
  color: #ffffff;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 12px;
  box-sizing: border-box;
  border: 2px solid transparent;
  align-self: center;
  &:hover {
    border-color: #c98cf1;
  }
`;

const Tags = ({ setTag }) => {
  return (
    <StyledTagTitle>
      <p>Search by tags</p>
      {tags.map((tag) => (
        <StyledTag key={tag.id} onClick={() => setTag(tag.tag)}>{tag.title}</StyledTag>
      ))}
    </StyledTagTitle>
  );
};

export default Tags;
