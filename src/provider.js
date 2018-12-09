import React, {Fragment, Component} from 'react';
import styled, {injectGlobal} from 'styled-components';
import {modes} from 'mdx-deck/dist/constants';
import Footer from './footer';

const footerHeight = '80px';

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,800');
	a {
		color: white;
		text-decoration: none;
	}
	ul {
		list-style: none;
		text-align: left;
	}
`;

const Wrapper = styled.main`
	width: 100vw;
	height: calc(100vh - ${footerHeight});
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: center;
	position: relative;
`;

const Bar = styled.div`
	background: #b5dfca;
	height: 2px;
	width: ${props => 100 * props.size}%;
	position: fixed;
	bottom: ${footerHeight};
`;

export default class Provider extends Component {
	render() {
		const {children, mode, index, length, update} = this.props;

		if (mode !== modes.normal) {
			return <Fragment>{children}</Fragment>;
		}

		return (
			<Fragment>
				<Wrapper>{children}</Wrapper>
				<Bar size={(index + 1) / length} />
				<Footer height={footerHeight} />
			</Fragment>
		);
	}
}
