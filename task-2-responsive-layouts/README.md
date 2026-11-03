# Clone Task 2: watch.it (React, responsive)

Function-component React app built with Vite.

## Run it
```bash
npm install
npm run dev      # development server
npm run build    # production build into /dist
```

## Structure
- `index.html` - page shell; imports the Google Fonts (Teko and Lato).
- `src/main.jsx` - mounts the React app.
- `src/App.jsx` - the Header followed by the list of movies.
- `src/data/movies.js` - the movie content, the genre links for the nav, and `layoutForIndex()`, which picks each card's desktop layout from its position.
- `src/components/` - one function component and one co-located stylesheet for each of: Header, Button, MovieList and MovieCard.
- `src/index.css` - global styles: the brand colours, the two spacing variables, fonts and the reset.
- `assets/` - the movie posters.

The movies are rendered by mapping over the data array . `Button` is used for both "Search" and "Watch now", and `MovieCard` takes a `layout` prop .

## Responsive approach (mobile first)
- Spacing is two CSS variables, `--space-small` and `--space-large`. `--space-small` is always 16px. `--space-large` is 16px on mobile, 32px from 720px and 48px from 1024px, matching the table in the specification .
- **Mobile (360px to 720px):** one column of cards. The genre nav is hidden and the header shows the logo and Search button. Cards run edge to edge, with a shadow below each card.
- **Tablet (from 720px):** the nav appears between the logo and the Search button, the logo grows from 2em to 3em, and the cards sit in a two-column Grid with a hard offset shadow.
- **Desktop (from 1024px):** the cards use three layouts, set by the `layout` prop:
  - `featured`: a wide banner with the text on the left and the button on the right.
  - `tall`: the poster above the text and button, two cards per row.
  - `wide`: the poster on the left half, and the text and button on the right half.
- `MovieList` is the primary content container. It has a 900px maximum width and uses the large spacing between cards and around the edges.
- The "Watch now" button is pushed to the bottom of every card with Flexbox, so the buttons line up across a row.

## Layout techniques
- **CSS Grid** for the movie list: one column on mobile and two columns from 720px, with the featured and wide cards spanning both columns on desktop (House, 2021).
- **Flexbox** for the header, each card's poster-and-body layout, the card text and button, and the nav links (Coyier, 2013).
- **Media queries** at `min-width: 720px` and `min-width: 1024px` in `index.css`, `Header.css`, `MovieList.css` and `MovieCard.css` (web.dev, no date).

## Description
This is the home page for watch.it movie streaming service created with React function components and CSS. This project uses mobile first responsive approach and reflow at 720px and 1024px – one column on phones, two on tablets, three card layouts on desktop (featured movies, tall and wide). All movie instances utilize the MovieCard component and all buttons utilize the Button component (for search and watching). Small and Large spacings are defined as CSS variables with values for each of the breakpoints and the maximum width of the content container is set to 900px. The colors used here were taken from watch.it brand palette: black 
#070410 for the header, deep purple 
#231651 for the page, teal 
#4DCCBD for the search button and card shadows, yellow 
#EEF36A for the logo and "Watch now" buttons, and white for the cards. Headings and buttons use the Teko font family, while Lato  is used everywhere else. The buttons have spacing defined for them and border radius. Text size follows specification for this project (2em for buttons and 1.5em for cards).



## References
Coyier, C. (2013) ‘A complete guide to flexbox’, CSS-Tricks, 8 April. Available at: https://css-tricks.com/snippets/css/a-guide-to-flexbox/ (Accessed: 01 November 2026).

Dziedzic, Ł. (no date) Lato [Typeface]. Available at: https://fonts.google.com/specimen/Lato (Accessed: 2 November 2026).

House, C. (2021) ‘A complete guide to CSS Grid’, CSS-Tricks, 12 May. Available at: https://css-tricks.com/snippets/css/complete-guide-grid/ (Accessed: 02 November 2026).

Indian Type Foundry (no date) Teko [Typeface]. Available at: https://fonts.google.com/specimen/Teko (Accessed: 03 November 2026).

React (no date a) Rendering lists. Available at: https://react.dev/learn/rendering-lists (Accessed: 04 November 2026).

React (no date b) Passing props to a component. Available at: https://react.dev/learn/passing-props-to-a-component (Accessed: 05 November 2026).

Vite (no date) Getting started. Available at: https://vite.dev/guide/ (Accessed: 06 November 2026).

W3C (no date) CSS custom properties for cascading variables module level 1. Available at: https://www.w3.org/TR/css-variables-1/ (Accessed: 07 November 2026).

web.dev (no date) Learn responsive design. Available at: https://web.dev/learn/design (Accessed: 07 November 2026).
