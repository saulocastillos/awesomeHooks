import React from 'react';

import GlobalStyle from './GlobalStyle.js'

import { Container } from './styles';

import Card from './components/Card';

import TimeoutUseExample from './components/TimeoutUseExample'
import IntervalUseExample from './components/IntervalUseExample'
import PreviousUseExample from './components/PreviousUseExample'
import ClickInsideExample from './components/ClickInsideUseExample'

const App = () => {
    return (
      <>
        <GlobalStyle darcula />
        <Container>
          <Card name='useTimeout Hook' component={TimeoutUseExample} />
          <Card name='useInterval Hook' component={IntervalUseExample} />
          <Card name='usePrevious Hook' component={PreviousUseExample} />
          <Card name='useClickInside Hook' component={ClickInsideExample} onClickInside={() => alert('Click Inside')}/>
        </Container>
      </>
    )
}

export default App;