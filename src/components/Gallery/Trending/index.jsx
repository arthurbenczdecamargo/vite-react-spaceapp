import styled from "styled-components";
import Title from "../../Title";
import images from "./trending-images.json";

const ImagesColumn = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Image = styled.img`
  max-width: 212px;
  border-radius: 20px;
`;

const Button = styled.button`
  background-color: transparent;
  color: #fff;
  border: 2px solid;
  border-color: #c98cf1;
  padding: 12px 20px;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  margin-top: 16px;
`;

const Trending = () => {
  return (
    <section>
      <Title $alignText="center">Trending</Title>
      <ImagesColumn>
        {images.map((image) => (
          <Image key={image.id} src={image.path} alt={image.alt} />
        ))}
      </ImagesColumn>
      <Button>See more</Button>
    </section>
  );
};

export default Trending;
