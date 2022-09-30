import React from "react";
import   { useState } from 'react';

export default function Main(){
    const deckOfCards  =[
        {suit : "❤", faceValue : "Ace", value: 11, id:1},
        {suit : "❤", faceValue : "2", value: 2, id:2},
        {suit : "❤", faceValue : "3",value :3, id:3},
        {suit : "❤", faceValue : "4",value :4, id:4},
        {suit : "❤", faceValue : "5",value :5, id:5},
        {suit : "❤", faceValue : "6",value :6, id:6},
        {suit : "❤", faceValue : "7",value :7, id:7},
        {suit : "❤", faceValue : "8",value :8, id:8},
        {suit : "❤", faceValue : "9",value :9,id:9},
        {suit : "❤", faceValue : "10", value :10, id:10},
        {suit : "❤", faceValue : "jack",value :10, id:11},
        {suit : "❤", faceValue : "queen",value :10,id:12},
        {suit : "❤", faceValue : "king",value :10,id:13},
        {suit : "♠", faceValue : "Ace",value :11,id:14},
        {suit : "♠", faceValue : "2", value :2, id:15},
        {suit : "♠", faceValue : "3", value :3,id:16},
        {suit : "♠", faceValue : "4", value :4, id:17},
        {suit : "♠", faceValue : "5", value :5, id:18},
        {suit : "♠", faceValue : "6", value :6, id:19},
        {suit : "♠", faceValue : "7",value :7,id:20},
        {suit : "♠", faceValue : "8", value :8, id:21},
        {suit : "♠", faceValue : "9",value :9, id:22},
        {suit : "♠", faceValue : "10", value:10,id:23},
        {suit : "♠", faceValue : "jack", value :10, id:24},
        {suit : "♠", faceValue : "queen", value: 10,id:25},
        {suit : "♠", faceValue : "king",value :10, id:26},
        {suit : "♣", faceValue : "Ace", value : 11, id:27},
        {suit : "♣", faceValue : "2", value : 2, id:27},
        {suit : "♣", faceValue : "3", value : 3, id:27},
        {suit : "♣", faceValue : "4", value : 4, id:27},
        {suit : "♣", faceValue : "5", value : 5, id:27},
        {suit : "♣", faceValue : "6", value : 6, id:27},
        {suit : "♣", faceValue : "7", value : 7, id:27},
        {suit : "♣", faceValue : "8", value : 8, id:27},
        {suit : "♣", faceValue : "9", value : 9, id:27},
        {suit : "♣", faceValue : "10", value : 10, id:27},
        {suit : "♣", faceValue : "jack", value : 10, id:27},
        {suit : "♣", faceValue : "queen", value : 10, id:27},
        {suit : "♣", faceValue : "king", value : 10, id:27},
        {suit : "♦", faceValue : "Ace", value : 11, id:27},
        {suit : "♦", faceValue : "2", value : 2, id:27},
        {suit : "♦", faceValue : "3", value : 3, id:27},
        {suit : "♦", faceValue : "4", value : 4, id:27},
        {suit : "♦", faceValue : "5", value : 5, id:27},
        {suit : "♦", faceValue : "6", value : 6, id:27},
        {suit : "♦", faceValue : "7", value : 7, id:27},
        {suit : "♦", faceValue : "8", value : 8, id:27},
        {suit : "♦", faceValue : "9", value : 9, id:27},
        {suit : "♦", faceValue : "10", value : 10, id:27},
        {suit : "♦", faceValue : "jack", value : 10, id:27},
        {suit : "♦", faceValue : "queen", value : 10, id:27},
        {suit : "♦", faceValue : "king", value : 10, id:27},
    ]
    
    const [playerHand, setPlayerHand] = useState([])
    const [dealerHand, setDealerHand] = useState([])
    const showDealerHand = dealerHand.map((item, index)=> <ul key={index}> {item.faceValue} of {item.suit}</ul>)
    const showPlayerHand = playerHand.map((item, index)=>
        <ul key={index}> {item.faceValue} of {item.suit}</ul>
    )
    const [valueCard, setValueCard] = React.useState(playerHand.map((item, index)=>item.value))
    const [sum, setSum] = React.useState(0)
    React.useEffect(()=>{
        let s = 0
        for(var i=0; i<valueCard.length; i++){
             s+=valueCard[i]
        }
        setSum(s)
    },[valueCard])
    const [playerLost, setPlayerLost] = React.useState(false)
    const [gameOn, setGameOn] = React.useState(false)
    const [playerWon, setPlayerWon] = React.useState(false)
    function getRandom () {
        const random = Math.floor(Math.random()*deckOfCards.length) 
        const random1 = Math.floor(Math.random()*deckOfCards.length)
        setPlayerHand((prev)=>{
            return [...prev, deckOfCards[random]]
        })
        setDealerHand((prev)=>{
            return [...prev, deckOfCards[random1] ]
        })
        setValueCard((prev)=>{
            let playerCards = [...prev, deckOfCards[random].value]
            let dealerCards = [...prev, deckOfCards[random1].value]
            //setting current value
            let ds=0
            let s = 0
            for(var j=0; j<dealerCards.length; j++){
                ds+=dealerCards[j]
            }
            for(var i=0; i<playerCards.length; i++){
                s+=playerCards[i]
            } // sum logic

            if(s>21){ // game logic
                setPlayerLost(current => !current)
                setGameOn(false)
            }
            if(s<21){
                setGameOn(true)
            }
            if(s===21){
                setPlayerWon(true)
                setGameOn(false)
            }

            return playerCards //returning current val
        })   
        
    }

    return(
        <div>
            <div>Dealer's Hand </div>
            <div>{showDealerHand}</div>
            <div>Player's Hand</div>
            <button className="hit-btn" onClick={getRandom}>Hit</button>
            <div>{showPlayerHand}</div> 
            <div> player hand -  {sum}</div>
            {playerLost && <div>Player loses. 😔 Game Over</div>}
            {gameOn && <div> Hit or Stay 😮</div>}
            {playerWon && <p>You won 🥳 </p>}
            <button className="stay-btn" >Stay</button>
        </div>
    )
}