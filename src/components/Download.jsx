import styled from 'styled-components';

const DownloadSection = styled.section`
  background: #000 url('/images/download-background.jpg') center center/cover no-repeat;
  padding: 11.5rem 2rem 8rem;

  @media (max-width: 992px) {
    padding-top: 10rem;
    text-align: center;
  }
`;

const DownloadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 992px) {
    flex-direction: column-reverse;
  }
`;

const DownloadContent = styled.div`
  max-width: 500px;
`;

const DownloadDescription = styled.p`
  font-size: 1.5rem;
  margin-top: 1.5rem;
  line-height: 1.6;
  text-align: center;
`;

const DownloadImage = styled.div`
  img {
    width: 100%;
    max-width: 500px;
  }
`;

const DownloadButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const DownloadButton = styled.a`
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
    padding: 0.7rem;
  }
`;

const Download = () => {
  return (
    <DownloadSection id="download">
      <DownloadContainer>
        <DownloadContent>
          <DownloadDescription>
            Download Leno today to see the benefits and enjoy the results faster
            than any other app out there
          </DownloadDescription>
          <DownloadButtons>
            <DownloadButton href="#">
              <i className="fa-brands fa-apple"></i> For Apple
            </DownloadButton>
            <DownloadButton href="#">
              <i className="fa-brands fa-android"></i> For Android
            </DownloadButton>
          </DownloadButtons>
        </DownloadContent>
        <DownloadImage>
          <img src="/images/download.png" alt="Download" />
        </DownloadImage>
      </DownloadContainer>
    </DownloadSection>
  );
};

export default Download;

