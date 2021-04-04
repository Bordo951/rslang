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
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

import {
  PageInner,
  Card,
  CardInner,
  CardFront,
  CardBack,
  ImageContainer,
  CardRotateBtn,
  CardContent,
  CardContentBlockWord,
  PlaySounBtn,
  CardText,
  CardLearnBtn,
  CardHardBtn,
  CardDeleteBtn,
} from './PageStyle';

SwiperCore.use([Navigation, Pagination]);
const Page: React.FC = () => {
  const words = useSelector(getWordsData);
  console.log(words);
  const status = useSelector(getRequestStatus);
  const error = useSelector(getErrorMessage);
  const dispatch = useDispatch();
  let address = 'https://vhoreho-rslang.herokuapp.com/';
  let { pageId } = useParams<{ pageId: string }>();
  useEffect(() => {
    dispatch(fetchWordsData(words[0]?.group, +pageId.slice(5)));
  }, [dispatch, pageId]);
  const [isCardRotated, setIsCardRotated] = useState<boolean>(false);
  return (
    <div>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>{error}</div>}
      {status === 'succeeded' && words !== null && (
        <PageInner>
          <Swiper slidesPerView={1} navigation pagination={{ clickable: true }}>
            {words.map((word) => {
              let wordAudio = new Audio(`${address}${word.audio}`);
              let wordAudioMeaning = new Audio(
                `${address}${word.audioMeaning}`
              );
              let wordAudioExample = new Audio(
                `${address}${word.audioExample}`
              );
              const playAll = () => {
                wordAudio.play();
                wordAudio.onended = function () {
                  wordAudioMeaning.play();
                };
                wordAudioMeaning.onended = function () {
                  wordAudioExample.play();
                };
              };

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
                          <CardContentBlockWord>
                            <span>{word.word} </span>
                          </CardContentBlockWord>
                          <CardText dangerouslySetInnerHTML={{__html: word.textMeaning}} />
                          <CardText dangerouslySetInnerHTML={{__html: word.textExample}} />
                          <PlaySounBtn>
                            <button onClick={() => playAll()}>
                              <i className='fas fa-volume-down'></i>
                            </button>
                          </PlaySounBtn>
                          <CardLearnBtn>Добавить в изученные</CardLearnBtn>
                          <CardHardBtn>Добавить в сложные</CardHardBtn>
                          <CardDeleteBtn>Удалить из изученных</CardDeleteBtn>
                          <div>Result</div>
                          <div>Show if word is in hards</div>
                        </CardContent>
                      </CardFront>
                      <CardBack>
                        <CardRotateBtn onClick={() => setIsCardRotated(false)}>
                          <i className='fas fa-sync-alt'></i>
                        </CardRotateBtn>
                        <CardContent>
                          <CardContentBlockWord>
                            <span>{word.word} </span>
                            <PlaySounBtn>
                              <button onClick={() => wordAudio.play()}>
                                <i className='fas fa-volume-down'></i>
                              </button>
                            </PlaySounBtn>
                            <span dangerouslySetInnerHTML={{__html: word.transcription }} />
                            <div dangerouslySetInnerHTML={{__html: word.wordTranslate}} />
                          </CardContentBlockWord>
                          <div dangerouslySetInnerHTML={{__html:word.textMeaning}} />
                          <PlaySounBtn>
                            <button onClick={() => wordAudioMeaning.play()}>
                              <i className='fas fa-volume-down'></i>
                            </button>
                          </PlaySounBtn>
                          <div dangerouslySetInnerHTML={{__html: word.textMeaningTranslate }} />
                          <div dangerouslySetInnerHTML={{__html: word.textExample}} />
                          <PlaySounBtn>
                            <button onClick={() => wordAudioExample.play()}>
                              <i className='fas fa-volume-down'></i>
                            </button>
                          </PlaySounBtn>
                          <div dangerouslySetInnerHTML={{__html: word.textExampleTranslate}} />
                          <CardLearnBtn>Добавить в изученные</CardLearnBtn>
                          <CardHardBtn>Добавить в сложные</CardHardBtn>
                          <CardDeleteBtn>Удалить из изученных</CardDeleteBtn>
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
