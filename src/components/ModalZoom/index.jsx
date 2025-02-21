import styled from "styled-components";
import Image from "../Gallery/Image";
import ButtonIcon from "../ButtonIcon";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const StyledDialog = styled.dialog`
  position: absolute;
  top: 294px;
  background: transparent;
  padding: 0;
  border: 0;
  width: 1156px;
  display: flex;
  justify-content: center;
  form {
    button {
      position: relative;
      top: 20px;
      right: 60px;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    form {
      button {
        position: absolute;
        top: 20px;
        right: 30px;
      }
    }
  }
`;

const ModalZoom = ({ image, onClose, onFavoriteToggle }) => {
  return (
    <>
      {image && (
        <>
          <Overlay />
          <StyledDialog open={!!image} onClose={onClose}>
            <Image
              image={image}
              expanded={true}
              onFavoriteToggle={onFavoriteToggle}
            />
            <form method="dialog">
              <ButtonIcon formMethod="dialog">
                <img src="/icons/close.png" alt="Close icon" />
              </ButtonIcon>
            </form>
          </StyledDialog>
        </>
      )}
    </>
  );
};

export default ModalZoom;
