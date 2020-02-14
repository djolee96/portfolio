import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
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
          <Footer />
        </div>
      </BreakpointProvider>
    );
  }
}

export default App;
