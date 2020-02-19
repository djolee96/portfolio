import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import "../scss/main.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BreakpointProvider } from 'react-socks';
import Footer from './components/Footer';


class App extends React.Component {

  checkFooter

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
