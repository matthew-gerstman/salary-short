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

const AlignedDiv = styled.div`
	display: flex;
	align-items: center;
`;

export default ({children, height}) => (
	<Footer height={height}>
		{children}
		<span>
			🎧 <a href="https://theconsolelog.com">The Console Log</a>
		</span>
		<AlignedDiv>
			<Emoji name="twitter.png" size="16px" marginRight={'5px'} />
			<a href="https://twitter.com/matthewgerstman">@MatthewGerstman</a>
		</AlignedDiv>
	</Footer>
);
