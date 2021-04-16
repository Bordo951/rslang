import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getWordsData,
  fetchWordsData,
  getErrorMessage,
  getRequestStatus,
} from '../../../redux/wordsSlice';
import { getUserId } from '../../../redux/authSlice';
import { createUserWord } from '../../../redux/dictionary';
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
  CardsBtnsRow,
  CardLearnBtn,
  CardHardBtn,
  CardDeleteBtn,
  TitleRow,
} from './PageStyle';

interface PageInterface {
  groupNum: number;
}

SwiperCore.use([Navigation, Pagination]);
const Page: React.FC<PageInterface> = ({ groupNum }) => {
  const words = useSelector(getWordsData);
  console.log(words);
  // console.log(words[0]);
  const status = useSelector(getRequestStatus);
  const error = useSelector(getErrorMessage);
  const dispatch = useDispatch();
  let address = 'https://vhoreho-rslang.herokuapp.com/';
  let { pageId } = useParams<{ pageId: string }>();
  useEffect(() => {
    dispatch(fetchWordsData(words[0]?.group, +pageId.slice(5)));
  }, [dispatch, pageId]);
  const [isCardRotated, setIsCardRotated] = useState<boolean>(false);

  const handleLearnWord = (wordIndex: number) => {
    let wordId = words[wordIndex].id;
    let word = { difficulty: 'weak' };
    let userId = localStorage.getItem('userId');
    dispatch(createUserWord({ userId, wordId, word }));
  };
  return (
    <div>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>{error}</div>}
      {status === 'succeeded' && words !== null && (
        <PageInner>
          <Swiper slidesPerView={1} navigation pagination={{ clickable: true }}>
            {words.map((word, index) => {
              let wordIndex = index;
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
                          <i
                            data-group-id={groupNum}
                            className='fas fa-sync-alt'
                          />
                        </CardRotateBtn>
                        <CardContent>
                          <CardContentBlockWord>
                            <span data-group-id={groupNum}>{word.word} </span>
                          </CardContentBlockWord>
                          <PlaySounBtn>
                            <button
                              data-group-id={groupNum}
                              onClick={() => playAll()}
                            >
                              <i className='fas fa-volume-down' />
                            </button>
                          </PlaySounBtn>
                          <CardText
                            dangerouslySetInnerHTML={{
                              __html: word.textMeaning,
                            }}
                          />
                          <CardText
                            dangerouslySetInnerHTML={{
                              __html: word.textExample,
                            }}
                          />
                          <CardsBtnsRow>
                            <CardLearnBtn
                              onClick={() => handleLearnWord(wordIndex)}
                              data-group-id={groupNum}
                            >
                              Изучить
                            </CardLearnBtn>
                            <CardHardBtn data-group-id={groupNum}>
                              Сложно
                            </CardHardBtn>
                            <CardDeleteBtn data-group-id={groupNum}>
                              Изучено
                            </CardDeleteBtn>
                          </CardsBtnsRow>
                          <div>Result</div>
                          <div>Show if word is in hards</div>
                        </CardContent>
                      </CardFront>
                      <CardBack>
                        <CardRotateBtn onClick={() => setIsCardRotated(false)}>
                          <i
                            data-group-id={groupNum}
                            className='fas fa-sync-alt'
                          />
                        </CardRotateBtn>
                        <CardContent>
                          <CardContentBlockWord>
                            <TitleRow>
                              <div data-group-id={groupNum}>{word.word} </div>
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: word.transcription,
                                }}
                              />
                            </TitleRow>
                            <PlaySounBtn>
                              <button
                                data-group-id={groupNum}
                                onClick={() => wordAudio.play()}
                              >
                                <i className='fas fa-volume-down' />
                              </button>
                            </PlaySounBtn>
                            {/*<span dangerouslySetInnerHTML={{__html: word.transcription }} />*/}
                            <div
                              data-group-id={groupNum}
                              dangerouslySetInnerHTML={{
                                __html: word.wordTranslate,
                              }}
                            />
                          </CardContentBlockWord>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: word.textMeaning,
                            }}
                          />
                          <PlaySounBtn>
                            <button
                              data-group-id={groupNum}
                              onClick={() => wordAudioMeaning.play()}
                            >
                              <i className='fas fa-volume-down' />
                            </button>
                          </PlaySounBtn>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: word.textMeaningTranslate,
                            }}
                          />
                          <div
                            dangerouslySetInnerHTML={{
                              __html: word.textExample,
                            }}
                          />
                          <PlaySounBtn>
                            <button
                              data-group-id={groupNum}
                              onClick={() => wordAudioExample.play()}
                            >
                              <i className='fas fa-volume-down' />
                            </button>
                          </PlaySounBtn>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: word.textExampleTranslate,
                            }}
                          />
                          <CardsBtnsRow>
                            <CardLearnBtn data-group-id={groupNum}>
                              Изучить
                            </CardLearnBtn>
                            <CardHardBtn data-group-id={groupNum}>
                              Сложно
                            </CardHardBtn>
                            <CardDeleteBtn data-group-id={groupNum}>
                              Изучено
                            </CardDeleteBtn>
                          </CardsBtnsRow>
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
