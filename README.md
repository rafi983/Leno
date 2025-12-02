# Leno React - Health & Productivity App

A modern, fully responsive landing page for Leno - a health and productivity mobile app built with React and styled-components.

![Leno App Preview](public/images/header-smartphones.png)

## 🚀 Features

- **Modern React Architecture**: Built with React 19 and Vite for blazing-fast development
- **Styled Components**: CSS-in-JS styling with full theming support
- **Fully Responsive**: Mobile-first design that works on all devices
- **Interactive Components**: 
  - Sticky navigation with scroll detection
  - Mobile-friendly hamburger menu
  - Video modal with YouTube integration
  - Smooth scroll navigation
  - Dynamic testimonials and feature sections
- **Optimized Performance**: Fast loading times with Vite's build optimization
- **Clean Code Structure**: Modular component-based architecture

## 📁 Project Structure

```
leno-react/
├── public/
│   └── images/           # All image assets
├── src/
│   ├── components/       # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Features.jsx
│   │   ├── Preview.jsx
│   │   ├── Details.jsx
│   │   ├── Screenshots.jsx
│   │   ├── Download.jsx
│   │   └── Footer.jsx
│   ├── styles/
│   │   └── GlobalStyles.js  # Global styled-components
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Application entry point
├── index.html
├── vite.config.js
└── package.json
```

## 🛠️ Technologies Used

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Styled Components** - CSS-in-JS styling
- **Font Awesome** - Icon library
- **Google Fonts** - Open Sans typography

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd leno-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the URL shown in your terminal)

## 🔧 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🎨 Customization

### Colors

The app uses CSS custom properties for theming. You can modify the colors in `src/styles/GlobalStyles.js`:

```javascript
:root {
  --primary-color: #08c0dd;      // Primary brand color
  --secondary-color: #262431;    // Secondary/background color
  --tertiary-color: #2f2c3d;     // Tertiary color for sections
}
```

### Components

Each component is self-contained and uses styled-components. To modify a component:

1. Navigate to `src/components/[ComponentName].jsx`
2. Modify the styled components or JSX as needed
3. Changes will hot-reload automatically

### Adding New Sections

To add a new section:

1. Create a new component file in `src/components/`
2. Import and add it to `src/App.jsx`
3. Style it using styled-components

Example:
```jsx
// src/components/NewSection.jsx
import styled from 'styled-components';

const SectionWrapper = styled.section`
  padding: 4rem 2rem;
  background: var(--tertiary-color);
`;

const NewSection = () => {
  return (
    <SectionWrapper>
      <h2>New Section</h2>
    </SectionWrapper>
  );
};

export default NewSection;
```

## 📱 Responsive Breakpoints

The application uses the following responsive breakpoints:

- **Desktop**: > 992px
- **Tablet**: 768px - 992px
- **Mobile**: < 768px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Component Overview

### Navbar
- Sticky navigation with scroll detection
- Mobile hamburger menu
- Social media links
- Smooth scroll to sections

### Hero
- Eye-catching headline
- Call-to-action buttons
- Background image with overlay
- Responsive layout

### Testimonials
- Customer testimonial cards
- Profile images
- Responsive grid layout
- Hides extra cards on mobile

### Features
- Three-column feature grid
- Icon-based feature highlights
- Center smartphone mockup
- Fully responsive

### Preview
- Video preview section
- Custom play button animation
- YouTube modal integration
- Click-to-play functionality

### Details
- Alternating image/text layout
- Statistics section
- Call-to-action buttons
- Icon-based stats

### Screenshots
- App screenshot gallery
- Horizontal scroll on mobile
- Responsive image grid

### Download
- Download CTA section
- Platform-specific buttons
- Background image
- App preview image

### Footer
- About information
- Quick links
- Social media icons
- Three-column layout

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Or connect your Git repository for automatic deployments

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## 🎯 Performance Optimization

- **Code Splitting**: Vite automatically splits code for optimal loading
- **Image Optimization**: Use WebP format for better compression
- **Lazy Loading**: Consider implementing lazy loading for images
- **Tree Shaking**: Vite removes unused code automatically

## 🐛 Troubleshooting

### Development server won't start
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Styles not loading
- Check that styled-components is properly installed
- Verify GlobalStyles component is imported in App.jsx
- Clear browser cache

### Images not showing
- Verify images are in the `public/images/` folder
- Check image paths start with `/images/`
- Ensure image files exist and have correct names

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Development

### Code Style
- Use functional components with hooks
- Use styled-components for all styling
- Follow React best practices
- Keep components small and focused

### Component Structure
```jsx
import styled from 'styled-components';

// Styled components at the top
const StyledComponent = styled.div`
  // styles
`;

// Component logic
const ComponentName = () => {
  // hooks
  // handlers
  // render
};

export default ComponentName;
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, email your-email@example.com or open an issue in the repository.

## 🎉 Acknowledgments

- Original HTML/CSS template converted to React
- Font Awesome for icons
- Google Fonts for typography
- Vite team for the amazing build tool

---

Made with ❤️ using React and Styled Components

