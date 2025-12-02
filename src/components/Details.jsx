import styled from 'styled-components';

const DetailsSection = styled.section`
  padding: 9rem 2rem;
`;

const DetailsContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const GridImage = styled.div`
  img {
    width: 100%;
    max-width: 400px;
  }
`;

const GridContent = styled.div`
  max-width: 500px;
  width: 100%;

  @media (max-width: 992px) {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }
`;

const GridHeading = styled.h3`
  font-size: 2rem;
  margin-bottom: 2rem;
  line-height: 1.2;
`;

const GridDescription = styled.p`
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const GridButton = styled.a`
  padding: 0.5rem 2rem;
  background-color: var(--primary-color);
  border: 2px solid transparent;
  color: #fff;
  font-weight: 600;
  border-radius: 50px;
  transition: background-color 0.3s ease;
  display: inline-block;

  &:hover {
    background-color: var(--secondary-color);
    border-color: var(--primary-color);
  }
`;

const DetailsIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8rem;
  gap: 2rem;
  justify-content: space-around;
  text-align: center;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 2rem;
    margin-top: 4rem;
  }
`;

const IconItem = styled.div`
  i {
    color: var(--primary-color);
    margin-bottom: 1rem;
  }
`;

const IconAmount = styled.div`
  font-size: 3.5rem;
  font-weight: 600;
`;

const IconTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 400;
`;

const detailsContent = [
  {
    image: '/images/details-1.png',
    heading: 'Start using Leno today and set your long term goals',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, consequuntur? Sint nostrum temporibus eum laudantium, quaerat voluptates officia modi perspiciatis!'
  },
  {
    image: '/images/details-2.png',
    heading: 'The calendar feature helps you schedule tasks',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, consequuntur? Sint nostrum temporibus eum laudantium, quaerat voluptates officia modi perspiciatis!'
  }
];

const stats = [
  { icon: 'fa-users', amount: '55,000', title: 'Happy Customers' },
  { icon: 'fa-code', amount: '585', title: 'Issues Solved' },
  { icon: 'fa-comments', amount: '788', title: 'Good Reviews' },
  { icon: 'fa-rocket', amount: '100', title: 'Case Studies' },
  { icon: 'fa-edit', amount: '110', title: 'Press Article' }
];

const Details = () => {
  return (
    <DetailsSection id="details">
      <DetailsContainer>
        <DetailsGrid>
          <GridImage>
            <img src={detailsContent[0].image} alt="Leno App" />
          </GridImage>
          <GridContent>
            <GridHeading>{detailsContent[0].heading}</GridHeading>
            <GridDescription>{detailsContent[0].description}</GridDescription>
            <GridButton href="#download">More</GridButton>
          </GridContent>
          <GridContent>
            <GridHeading>{detailsContent[1].heading}</GridHeading>
            <GridDescription>{detailsContent[1].description}</GridDescription>
            <GridButton href="#download">More</GridButton>
          </GridContent>
          <GridImage>
            <img src={detailsContent[1].image} alt="Leno App" />
          </GridImage>
        </DetailsGrid>

        <DetailsIcons>
          {stats.map((stat, index) => (
            <IconItem key={index}>
              <i className={`fas ${stat.icon} fa-4x`}></i>
              <IconAmount>{stat.amount}</IconAmount>
              <IconTitle>{stat.title}</IconTitle>
            </IconItem>
          ))}
        </DetailsIcons>
      </DetailsContainer>
    </DetailsSection>
  );
};

export default Details;

