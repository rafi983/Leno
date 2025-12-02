import styled from 'styled-components';

const FooterSection = styled.footer`
  background: var(--tertiary-color);
  color: #9f9caf;
  padding: 4rem 2rem;
  font-size: 0.9rem;

  @media (max-width: 992px) {
    font-size: 1rem;
  }
`;

const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  align-items: center;
  gap: 6rem;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
    max-width: 600px;
  }
`;

const FooterAbout = styled.div``;

const FooterTitle = styled.h4`
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 0.5rem;
`;

const FooterDescription = styled.p``;

const FooterLinks = styled.div``;

const FooterLinksList = styled.ul``;

const FooterLinkItem = styled.li``;

const FooterLink = styled.a`
  color: #9f9caf;

  &:hover {
    color: #fff;
  }
`;

const FooterSocial = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
`;

const SocialLink = styled.a`
  color: #9f9caf;

  &:hover {
    color: #fff;
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <FooterAbout>
          <FooterTitle>About Leno</FooterTitle>
          <FooterDescription>
            Leno is a mobile app that helps you stay focused and improve your
            productivity. The app provides you with tools to set goals, track
            your progress, and maintain a healthy work-life balance.
          </FooterDescription>
        </FooterAbout>

        <FooterLinks>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLinksList>
            <FooterLinkItem>
              <FooterLink href="#home">Home</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLink href="#testimonials">Testimonials</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLink href="#features">Features</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLink href="#preview">Preview</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLink href="#details">Details</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLink href="#download">Download</FooterLink>
            </FooterLinkItem>
          </FooterLinksList>
        </FooterLinks>

        <FooterSocial>
          <SocialLink href="#">
            <i className="fa-brands fa-facebook fa-3x"></i>
          </SocialLink>
          <SocialLink href="#">
            <i className="fa-brands fa-twitter fa-3x"></i>
          </SocialLink>
          <SocialLink href="#">
            <i className="fa-brands fa-instagram fa-3x"></i>
          </SocialLink>
          <SocialLink href="#">
            <i className="fa-brands fa-linkedin fa-3x"></i>
          </SocialLink>
        </FooterSocial>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;

