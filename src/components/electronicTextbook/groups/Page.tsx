import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getWordsData,
  fetchWordsData,
  getErrorMessage,
  getRequestStatus,
} from '../../../redux/wordsSlice';

import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import {
  PageInner,
  Card,
  CardInner,
  CardFront,
  CardBack,
  ImageContainer,
  CardRotateBtn,
  CardContent,
  CardContentBlock,
  CardContentBlockWord,
} from './PageStyle';

const Page: React.FC = () => {
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
  const [isCardRotated, setIsCardRotated] = useState<boolean>(false);
  console.log(isCardRotated);
  return (
    <div>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>{error}</div>}
      {status === 'succeeded' && words !== null && (
        <PageInner>
          {`pageNum${pageId}`}
          <Swiper slidesPerView={1}>
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
                  <Card>
                    <CardInner isCardRotated={isCardRotated}>
                      <CardFront>
                        <ImageContainer>
                          <img src={`${address}${word.image}`} />
                        </ImageContainer>
                        <CardRotateBtn onClick={() => setIsCardRotated(true)}>
                          <i className='fas fa-sync-alt'></i>
                        </CardRotateBtn>
                        <CardContent>
                          <CardContentBlock>
                            <CardContentBlockWord>
                              <span>{word.word} </span>
                              <button onClick={() => wordAudio.play()}>
                                <i className='fas fa-volume-down'></i>
                              </button>
                            </CardContentBlockWord>
                          </CardContentBlock>
                          <CardContentBlock>
                            <div>{word.textMeaning}</div>
                            <button onClick={() => wordAudioMeaning.play()}>
                              <i className='fas fa-volume-down'></i>
                            </button>
                          </CardContentBlock>
                          <CardContentBlock>
                            <div>{word.textExample}</div>
                            <button onClick={() => wordAudioExample.play()}>
                              <i className='fas fa-volume-down'></i>
                            </button>
                          </CardContentBlock>
                          <button>Add to myWords</button>
                          <button>Add Hard</button>
                          <button>Add to Deleted</button>
                          <div>Result</div>
                          <div>Show if word is in hards</div>
                        </CardContent>
                      </CardFront>
                      <CardBack>
                        <CardRotateBtn onClick={() => setIsCardRotated(false)}>
                          <i className='fas fa-sync-alt'></i>
                        </CardRotateBtn>
                        <CardContent>
                          <CardContentBlock>
                            <CardContentBlockWord>
                              <span>{word.word} </span>
                              <button onClick={() => wordAudio.play()}>
                                <i className='fas fa-volume-down'></i>
                              </button>
                              <span>{word.transcription} </span>

                              <div>{word.wordTranslate}</div>
                            </CardContentBlockWord>
                          </CardContentBlock>
                          <CardContentBlock>
                            <div>{word.textMeaning}</div>
                            <button onClick={() => wordAudioMeaning.play()}>
                              <i className='fas fa-volume-down'></i>
                            </button>
                            <div>{word.textMeaningTranslate}</div>
                          </CardContentBlock>
                          <CardContentBlock>
                            <div>{word.textExample}</div>
                            <button onClick={() => wordAudioExample.play()}>
                              <i className='fas fa-volume-down'></i>
                            </button>
                            <div>{word.textExampleTranslate}</div>
                          </CardContentBlock>
                          <button>Add to myWords</button>
                          <button>Add Hard</button>
                          <button>Add to Deleted</button>
                          <div>Result</div>
                          <div>Show if word is in hards</div>
                        </CardContent>
                      </CardBack>
                    </CardInner>
                  </Card>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </PageInner>
      )}
    </div>
  );
};

export default Page;
