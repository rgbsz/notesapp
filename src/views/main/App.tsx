import React from 'react';

import { Sidebar } from '../../components/sidebar/sidebar';
import { NotesGrid } from '../../components/notesgrid/notesgrid';

import { Wrapper } from './app.styles'

const App: React.FC = () => {
  return (
    <Wrapper>
      <Sidebar />
      <NotesGrid />
    </Wrapper>
  )
}

export default App;
