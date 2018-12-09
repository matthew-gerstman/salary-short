import React from 'react';
import styled from 'styled-components';

const EmojiImg = styled.img`
	display: inline-block;
`;

export default function Emoji({name, height = 32}) {
	return <img style={{height}} src={`assets/emoji/${name}`} />;
}
