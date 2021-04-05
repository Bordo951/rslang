import React from "react";
import styled from "styled-components";
import {Route, Switch} from "react-router";
import MiniGamesGrid from "../components/miniGames/MiniGamesGrid";
import {HashRouter} from "react-router-dom";
import {Game1, Game2, Game3, Game4} from '../components/miniGames';
import SectionTitle from "../parts/SectionTitle";

const MiniGames: React.FC = () => {
    return (
        <div>
            <SectionTitle title="Мини-игры" />
            <HashRouter>
                <Switch>
                    <Route path='/mini-games/game-1'>
                        <Game1 />
                    </Route>
                    <Route path='/mini-games/game-2'>
                        <Game2 />
                    </Route>
                    <Route path='/mini-games/game-3'>
                        <Game3 />
                    </Route>
                    <Route path='/mini-games/game-4'>
                        <Game4 />
                    </Route>
                    <Route path='/mini-games/'>
                        <MiniGamesGrid />
                    </Route>
                </Switch>
            </HashRouter>
        </div>
    );
};

export default MiniGames;
