import React from 'react';
import styled from 'styled-components';
import Emoji from './emoji';

const Footer = styled.footer`
	text-transform: Uppercase;
	font-size: 14px;
	color: white;
	padding: 30px 100px;
	text-align: right;
	width: 100vw;
	height: ${({height}) => height};
	background: #627264;
	display: flex;
	justify-content: space-between;
	position: absolute;
	bottom: 0;
`;

export default ({children, height}) => (
	<Footer height={height}>
		{children}
		<span>🎧 The Console Log</span>
		<span>
			<Emoji name="twitter.png" height={20} /> @MatthewGerstman
		</span>
	</Footer>
);
