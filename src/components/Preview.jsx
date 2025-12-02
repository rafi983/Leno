import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const PreviewSection = styled.section`
  background: url('/images/video-background.jpg') center center/cover no-repeat;
`;

const PreviewContainer = styled.div`
  padding: 6rem 2rem;
  text-align: center;
  max-width: 1100px;
  margin: 0 auto;
`;

const PreviewTitle = styled.h2`
  font-size: 2.3rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
`;

const PreviewDescription = styled.p`
  max-width: 600px;
  margin: 1rem auto 4rem;
`;

const VideoWrapper = styled.div`
  position: relative;

  img {
    width: 100%;
    max-width: 900px;
    border-radius: 10px;
  }
`;

const pulseBorder = keyframes`
  0% {
    transform: translateX(-50%) translateY(-50%) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateX(-50%) translateY(-50%) scale(1.5);
    opacity: 0;
  }
`;

const PlayButton = styled.button`
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 10;
  display: block;
  box-sizing: content-box;
  width: 2rem;
  height: 2.75rem;
  border-radius: 50%;
  cursor: pointer;
  padding: 1.25rem 1.25rem 1.25rem 1.75rem;
  border: none;
  background: transparent;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 1;
    background: #00c9db;
    height: 4.375rem;
    width: 4.375rem;
    border-radius: 50%;
    display: block;
    transition: all 200ms;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 0;
    display: block;
    width: 4.75rem;
    height: 4.75rem;
    background: #00c9db;
    border-radius: 50%;
    animation: ${pulseBorder} 1500ms ease-out infinite;
  }
`;

const PlayIcon = styled.span`
  position: relative;
  display: block;
  z-index: 3;
  top: 0.375rem;
  left: 0.25rem;
  width: 0;
  height: 0;
  border-left: 1.625rem solid #fff;
  border-top: 1rem solid transparent;
  border-bottom: 1rem solid transparent;
`;

const Modal = styled.div`
  display: ${props => props.$isOpen ? 'block' : 'none'};
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  margin: 10% auto;
  padding: 20px;
  border: 1px solid #888;
  border-radius: 10px;
  max-width: 600px;
  position: relative;

  @media (max-width: 768px) {
    margin: 40% auto;
    padding: 10px;
    width: 90%;
  }
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 40px;
  cursor: pointer;
  color: #fff;

  &:hover {
    color: var(--primary-color);
  }
`;

const VideoFrame = styled.iframe`
  width: 560px;
  height: 315px;
  border: none;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Preview = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  
  const closeModal = () => setIsModalOpen(false);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <PreviewSection id="preview">
      <PreviewContainer>
        <PreviewTitle>Preview</PreviewTitle>
        <PreviewDescription>
          Take a sneak peek at Leno's sleek and intuitive interface:
        </PreviewDescription>
        <VideoWrapper>
          <img src="/images/video-frame.jpg" alt="preview" />
          <PlayButton onClick={openModal}>
            <PlayIcon />
          </PlayButton>
        </VideoWrapper>
      </PreviewContainer>

      <Modal $isOpen={isModalOpen} onClick={handleOverlayClick}>
        <ModalContent>
          <CloseButton onClick={closeModal}>&times;</CloseButton>
          <VideoFrame
            src={isModalOpen ? 'https://www.youtube.com/embed/8sXRyHI3bLw' : ''}
            allowFullScreen
          />
        </ModalContent>
      </Modal>
    </PreviewSection>
  );
};

export default Preview;

