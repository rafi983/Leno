import styled from 'styled-components';

const HeroSection = styled.header`
  background: #000 url('/images/header-background.jpg') center center/cover no-repeat;
  padding: 11.5rem 2rem 8rem;

  @media (max-width: 992px) {
    padding: 10rem;
    text-align: center;
  }
`;

const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const HeroContent = styled.div`
  max-width: 500px;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  text-transform: uppercase;
  font-weight: 700;
  line-height: 1.2;

  @media (max-width: 992px) {
    font-size: 2.3rem;
  }
`;

const HeroTitlePrimary = styled.span`
  color: var(--primary-color);
`;

const HeroDescription = styled.p`
  margin-top: 1.5rem;
  font-size: 1.2rem;
  line-height: 1.6;
`;

const HeroImage = styled.div`
  img {
    max-width: 500px;

    @media (max-width: 992px) {
      max-width: 350px;
    }
  }
`;

const HeroButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const HeroButton = styled.a`
  padding: 1rem 2rem;
  background-color: var(--primary-color);
  border: 2px solid transparent;
  color: #fff;
  font-weight: 600;
  border-radius: 50px;
  transition: background-color 0.3s ease;

  i {
    margin-right: 0.5rem;
  }

  &:hover {
    background-color: var(--secondary-color);
    border-color: var(--primary-color);
  }

  @media (max-width: 992px) {
    width: 100%;
  }
`;

const Hero = () => {
  return (
    <HeroSection id="home">
      <HeroContainer>
        <HeroContent>
          <HeroTitle>
            Your <HeroTitlePrimary>productivity</HeroTitlePrimary> assistant
          </HeroTitle>
          <HeroDescription>
            Boost your productivity and improve your health with Leno - the
            all-in-one app for developers and creators.
          </HeroDescription>
          <HeroButtons>
            <HeroButton href="#download">
              <i className="fa-brands fa-apple"></i> For Apple
            </HeroButton>
            <HeroButton href="#download">
              <i className="fa-brands fa-android"></i> For Android
            </HeroButton>
          </HeroButtons>
        </HeroContent>
        <HeroImage>
          <img src="/images/header-smartphones.png" alt="Leno App" />
        </HeroImage>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;

