import React from 'react';
import Emoji, {EmojiWrapper} from './emoji';
import styled from 'styled-components';

const CenteredLi = styled.li`
  display: flex;
  align-items: center;
`;

export default function AboutMe() {
  return (
    <React.Fragment>
      <h1>Matthew Gerstman</h1>
      <ul>
        <CenteredLi>
          <Emoji name="dropbox.svg" /> Dropbox Engineer
        </CenteredLi>
        <CenteredLi>
          <EmojiWrapper>🗽</EmojiWrapper> NYC
        </CenteredLi>
        <CenteredLi>
          <EmojiWrapper>🎧</EmojiWrapper>{' '}
          <a href="https://theconsolelog.com">The Console Log</a>
        </CenteredLi>
        <CenteredLi>
          <Emoji name="twitter.png" />
          <a href="https://twitter.com/MatthewGerstman"> @MatthewGerstman</a>
        </CenteredLi>
      </ul>
    </React.Fragment>
  );
}
