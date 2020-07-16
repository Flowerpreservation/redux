import * as React from 'react';
import './App.css';
import Counter from './components/Counter'

class App extends React.Component {
  public render() {
    // @ts-ignore
      return (
        <div className="App">
          <Counter/>
        </div>
    );
  }
}

export default App;
