import React from 'react';
import { Route, HashRouter, Switch} from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import "./fonts/fonts.css";
import Header from "./parts/Header";
import ElectronicTextbook from './pages/ElectronicTextbook';
import MiniGames from "./pages/MiniGames";
import MainPage from "./pages/MainPage";
import Statistics from "./pages/Statistics";
import Settings from "./pages/Settings";
import Menu from "./parts/Menu";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Montserrat-Regular',sans-serif;
    font-size: 16px;
    overflow-y: scroll;
    
    // &::-webkit-scrollbar-track {
    //   -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    //   background-color: #F5F5F5;
    //   // border-radius: 10px;
    // }
    //
    // &::-webkit-scrollbar {
    //   width: 10px;
    //   background-color: #F5F5F5;
    // }
    //
    // &::-webkit-scrollbar-thumb {
    //   // border-radius: 10px;
    //   background-image: -webkit-gradient(linear,
    //                      left bottom,
    //                      left top,
    //                      color-stop(0.44, rgb(122,153,217)),
    //                      color-stop(0.72, rgb(73,125,189)),
    //                      color-stop(0.86, #054B6D));
    // }
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

const App: React.FC = () => {
  return (
    <HashRouter>
        <GlobalStyle />
        <Header />
        <Menu/>
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/text-book/" component={ElectronicTextbook} />
            <Route path="/mini-games/" component={MiniGames} />
            <Route path="/settings/" component={Settings} />
            <Route path="/statistics/" component={Statistics} />
            {/*<Route path="/signup">{userName !== "" ? <Redirect to="/" /> : <SignUp />}</Route>*/}
        </Switch>
        {/*<Footer />*/}
    </HashRouter>
  );
};

export default App;
