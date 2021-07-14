import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Prefs from '../components/Prefs'
import Cards from '../components/Cards'
import { cardstorage } from '../components/card_storage'

const Game = styled.div`
    display:flex;
    flex-direction: row;
    width:100%;
    height:100vh;
    background: linear-gradient(90deg, rgba(0,3,39,1) 0%, rgba(0,57,102,1) 35%, rgba(0,173,237,1) 82%, rgba(0,93,142,1) 100%);
    .allCards{
        width:70%;
        height: 100%;
        overflow: hidden;
        z-index: 1;
        @media only screen and (max-width:800px){
        width: 100%;
        }
    }
    .einstellung{
        width: 30%;
    }
    @media only screen and (max-width:800px){
        flex-direction:column-reverse;
        >div{
            width: 100%;
        }
    }
`;

const AllCards = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    
`;


function Field() {

    const [ matchVal1, setMatchVal1 ] = useState(null);

    const [ matchId1, setMatchId1 ] = useState(null);
    const [ matchId2, setMatchId2 ] = useState(null);

    const [ validate, setValidate ] = useState(false);

    const [counter, setCounter] = useState(0);
    const [isActive, setActive] = useState(false);

    const [totalCount, setTotalCount] = useState(0);

    const [level, setLevel] = useState("1");

    const [ cssLevel, setCssLevel ] = useState("1");

    const [ card, setCards ] = useState([]);
    const [ score, setScore ] = useState(0);

    const [ totalCompare, setTotalCompare ] = useState(0);
    const [ pyro, setPyro ] = useState("pyro");
    const [ memSize, setMemSize] = useState(0);

    var cardVal1;
    var cardVal2;

    function changeLevel(e){
        setLevel(e.target.value);
    }

    let newList;
    let levelSelc = 20;
    var copyStorage;

    function start(cardstorage){
        copyStorage = cardstorage;

        var i;
        for(i = 0; i<card.length; i++){
            card[i].match = false;
            card[i].class="wrap";
        }

        setPyro("pyro");
        setTotalCount(0);
        switch(level){
            case "1":
                levelSelc = 20;
                copyStorage = cardstorage.slice(0, 20);
                setMemSize(10);
                break;
            case "2":
                levelSelc = 30;
                copyStorage = cardstorage.slice(0, levelSelc);
                setMemSize(15);
                break;
            case "3":
                levelSelc = 40;
                copyStorage = cardstorage.slice(0, levelSelc);
                setMemSize(20);
                break;
            default:
                break;
        }

        const shuffle = arr => {
            // Copy the array in input using ES6 spread operator.
            const copy = [...arr]
            
            // Sort it randomly and return the new array.
            return copy.sort(() => Math.random() - 0.5)
          }
          newList = shuffle(copyStorage);  
          cardstorage = newList;
          setCards(
            cardstorage
        )
          
          console.log(memSize);
          setCssLevel(level);
    }

   


    function toggleClass(id, foo){
        var i;
        //var id = id;
        if(validate){
            card[matchId1].class = "match";
            card[matchId2].class = "match";
            for(i = 0; i < card.length; i++){
                if(card[i].match === false){
                    card[i].class="wrap";
                }
                
            }
            setValidate(false);
           
        }
        else if(counter < 2){
            setActive(!isActive)
            card[foo].class = card[foo].classFlip; 
            setCounter(
                counter + 1
            );
            setCardVal(id, foo);
        }else if(counter >= 2){
            for(i = 0; i < card.length; i++){
                if(card[i].match === false){
                    card[i].class="wrap";
                }
            }
            setCounter(
                0
            );
            if(!validate){
                card[matchId1].class="wrap";
                card[matchId2].class="wrap";
            }
            
        }
        
    }

    function setCardVal(id, foo){
        switch(counter){
            case 0:
                setMatchVal1(
                    card[foo].key
                );
                setMatchId1(
                    foo
                );
                
                break;
            case 1:
                cardVal2 = card[foo].key;
                setMatchId2(
                    foo
                );
                card[matchId1].match = true;
                card[foo].match = true;
                compare(id, foo);
                break;
            default:
                cardVal1 = null;
                cardVal2 = null;
                break;
        }
    }

    useEffect(() => {cardVal1 = matchVal1} );

    
    function compare(id, foo){
        if(cardVal1 === cardVal2 && card[foo].id !== card[matchId1].id){
             setTotalCompare(
                 totalCompare + 1
             );
             setCounter(
                0
            );
            var x;
            
             setValidate( true );
            if(totalCompare+1 === memSize){
                for(x = 0; x<card.length; x++){
                    card[x].class = "match";
                }
                setPyro("pyro win");
                setScore(score + 1);
            }
             
        }else{
            setValidate(false);
            
        }
        setTotalCount(totalCount + 1)
    }
  return (
    <Game>
        <AllCards className="allCards" data-level={cssLevel}>
            {card.map((item, x) => (
                
                    <Cards foo={x} clickFunction = {toggleClass}  className={item.class} value={item.id} src={item.img}></Cards>
                
                ))}
            
            
        </AllCards>
        <Prefs className="einstellung" counter={totalCount} clickFunction = {(e) => changeLevel(e)} levelValue={level} startFunction = {(e) => start(cardstorage)} score={score}>
        </Prefs>
        <div className={pyro}>
            <div className="before"></div>
            <div className="after"></div>
        </div>
    </Game>
  );
  
}


export default Field