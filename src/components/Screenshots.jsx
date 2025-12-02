import styled from 'styled-components';

const ScreenshotsSection = styled.section`
  padding: 6rem 2rem;
  background: var(--tertiary-color);
  text-align: center;
`;

const ScreenshotsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ScreenshotsTitle = styled.h2`
  font-size: 2.3rem;
  text-transform: uppercase;
  border-bottom: 2px solid var(--primary-color);
  width: 300px;
  margin: 0 auto 2.5rem;
`;

const ScreenshotsImages = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;

  img {
    width: 100%;
    max-width: 200px;
    margin: 0 auto;
  }
`;

const screenshots = [
  '/images/screenshot-1.png',
  '/images/screenshot-2.png',
  '/images/screenshot-3.png',
  '/images/screenshot-4.png',
  '/images/screenshot-5.png'
];

const Screenshots = () => {
  return (
    <ScreenshotsSection id="screenshots">
      <ScreenshotsContainer>
        <ScreenshotsTitle>Screenshots</ScreenshotsTitle>
        <ScreenshotsImages>
          {screenshots.map((screenshot, index) => (
            <img key={index} src={screenshot} alt={`Screenshot ${index + 1}`} />
          ))}
        </ScreenshotsImages>
      </ScreenshotsContainer>
    </ScreenshotsSection>
  );
};

export default Screenshots;

