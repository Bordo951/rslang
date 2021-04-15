import {useEffect} from 'react';
import queryString from "query-string";
import {useDispatch, useSelector} from "react-redux";
import {fetchWordsData, getWordsData} from "../../redux/wordsSlice";

const parseHash = () => queryString.parseUrl(window.location.hash.slice(19)); //@toDo: since we are using hash router

export const MiniGamesWordsGroup = () => {
    const parsed: any = parseHash();
    const defaultGroup = 1;

    return Number.isInteger(+parsed.query.group) ? +parsed.query.group : defaultGroup;
};

export const MiniGamesWordsPage = () => {
    const parsed: any = parseHash();
    const defaultPage = 0;

    return Number.isInteger(+parsed.query.page) ? +parsed.query.page : defaultPage;
};

export const MiniGamesWordsFetcher = () => {
    let group = MiniGamesWordsGroup();
    let page = MiniGamesWordsPage();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchWordsData(group, page))
    }, [dispatch, group, page]);

    return useSelector(getWordsData);
};

export default MiniGamesWordsFetcher;