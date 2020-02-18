import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import "../scss/main.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BreakpointProvider } from 'react-socks';


class App extends React.Component {

  render() {
    return (
      <BreakpointProvider>
        <div className="App" >
          <Header />
          <Main />
        </div>
      </BreakpointProvider>
    );
  }
}

export default App;
