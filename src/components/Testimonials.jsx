import styled from 'styled-components';

const TestimonialsSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
`;

const TestimonialsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  align-items: center;
  justify-content: center;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled.div`
  padding: 0 3rem;

  @media (max-width: 992px) {
    padding: 0 1.5rem;

    &:nth-child(3) {
      display: none;
    }
  }

  @media (max-width: 768px) {
    &:nth-child(2) {
      display: none;
    }
  }
`;

const TestimonialImage = styled.div`
  img {
    width: 96px;
    height: 96px;
    border-radius: 50%;
    margin: 0 auto 1.5rem;
  }
`;

const TestimonialText = styled.p`
  font-style: italic;
  margin-bottom: 1.5rem;
`;

const TestimonialTitle = styled.h3``;

const testimonials = [
  {
    image: '/images/testimonial-1.jpg',
    text: '"Leno has truly transformed how I manage my time and health. Highly recommended!"',
    name: 'Samantha Samson'
  },
  {
    image: '/images/testimonial-2.jpg',
    text: '"As a developer, I rely on Leno every day to keep me focused and energized. It\'s a game-changer!"',
    name: 'Mike Johnson'
  },
  {
    image: '/images/testimonial-3.jpg',
    text: '"With Leno, I\'ve been able to achieve my goals faster and healthier than ever before. It\'s a must-have app!"',
    name: 'Laney Smith'
  }
];

const Testimonials = () => {
  return (
    <TestimonialsSection id="testimonials">
      <TestimonialsContainer>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index}>
            <TestimonialImage>
              <img src={testimonial.image} alt={testimonial.name} />
            </TestimonialImage>
            <div>
              <TestimonialText>{testimonial.text}</TestimonialText>
              <TestimonialTitle>{testimonial.name}</TestimonialTitle>
            </div>
          </TestimonialCard>
        ))}
      </TestimonialsContainer>
    </TestimonialsSection>
  );
};

export default Testimonials;

