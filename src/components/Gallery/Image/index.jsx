import styled from "styled-components"
import ButtonIcon from "../../ButtonIcon"

const Figure = styled.figure`
    width: ${props => props.$expanded ? '90%' : '460px'};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }
    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;
        h3 {
            font-family: 'GandhiSansBold';
        }
        h4 {
            flex-grow: 1;
        }
        h3, h4 {
            margin: 0;
            font-size: 16px;
        }
    }
`

const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Image = ({ image, expanded = false, onSelectZoom, onFavoriteToggle }) => {
    const favoriteIcon = image.favorite ? '/icons/favorite-active.png' : '/icons/favorite.png'
    return (<Figure $expanded={expanded} id={`image-${image.id}`}>
        <img src={image.path} alt={image.alt} />
        <figcaption>
            <h3>{image.title}</h3>
            <Footer>
                <h4>{image.font}</h4>
                <ButtonIcon onClick={() => onFavoriteToggle(image)}>
                    <img src={favoriteIcon} alt="Favorite icon" />
                </ButtonIcon>
                {!expanded && <ButtonIcon aria-hidden={expanded} onClick={() => onSelectZoom(image)}>
                    <img src="/icons/expand.png" alt="Expand icon" />
                </ButtonIcon>}
            </Footer>
        </figcaption>
    </Figure>)
}

export default Image