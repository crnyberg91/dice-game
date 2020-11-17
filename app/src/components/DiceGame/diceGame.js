import React from 'react';
import { Container } from 'react-bootstrap';


class DiceGame extends React.Component {
    state = {
        godPowers: {

        },
        playerOne: {
            diceSet: {
                diceOne: ['axe', 'arrowEX', 'stealEX', 'helmet', 'shield', 'axe'],
                diceTwo: ['ArrowEX', 'helmetEX', 'axe', 'axe', 'shield', 'steal'],
                diceThree: ['shieldEX', 'stealEX', 'axe', 'axe', 'arrow', 'helmet'],
                diceFour: ['shieldEX', 'helmetEX', 'axe', 'axe', 'steal', 'arrow'],
                diceFive: ['stealEx', 'helmetEX', 'shield', 'arrow', 'axe', 'axe'],
                diceSix: ['shieldEX', 'arrowEX', 'steal', 'helmet', 'axe', 'axe']
            },
            decidingCup: [],
            healthPoints: 0,
            selectedPowers: [],
            isFirst: false
        },
        playerTwo: {
            diceSet: {
                diceOne: ['axe', 'arrowEX', 'stealEX', 'helmet', 'shield', 'axe'],
                diceTwo: ['ArrowEX', 'helmetEX', 'axe', 'axe', 'shield', 'steal'],
                diceThree: ['shieldEX', 'stealEX', 'axe', 'axe', 'arrow', 'helmet'],
                diceFour: ['shieldEX', 'helmetEX', 'axe', 'axe', 'steal', 'arrow'],
                diceFive: ['stealEx', 'helmetEX', 'shield', 'arrow', 'axe', 'axe'],
                diceSix: ['shieldEX', 'arrowEX', 'steal', 'helmet', 'axe', 'axe']
            },
            decidingCup: [],
            healthPoints: 0,
            selectedPowers: [],
            isFirst: false
        }
    };
    rollDicePOne = e => {
        //    return 
        console.log("P1 DICE ONE: " + this.state.playerOne.diceSet.diceOne[Math.floor(Math.random() * this.state.playerOne.diceSet.diceOne.length)])
        console.log("P1 DICE TWO: " + this.state.playerOne.diceSet.diceTwo[Math.floor(Math.random() * this.state.playerOne.diceSet.diceTwo.length)])
        console.log("P1 DICE Three: " + this.state.playerOne.diceSet.diceThree[Math.floor(Math.random() * this.state.playerOne.diceSet.diceThree.length)])
        console.log("P1 DICE Four: " + this.state.playerOne.diceSet.diceFour[Math.floor(Math.random() * this.state.playerOne.diceSet.diceFour.length)])
        console.log("P1 DICE Five: " + this.state.playerOne.diceSet.diceFive[Math.floor(Math.random() * this.state.playerOne.diceSet.diceFive.length)])
        console.log("P1 DICE Six: " + this.state.playerOne.diceSet.diceSix[Math.floor(Math.random() * this.state.playerOne.diceSet.diceSix.length)])
    };
    rollDicePTwo = e => {
        //    return 
        console.log("P2 DICE ONE: " + this.state.playerTwo.diceSet.diceOne[Math.floor(Math.random() * this.state.playerTwo.diceSet.diceOne.length)])
        console.log("P2 DICE TWO: " + this.state.playerTwo.diceSet.diceTwo[Math.floor(Math.random() * this.state.playerTwo.diceSet.diceTwo.length)])
        console.log("P2 DICE Three: " + this.state.playerTwo.diceSet.diceThree[Math.floor(Math.random() * this.state.playerTwo.diceSet.diceThree.length)])
        console.log("P2 DICE Four: " + this.state.playerTwo.diceSet.diceFour[Math.floor(Math.random() * this.state.playerTwo.diceSet.diceFour.length)])
        console.log("P2 DICE Five: " + this.state.playerTwo.diceSet.diceFive[Math.floor(Math.random() * this.state.playerTwo.diceSet.diceFive.length)])
        console.log("P2 DICE Six: " + this.state.playerTwo.diceSet.diceSix[Math.floor(Math.random() * this.state.playerTwo.diceSet.diceSix.length)])
    };
    
    render() {
        return (
            <Container>
                <button onClick={this.rollDicePOne}>CLICK TO ROLL Player One</button>
                <br/>
                <button onClick={this.rollDicePTwo}>CLICK TO ROLL Player Two</button>
            </Container>
        );
    };
};

export default DiceGame;