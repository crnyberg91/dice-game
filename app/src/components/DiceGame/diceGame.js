import React from 'react';
import { Container, Row } from 'react-bootstrap';
import GameBoard from '../Gameboard/gameboard';
import '../../App.css';


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
            <Container className='dice-game'>
                <div className='opponent-side-powers'>opponent powers</div>
                <div className='opponent-side-cup'>
                    oppCup
                </div>
                <div className='opponent-side-health-points'>
                    oppHP
                </div>
                <div className='empty-space'>emptyspace</div>
                <div className='opponent-roll-btn'>opponent rollbutton</div>
                <div className='empty-space2'>empty-space2</div>
                <div className='opponent-meter'>opponent meter</div>
                <div className='opponent-selected-dice-cup'>opponent selected Dice</div>
                <div className='empty-space3'>emptyspace3</div>
                <div className='opponent-coin'>opponent coin</div>
                <div className='empty-space4'>emptySpace4</div>
                <div className='opponent-attack-row'>opponent attack row</div>
                <div className='player-attack-row'>player attack row</div>
                <div className='empty-space5'>emptyspace5</div>
                <div className='player-selected-dice'>player selected dice</div>
                <div className='empty-space6'>empty-space6</div>
                <div className='player-coin'>player coin</div>
                <div className='empty-space7'>empty space7</div>
                <div className='player-roll-btn'>player rollbutton</div>
                <div className='empty-space8'>empty space8</div>
                <div className='player-meter'>player meter</div>
                {/* <div className='empty-space9'>empty space9</div> */}
                <div className='player-side-health-points'>player HP</div>
                <div className='player-side-cup'>player side cup</div>
                <div className='player-side-powers'>powers</div>
                {/* <div className='player-side'>
                <div className='health-points'>
                    Health points
                </div>
                <div className='cup'>
                    dice
                </div>
                <div className='god-powers'>
                    God Powers
                </div>
                </div> */}
                {/* <GameBoard/>
                <button onClick={this.rollDicePOne}>CLICK TO ROLL Player One</button>
                <button onClick={this.rollDicePTwo}>CLICK TO ROLL Player Two</button> */}
            </Container>
        );
    };
};

export default DiceGame;