import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getWordsData,
  fetchWordsData,
  getErrorMessage,
  getRequestStatus,
} from '../../../redux/wordsSlice';

import { useParams, useRouteMatch } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

const Page: React.FC = () => {
  let match = useRouteMatch();
  const words = useSelector(getWordsData);
  const status = useSelector(getRequestStatus);
  const error = useSelector(getErrorMessage);
  const dispatch = useDispatch();
  let address = 'https://vhoreho-rslang.herokuapp.com/';
  let { pageId } = useParams<{ pageId: string }>();
  console.log(words);
  useEffect(() => {
    dispatch(fetchWordsData(words[0]?.group, +pageId.slice(5)));
  }, [dispatch, pageId]);

  return (
    <div>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>{error}</div>}
      {status === 'succeeded' && words !== null && (
        <div>
          {/* {word.word} */}
          <Swiper slidesPerView={1}>
            {`pageNum${pageId}`}
            {words.map((word) => {
              let wordAudio = new Audio(`${address}${word.audio}`);
              let wordAudioMeaning = new Audio(
                `${address}${word.audioMeaning}`
              );
              let wordAudioExample = new Audio(
                `${address}${word.audioExample}`
              );
              return (
                <SwiperSlide key={word.id}>
                  {/* <Card>
                    <CardInner>
                      <CardFront>
                        
                      </CardFront>
                      <CardBack>
                      </CardBack>
                    </CardInner>
                  </Card> */}
                  <img src={`${address}${word.image}`} />
                  <div>{word.word}</div>
                  <div>{word.transcription}</div>
                  <button onClick={() => wordAudio.play()}>playWord</button>
                  <div>{word.wordTranslate}</div>
                  <div>{word.textMeaning}</div>
                  <button onClick={() => wordAudioMeaning.play()}>
                    playwordAudioMeaning
                  </button>
                  <div>{word.textMeaningTranslate}</div>
                  <div>{word.textExample}</div>
                  <button onClick={() => wordAudioExample.play()}>
                    playwordAudioExample{' '}
                  </button>
                  <div>{word.textExampleTranslate}</div>
                  <button>Add to myWords</button>
                  <button>Add Hard</button>
                  <button>Add to Deleted</button>
                  <div>Result</div>
                  <div>Show if word is in hards</div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default Page;
