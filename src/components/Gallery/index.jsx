import styled from "styled-components";
import Title from "../Title";
import Tags from "./Tags";
import Trending from "./Trending";
import Image from "./Image";

const GalleryContainer = styled.div`
  display: flex;
  gap: 24px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FluidSection = styled.section`
  flex-grow: 1;
`;

const ImagesContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
`;

const Gallery = ({ images = [], setTag, onSelectImage, onFavoriteToggle }) => {
  return (
    <>
      <Tags setTag={setTag} />
      <GalleryContainer>
        <FluidSection>
          <Title>Explore the gallery</Title>
          <ImagesContainer>
            {images.map((image) => (
              <Image
                onSelectZoom={onSelectImage}
                onFavoriteToggle={onFavoriteToggle}
                key={image.id}
                image={image}
              />
            ))}
          </ImagesContainer>
        </FluidSection>
        <Trending />
      </GalleryContainer>
    </>
  );
};

export default Gallery;
