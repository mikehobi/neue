// Smallest to largest
// Styles array should be breakpoints.length + 1
// Example Usage:
// <Text color={['black', 'orange', 'yellow', 'green', 'blue']} />
// red    @ < 450px
// orange @ > 450px
// yellow @ > 768px
// green  @ > 1024px
// blue   @ > 1280px
const breakpoints = [
  '450px',
  '768px',
  '1024px',
  '1280px',
];

// Colors
const colors = {
  black: '#111',
  blue: 'red',
  myBlue: 'blue',
};

// Font families
const fonts = {
  trade: 'Trade Gothic',
  mono: 'Courier New',
};

// Lightest to darkest
const borders = [
  '1px solid #e5e5e5',
  '1px solid #cccccc',
];

const theme = {
  breakpoints,
  colors,
  borders,
  fonts,
};


export default theme;
