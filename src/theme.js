// example theme.js
import theme from 'mdx-deck/themes';
import Provider from './provider';

export default {
	// extends the default theme
	...theme,
	Provider,
	// add a custom font
	font: 'OpenSans, sans-serif',
	colors: {
		text: 'white',
		background: '#829CBC',
		link: 'white',
	},
	a: {color: 'white', textDecoration: 'none'},
	h1: {},
	h2: {},
	p: {},
	weights: 400,
	img: {
		maxHeight: '80vh',
		maxWidth: '100%',
	},
	li: {
		paddingBottom: '20px',
		lineHeight: 1.5,
		listStyle: 'none',
	},
	ul: {
		paddingLeft: '50px',
		display: 'inline-block',
		listStyle: 'none',
	},
};
