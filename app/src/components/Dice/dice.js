import React from 'react';
import { Container } from 'react-bootstrap';


class Dice extends React.Component {
    state = {
        diceSet: {
            diceOne: ['axe', 'arrowEX', 'stealEX', 'helmet', 'shield', 'axe'],
            diceTwo: ['ArrowEX', 'helmetEX', 'axe', 'axe', 'shield', 'steal'],
            diceThree: ['shieldEX', 'stealEX', 'axe', 'axe', 'arrow', 'helmet'],
            diceFour: ['shieldEX', 'helmetEX', 'axe', 'axe', 'steal', 'arrow'],
            diceFive: ['stealEx', 'helmetEX', 'shield', 'arrow', 'axe', 'axe'],
            diceSix: ['shieldEX', 'arrowEX', 'steal', 'helmet', 'axe', 'axe']
        }
    };
    rollDice = e => {
        //    return 
        console.log("DICE ONE: " + this.state.diceSet.diceOne[Math.floor(Math.random() * this.state.diceSet.diceOne.length)])
        console.log("DICE TWO: " + this.state.diceSet.diceTwo[Math.floor(Math.random() * this.state.diceSet.diceTwo.length)])
        console.log("DICE Three: " + this.state.diceSet.diceThree[Math.floor(Math.random() * this.state.diceSet.diceThree.length)])
        console.log("DICE Four: " + this.state.diceSet.diceFour[Math.floor(Math.random() * this.state.diceSet.diceFour.length)])
        console.log("DICE Five: " + this.state.diceSet.diceFive[Math.floor(Math.random() * this.state.diceSet.diceFive.length)])
        console.log("DICE Six: " + this.state.diceSet.diceSix[Math.floor(Math.random() * this.state.diceSet.diceSix.length)])
    };
    render() {
        return (
            <Container>
                <button onClick={this.rollDice}>CLICK TO ROLL</button>
            </Container>
        );
    };
};

export default Dice;