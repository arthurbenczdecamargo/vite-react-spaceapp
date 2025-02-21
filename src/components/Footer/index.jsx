import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 100px;
  background-color: #04244f;
  padding: 22px;
  box-sizing: border-box;
  a {
    color: white;
    margin-left: 0.25em;
  }
  @media (max-width: 768px) {
    margin-top: 50px;
  }
`;

const FooterText = styled.p`
  font-size: 22px;
  color: white;
  margin: 0;
`;

function Footer() {
  return (
    <StyledFooter>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
      ></link>
      <FooterText>
        Developed by Arthur |
        <a href="https://github.com/arthurbenczdecamargo">
          <i className="bi bi-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/arthurbenczdecamargo/">
          <i className="bi bi-linkedin"></i>
        </a>
      </FooterText>
    </StyledFooter>
  );
}

export default Footer;
