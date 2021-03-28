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
              return (
                <SwiperSlide>
                  {/* <Card>
                    <CardInner>
                      <CardFront>
                        
                      </CardFront>
                      <CardBack>
                      </CardBack>
                    </CardInner>
                  </Card> */}
                  <div>{word.word}</div>
                  {/* <div>{word.transcription}</div>
                  <div>{word.wordTranslate}</div>
                  <div>{word.textExample}</div>
                  <div>{word.image}</div>
                  <div>{word.audio}</div>
                  <div>{word.audioMeaning}</div>
                  <div>{word.audioExample}</div>
                  <button>Add to myWords</button>
                  <button>Add Hard</button>
                  <button>Add to Deleted</button>
                  <div>Result</div>
                  <div>Show if word is in hards</div> */}
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
