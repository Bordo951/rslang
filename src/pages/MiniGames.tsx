import React from "react";
import styled from "styled-components";
import {Route, Switch} from "react-router";
import MiniGamesGrid from "../components/miniGames/MiniGamesGrid";
import {HashRouter} from "react-router-dom";
import  {SavannahGamePage, Game2, Game3, Game4} from '../components/miniGames';
import SectionTitle from "../parts/SectionTitle";

const MiniGames: React.FC = () => {
    return (
        <div>
            <HashRouter>
                <Switch>
                    <Route path="/mini-games/game-1">
                        {/*<SectionTitle title="Game 1 title" />*/}
                        <SavannahGamePage />
                    </Route>
                    <Route path='/mini-games/game-2'>
                        {/*<SectionTitle title="Game 2 title" />*/}
                        <Game2 />
                    </Route>
                    <Route path='/mini-games/game-3'>
                        {/*<SectionTitle title="Game 3 title" />*/}
                        <Game3 />
                    </Route>
                    <Route path='/mini-games/game-4'>
                        {/*<SectionTitle title="Game 4 title" />*/}
                        <Game4 />
                    </Route>
                    <Route path='/mini-games/'>
                        <SectionTitle title="Мини-игры" />
                        <MiniGamesGrid />
                    </Route>
                </Switch>
            </HashRouter>
        </div>
    );
};

export default MiniGames;
