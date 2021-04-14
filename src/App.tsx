import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import './fonts/fonts.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './parts/Header';
import ElectronicTextbook from './pages/ElectronicTextbook';
import MiniGames from './pages/MiniGames';
import MainPage from './pages/MainPage';
import Statistics from './pages/Statistics';
import Settings from './pages/Settings';
import Menu from './parts/Menu';
import Footer from './parts/Footer';
import Dictionary from './pages/Dictionary';

// <link href="https://fonts.googleapis.com/css?family=Permanent+Marker:regular" rel="stylesheet" />;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Montserrat-Regular',sans-serif;
    font-size: 16px;
    overflow-y: auto;
    
     &::-webkit-scrollbar-track {
       -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
          background-color: #F5F5F5;
     }

     &::-webkit-scrollbar {
        width: 10px;        
        background-color: #F5F5F5;
     }

     &::-webkit-scrollbar-thumb {
        -webkit-box-shadow: inset 0 0 3px rgba(0,0,0,.3);
       background-color: rgb(10,209,189);
     }
  }
  h1,h2,h3,h4,h5,h6 {
    line-height: 1.75;
  }
  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;

const App: React.FC = ( ) => {
  return (
    <HashRouter>
      <GlobalStyle />
      <Header />
      <Menu />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/text-book/" component={ElectronicTextbook} />
        <Route path="/mini-games/" component={MiniGames} />
        <Route path="/settings/" component={Settings} />
        <Route path="/statistics/" component={Statistics} />
       
        {/*<Route path="/signup">{userName !== "" ? <Redirect to="/" /> : <SignUp />}</Route>*/}
      </Switch>
      <Footer />
    </HashRouter>
  );
};

export default App;
