import React from 'react';

import Sidebar from '../../components/sidebar';
import Content from '../../components/content';

import { Wrapper } from './app.styles'
import { Container } from './app.styles'

const App: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Sidebar />
        <Content />
      </Container>
    </Wrapper>
  )
}

export default App;
