import React from 'react';
import { Route, HashRouter, Switch} from "react-router-dom";
import "./fonts/fonts.css";
import Header from "./parts/Header";
import ElectronicTextbook from './pages/ElectronicTextbook';
import MiniGames from "./pages/MiniGames";
import MainPage from "./pages/MainPage";
import Statistics from "./pages/Statistics";
import Settings from "./pages/Settings";
import Menu from "./parts/Menu";

const App: React.FC = () => {
  return (
    <HashRouter>
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
