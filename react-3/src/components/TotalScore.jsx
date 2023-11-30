import React from 'react'
import styled from 'styled-components'

const ScoreContainer=styled.div`
   max-width:200px;
   text-align:center;
   h1{
    font-size:100px;
    line-height:100px;
    }

   p{
    font-size:24px;
    font-weight:500px;
    }`;
const TotalScore = ({score}) => {
  return (

    <ScoreContainer>
            <h1>
                {score}
                <p>Total Score</p>
            </h1>
            </ScoreContainer>
   
  );
};

export default TotalScore;