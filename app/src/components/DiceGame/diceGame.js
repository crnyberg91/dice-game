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
                diceOne: ['arrowEX', 'stealEX', 'helmet', 'shield', 'axe', 'axe'],
                diceTwo: ['arrowEX', 'helmetEX', 'shield', 'steal', 'axe', 'axe'],
                diceThree: ['shieldEX', 'stealEX', 'arrow', 'helmet', 'axe', 'axe'],
                diceFour: ['shieldEX', 'helmetEX', 'steal', 'arrow', 'axe', 'axe'],
                diceFive: ['stealEx', 'helmetEX', 'shield', 'arrow', 'axe', 'axe'],
                diceSix: ['shieldEX', 'arrowEX', 'steal', 'helmet', 'axe', 'axe']
            },
            decidingCup: [],
            healthPoints: 15,
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
            healthPoints: 15,
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
    //coin flip that creates coin div in which side that won
    //selected dice will move to the selDiceCup
    //Sorting algorithm used to create the attack phase row
    //rounds changing who goes first

    render() {
        return (
            <Container className='dice-game'>
                <div className='opponent-side-powers'>
                    <div className='power' id='oppPower1'>Power1</div>
                    <div className='power' id='oppPower2'>Power2</div>
                    <div className='power' id='oppPower3'>Power3</div>
                </div>
                <div className='opponent-side-cup'>
                    <div className='dice' id='oppDice1'>dice1</div>
                    <div className='dice' id='oppDice2'>dice2</div>
                    <div className='dice' id='oppDice3'>dice3</div>
                    <div className='dice' id='oppDice4'>dice4</div>
                    <div className='dice' id='oppDice5'>dice5</div>
                    <div className='dice' id='oppDice6'>dice6</div>
                </div>
                <div className='opponent-side-health-points'>
                    <div className='health-pool' id='oppHealthPool'>{this.state.playerOne.healthPoints}</div>
                </div>
                <div className='empty-space'>emptyspace</div>
                <div className='opponent-roll-btn'>
                    <button className='roll-btn'>opponent roll button</button>
                </div>
                <div className='empty-space2'>empty-space2</div>
                <div className='opponent-meter'>
                    <div className='meter-bar' id='oppMeterBar'>oppMeter</div>
                </div>
                <div className='opponent-selected-dice-cup'>
                    <div className='dice' id='oppSelDice1'>dice1</div>
                    <div className='dice' id='oppSelDice2'>dice2</div>
                    <div className='dice' id='oppSelDice3'>dice3</div>
                    <div className='dice' id='oppSelDice4'>dice4</div>
                    <div className='dice' id='oppSelDice5'>dice5</div>
                    <div className='dice' id='oppSelDice6'>dice6</div>
                </div>
                <div className='empty-space3'>emptyspace3</div>
                <div className='coin' id='oppCoin'>opponent coin</div>
                {/* <div className='empty-space4'>emptySpace4</div> */}
                <div className='attack-row' id='oppAtkRow'>opponent attack row</div>
                <div className='attack-row' id='playerAtkRow'>player attack row</div>
                {/* <div className='empty-space5'>emptyspace5</div> */}
                <div className='player-selected-dice'>
                    <div className='dice' id='playerSelDice1'>dice1</div>
                    <div className='dice' id='playerSelDice2'>dice2</div>
                    <div className='dice' id='playerSelDice3'>dice3</div>
                    <div className='dice' id='playerSelDice4'>dice4</div>
                    <div className='dice' id='playerSelDice5'>dice5</div>
                    <div className='dice' id='playerSelDice6'>dice6</div>
                </div>
                <div className='empty-space6'>empty-space6</div>
                <div className='coin' id='playerCoin'>player coin</div>
                <div className='empty-space7'>empty space7</div>
                <div className='player-roll-btn'><button className='roll-btn'>player roll button</button></div>
                <div className='empty-space8'>empty space8</div>
                <div className='player-meter'><div className='meter-bar' id='oppMeterBar'>oppMeter</div></div>
                {/* <div className='empty-space9'>empty space9</div> */}
                <div className='player-side-health-points'>
                    <div className='health-pool' id='playerHealthPool'>{this.state.playerTwo.healthPoints}</div>
                </div>
                <div className='player-side-cup'>
                    <div className='dice' id='playerDice1'>dice1</div>
                    <div className='dice' id='playerDice2'>dice2</div>
                    <div className='dice' id='playerDice3'>dice3</div>
                    <div className='dice' id='playerDice4'>dice4</div>
                    <div className='dice' id='playerDice5'>dice5</div>
                    <div className='dice' id='playerDice6'>dice6</div>
                </div>
                <div className='player-side-powers'>
                    <div className='power' id='playerPower1'>Power1</div>
                    <div className='power' id='playerPower2'>Power2</div>
                    <div className='power' id='playerPower3'>Power3</div>
                </div>
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