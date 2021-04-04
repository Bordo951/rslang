import React from "react";
import styled from "styled-components";

interface SectionTitleInterface {
    title: string;
}

const Main = styled.main`
  background: #f0f3f3;

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
