import {useEffect} from 'react';
import queryString from "query-string";
import {useDispatch, useSelector} from "react-redux";
import {fetchWordsData, getWordsData, WordType} from "../../redux/wordsSlice";
import { useState } from 'react';

const parseHash = () => queryString.parseUrl(window.location.hash.slice(19)); //@toDo: since we are using hash router

export const MiniGamesWordsGroup = () => {
    const parsed: any = parseHash();

    return Number.isInteger(+parsed.query.group) ? +parsed.query.group : 1;
};

export const MiniGamesWordsPage = () => {
    // const parsed: any = parseHash();
return Math.floor(Math.random() * 28)
    // return Number.isInteger(+parsed.query.page) ? +parsed.query.page : 0;
};

// const getRandomPage = () => Math.floor(Math.random() * 28);

export const MiniGamesWordsFetcher = () => {
    const [page, setPage] = useState(MiniGamesWordsPage())
    let group = MiniGamesWordsGroup();

    const changePage = () => {
        setPage(MiniGamesWordsPage())
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchWordsData(group, page))
    }, [dispatch, group, page]);

    return [useSelector(getWordsData), changePage] as [WordType[], () => void]
};

export default MiniGamesWordsFetcher;