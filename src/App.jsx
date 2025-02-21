import { useEffect, useState } from "react";
import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Banner from "./components/Banner";
import bannerBackground from "./assets/banner.png";
import Gallery from "./components/Gallery";
import images from "./images.json";
import ModalZoom from "./components/ModalZoom";
import Footer from "./components/Footer";

const GradientBg = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  max-width: 95vw;
  margin: 0 auto;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const GalleryContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [galleryImages, setGalleryImages] = useState(images);
  const [filter, setFilter] = useState("");
  const [tag, setTag] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const filteredImages = images.filter((image) => {
      const filterByTag = !tag || image.tagId === tag;
      const filterByTitle =
        !filter || image.title.toLowerCase().includes(filter.toLowerCase());
      return filterByTag && filterByTitle;
    });
    setGalleryImages(filteredImages);
  }, [filter, tag]);

  const onFavoriteToggle = (image) => {
    if (image.id === selectedImage?.id) {
      setSelectedImage({
        ...selectedImage,
        favorite: !selectedImage.favorite,
      });
    }
    setGalleryImages(
      galleryImages.map((imageGallery) => {
        return {
          ...imageGallery,
          favorite:
            imageGallery.id === image.id
              ? !image.favorite
              : imageGallery.favorite,
        };
      })
    );
  };

  return (
    <GradientBg>
      <GlobalStyles />
      <AppContainer>
        <Header filter={filter} setFilter={setFilter} />
        <MainContainer>
          <Sidebar />
          <GalleryContainer>
            <Banner
              text="The most complete gallery of space images"
              backgroundImage={bannerBackground}
            />
            <Gallery
              onSelectImage={(image) => setSelectedImage(image)}
              onFavoriteToggle={onFavoriteToggle}
              images={galleryImages}
              setTag={setTag}
            />
          </GalleryContainer>
        </MainContainer>
      </AppContainer>
      <ModalZoom
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
        onFavoriteToggle={onFavoriteToggle}
      />
      <Footer />
    </GradientBg>
  );
};

export default App;
