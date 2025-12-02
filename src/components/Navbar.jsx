import { useState, useEffect } from 'react';
import styled from 'styled-components';

const NavbarWrapper = styled.nav`
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  background-color: transparent;
  transition: background-color 0.3s ease-in-out;

  &.scrolled {
    background-color: rgba(38, 36, 49, 0.8);
    backdrop-filter: blur(10px);
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

const Logo = styled.div`
  img {
    width: 112px;
    height: 36px;
  }
`;

const Menu = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuList = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  font-weight: 600;
`;

const MenuItem = styled.li``;

const MenuLink = styled.a`
  color: ${props => props.$primary ? 'var(--primary-color)' : '#fff'};
  
  &:hover {
    color: ${props => props.$primary ? '#fff' : 'var(--primary-color)'};
  }
`;

const MobileMenuToggle = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenuItems = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: var(--secondary-color);
  opacity: 0.95;
  padding: 3rem 2rem;
  text-align: center;
  box-shadow: 0 2px 5px rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease-in-out;
  transform: translateX(${props => props.$isOpen ? '0' : '100%'});

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-size: 1.2rem;
`;

const MobileMenuItem = styled.li``;

const MobileMenuLink = styled.a`
  color: ${props => props.$primary ? 'var(--primary-color)' : '#fff'};
  
  &:hover {
    color: ${props => props.$primary ? '#fff' : 'var(--primary-color)'};
  }
`;

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <NavbarWrapper className={isScrolled ? 'scrolled' : ''}>
      <NavbarContainer>
        <Logo>
          <img src="/images/logo.svg" alt="Leno" />
        </Logo>
        <Menu>
          <MenuList>
            <MenuItem>
              <MenuLink href="#home">Home</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#features">Features</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#preview">Preview</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#details">Details</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#download">Download</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#" $primary>
                <i className="fa-brands fa-facebook"></i>
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#" $primary>
                <i className="fa-brands fa-twitter"></i>
              </MenuLink>
            </MenuItem>
          </MenuList>
        </Menu>

        <MobileMenuToggle onClick={toggleMobileMenu}>
          <i className="fas fa-bars fa-2x"></i>
        </MobileMenuToggle>

        <MobileMenuItems $isOpen={isMobileMenuOpen}>
          <MobileMenuList>
            <MobileMenuItem>
              <MobileMenuLink href="#home" onClick={toggleMobileMenu}>Home</MobileMenuLink>
            </MobileMenuItem>
            <MobileMenuItem>
              <MobileMenuLink href="#features" onClick={toggleMobileMenu}>Features</MobileMenuLink>
            </MobileMenuItem>
            <MobileMenuItem>
              <MobileMenuLink href="#preview" onClick={toggleMobileMenu}>Preview</MobileMenuLink>
            </MobileMenuItem>
            <MobileMenuItem>
              <MobileMenuLink href="#details" onClick={toggleMobileMenu}>Details</MobileMenuLink>
            </MobileMenuItem>
            <MobileMenuItem>
              <MobileMenuLink href="#download" onClick={toggleMobileMenu}>Download</MobileMenuLink>
            </MobileMenuItem>
            <MobileMenuItem>
              <MobileMenuLink href="#" $primary>
                <i className="fa-brands fa-facebook"></i>
              </MobileMenuLink>
            </MobileMenuItem>
            <MobileMenuItem>
              <MobileMenuLink href="#" $primary>
                <i className="fa-brands fa-twitter"></i>
              </MobileMenuLink>
            </MobileMenuItem>
          </MobileMenuList>
        </MobileMenuItems>
      </NavbarContainer>
    </NavbarWrapper>
  );
};

export default Navbar;

