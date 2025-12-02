import styled from 'styled-components';

const FeaturesSection = styled.section`
  background-color: var(--tertiary-color);
  padding: 6rem 2rem;
`;

const FeaturesContainer = styled.div`
  text-align: center;
  max-width: 1100px;
  margin: 0 auto;
`;

const FeaturesTitle = styled.h2`
  font-size: 2.3rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
`;

const FeaturesDescription = styled.p`
  max-width: 600px;
  margin: 1rem auto 4rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const FeaturesColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6rem;

  &.center {
    @media (max-width: 992px) {
      order: 1;
      margin-bottom: 3rem;
    }

    img {
      @media (max-width: 992px) {
        max-width: 300px;
      }
    }
  }

  &.left,
  &.right {
    @media (max-width: 992px) {
      order: 2;
      margin-bottom: 2rem;
    }
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  text-align: ${props => props.$textAlign || 'right'};
  gap: 1.5rem;

  @media (max-width: 992px) {
    text-align: center;
    flex-direction: column-reverse;
    max-width: 400px;
  }
`;

const FeatureText = styled.div``;

const FeatureTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p``;

const FeatureIcon = styled.div`
  margin-top: 2rem;

  i {
    color: var(--primary-color);
  }

  @media (max-width: 992px) {
    margin: 0 auto;
  }
`;

const features = {
  left: [
    {
      icon: 'fa-rocket',
      title: 'Real-Time Data',
      description: 'Access real-time data instantly, ensuring you\'re always up-to-date with the latest information.'
    },
    {
      icon: 'fa-code',
      title: 'Visual Editor',
      description: 'Customize your workspace with our intuitive visual editor.'
    },
    {
      icon: 'fa-gem',
      title: 'Refined Options',
      description: 'Access a wide range of refined options to tailor Leno to your unique needs.'
    }
  ],
  right: [
    {
      icon: 'fa-calendar',
      title: 'Calendar Input',
      description: 'Seamlessly integrate your calendar to stay organized and on track.'
    },
    {
      icon: 'fa-book',
      title: 'Easy Reading',
      description: 'Enjoy distraction-free reading with Leno\'s clean and intuitive interface.'
    },
    {
      icon: 'fa-cube',
      title: 'Good Foundation',
      description: 'Leno is built on a solid foundation of user feedback and cutting-edge technology.'
    }
  ]
};

const Features = () => {
  return (
    <FeaturesSection id="features">
      <FeaturesContainer>
        <FeaturesTitle>Key Takeaways</FeaturesTitle>
        <FeaturesDescription>
          Discover the powerful features that make Leno the ultimate
          productivity and health companion:
        </FeaturesDescription>
        <FeaturesGrid>
          <FeaturesColumn className="left">
            {features.left.map((feature, index) => (
              <FeatureItem key={index}>
                <FeatureText>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </FeatureText>
                <FeatureIcon>
                  <i className={`fas ${feature.icon} fa-4x`}></i>
                </FeatureIcon>
              </FeatureItem>
            ))}
          </FeaturesColumn>

          <FeaturesColumn className="center">
            <img src="/images/features-smartphone-1.png" alt="Leno Features" />
          </FeaturesColumn>

          <FeaturesColumn className="right">
            {features.right.map((feature, index) => (
              <FeatureItem key={index} $textAlign="left">
                <FeatureIcon>
                  <i className={`fas ${feature.icon} fa-4x`}></i>
                </FeatureIcon>
                <FeatureText>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </FeatureText>
              </FeatureItem>
            ))}
          </FeaturesColumn>
        </FeaturesGrid>
      </FeaturesContainer>
    </FeaturesSection>
  );
};

export default Features;

