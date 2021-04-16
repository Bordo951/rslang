import React from "react";
import styled from "styled-components";

interface SectionTitleInterface {
    title: string;
}

const Main = styled.main`
  background-color: rgb(210, 210, 210);
  background-image: url('/assets/images/textbook_bg.png');
  background-repeat: repeat;
  background-attachment: fixed;
  background-position: 50% 191px;

  .section-title {
    background-image: url('/assets/images/section-bg.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    padding: 20px 0;

    h2 {
      text-align: center;
      font-family: 'Bubblegum Sans', cursive, sans-serif;
      font-size: 36px;
      font-weight: 600;
      color: #fff;
      margin: 0;
    }

    @media (max-width: 992px) {
      padding: 10px 0;

      h2 {
        font-size: 30px;
      }
    }

    @media (max-width: 769px) {
      padding: 10px 0;

      h2 {
        font-size: 25px;
        line-height: 1.5;
      }
    }
    @media (max-width: 769px) {
      padding: 5px 0;
    }
  }
`;

const SectionTitle: React.FC<SectionTitleInterface> = ({title}) => {
    return (
        <Main>
            <section className='section-title'>
                <h2>{title}</h2>
            </section>
        </Main>
    );
};

export default SectionTitle;
