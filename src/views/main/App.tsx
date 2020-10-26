import React, { useEffect } from 'react';

import Sidebar from '../../components/sidebar';
import Content from '../../components/content';

import { Wrapper } from './app.styles'
import { Container } from './app.styles'
import { getNotes } from './app.functions';
import { useDispatch, useSelector } from 'react-redux';
import { setNotes } from '../../redux/actions';
import { stateTypes } from '../../redux/types';

const App: React.FC = () => {
  const dispatch = useDispatch()
  const notes = useSelector((state: stateTypes) => state)
  console.log(notes)
  useEffect(() => {
    const notes = getNotes()
    dispatch(setNotes(notes))
  }, [dispatch])
  return (
    <Wrapper>
      <Container>
        <Sidebar />
        <Content notes={notes}/>
      </Container>
    </Wrapper>
  )
}

export default App;
