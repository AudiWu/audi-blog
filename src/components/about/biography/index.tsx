import React from 'react';
import { Title } from '../../shared/title'
import { Main } from '../../shared/main'
import { BiographyWrapper } from './styles';

const data = {
  title: 'About Me',
  main: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}
export const Biography: React.FC<{}> = () => (
  <BiographyWrapper>
    <Title value={data.title} />
    <Main value={data.main} />
  </BiographyWrapper>
)
