import React from 'react'
import styled from 'styled-components'


const RulesContainer = styled.div`
max-width:800px;
margin:0 auto;
background-color:LightGray;
color:black;
padding:20px;
margin-top:40px;
border-radius:10px;
h2{
    font-size:24px;
}
.text{
    margin-top:24px; 
} `;
const Rules = () => {
  return (
    <RulesContainer> <h2>How to play dice Game</h2>
        <div className="tex">
        <p>Select Any Number</p>
        <p>Click on dice image</p>
        <p> After click on dice if selected number is equal to dice number you
            will get same point as dice{" "}
        </p>
        <p>if you get wrong guess then 2 points will be deducted</p>
        </div>
        </RulesContainer>
       

  );
};

export default Rules;