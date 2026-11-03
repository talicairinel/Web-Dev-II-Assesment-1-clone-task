# Clone Task 1: Erased Tapes (React)

Function-component React app built with Vite.

## Run it
```bash
npm install
npm run dev      # development server
npm run build    # production build into /dist
```

## Structure
- `index.html` - page shell; imports the Google Fonts (Protest Guerrilla and Josefin Sans).
- `src/main.jsx` - mounts the React app.
- `src/App.jsx` - assembles the page: Header, the white content column, then Footer.
- `src/data/content.js` - all text, navigation, social links and image imports.
- `src/components/` - one function component and one co-located stylesheet for each of:
  Header, NavLinks, Article, AlbumGallery, AuthorBio, SocialLinks, Comments and Footer.
- `src/index.css` - global styles: design tokens (CSS variables), reset and base typography.
- `assets/` - the images supplied with the task.


## Layout techniques
- **CSS multi-column** for the three-column article text. Headings use `break-after: avoid` so one is never left at the bottom of a column (W3C, 2024).
- **CSS Grid** for the album gallery: three columns (`2fr 1fr 1fr`), with the featured album spanning both rows (House, 2021).
- **Flexbox** for the header, nav links, author section, comments list, footer and social icons (Coyier, 2013).
- **Media queries** (see `Article.css`, `AlbumGallery.css`, `AuthorBio.css` and `index.css`):
  - `max-width: 800px`: article text drops to two columns and headings get smaller.
  - `max-width: 700px`: the author section stacks vertically.
  - `max-width: 560px`: article text becomes one column, the standard spacing reduces from 50px to 24px, and the featured album goes full width above the small albums.
- **CSS custom properties** in `index.css` hold the colours, the 50px standard spacing and the content width, so each value is defined once.

## Description
This is a one-page blog post for Erased Tapes Records. The page is implemented using React function components and CSS. It consists of a header, an article, an album gallery, an author section, comments and a footer. The text and images are stored in one data file, so the components only render what is passed to them. The page adheres to the written specification: the page, content and footer colours are `#e9e9e9`, white and `#14181d`; the logo and author photo are 200px wide; the social icons are 50px wide with 10px between them; and the standard spacing is 50px. Headings are in Protest Guerrilla at three times the default font size, with a large title. The body text is in Josefin Sans, with a large first paragraph and sufficient line height to make the text readable (W3C, 2023). The design is based on the desktop wireframe and then adapted for tablets and phones using the media queries above, so the page doesn’t scroll horizontally at any width.


## References

Coyier, C. (2013) ‘A complete guide to flexbox’, CSS-Tricks, 8 April. Available at: https://css-tricks.com/snippets/css/a-guide-to-flexbox/ (Accessed: 1 November 2026).

House, C. (2021) ‘A complete guide to CSS Grid’, CSS-Tricks, 12 May. Available at: https://css-tricks.com/snippets/css/complete-guide-grid/ (Accessed: 1 November 2026).

Orozco, S. (no date) Josefin Sans [Typeface]. Available at: https://fonts.google.com/specimen/Josefin+Sans (Accessed: 2 November 2026).

Pardo, O. (2020) Protest Guerrilla [Typeface]. Available at: https://fonts.google.com/specimen/Protest+Guerrilla (Accessed: 2 November 2026).

React (no date) Passing props to a component. Available at: https://react.dev/learn/passing-props-to-a-component (Accessed: 2 November 2026).

Vite (no date) Getting started. Available at: https://vite.dev/guide/ (Accessed: 3 November 2026).

W3C (no date) CSS custom properties for cascading variables module level 1. Available at: https://www.w3.org/TR/css-variables-1/ (Accessed: 3 November 2026).

W3C (2023) Understanding success criterion 1.4.8: visual presentation. Available at: https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html (Accessed: 4 November 2026).

W3C (2024) CSS multi-column layout module level 1. Available at: https://www.w3.org/TR/css-multicol-1/ (Accessed: 4 November 2026).

web.dev (no date) Learn responsive design. Available at: https://web.dev/learn/design (Accessed: 5 November 2026).
