import React from 'react'
import styled from 'styled-components'

const DiceContainer = styled.div`
margin-top:48px;
display:flex;
flex-direction:column;
align-items:center;      

.dice{
    cursor:pointer;
}
p{
    font-size:24px;
}
 
`;

const RoleDice = ({roleDice,currentDice}) => {
  

  return (
   
    <DiceContainer>
    <div className="dice" onClick={roleDice}>

        <img src={`/images/dice/dice_${currentDice}.png`} alt="dice 1" width="250px" />
     </div>
    <p>Click on Dick to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;