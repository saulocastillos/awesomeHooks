import React from 'react';

import TimeoutUseExample from './components/TimeoutUseExample'
import IntervalUseExample from './components/IntervalUseExample'
import PreviousUseExample from './components/PreviousUseExample'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    'alignItems': 'center',
    'justifyContent': 'space-around',
    flex: 1,
    height: '700px',
    fontSize: 18
  },
  text: {
    fontSize: 36,
    color: 'red'
  }

}

const App = () => {
    return (
        <div style={styles.container}>
          <div style={styles.text}>useTimeout Hook</div><TimeoutUseExample />
          <div style={styles.text}>useInterval Hook</div><IntervalUseExample />
          <div style={styles.text}>usePrevious Hook</div><PreviousUseExample />
        </div> 
    )
}

export default App;