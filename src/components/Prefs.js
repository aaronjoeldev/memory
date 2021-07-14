import React, { useState } from 'react';
import styled from 'styled-components'

const Preference = styled.div`
    box-shadow: -5px 0px 10px rgba(0,0,0,0.5);
    width: 30%;
    background:#001A34;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    z-index: 1;
`;
const Upper = styled.div`
padding: 0 2rem;
    p{
        font-size: 45px;
        text-align: left;
        @media only screen and (max-width:800px){
        font-size: 22px;
        }
    }
    div{
        @media only screen and (max-width:800px){
        width: 50%;
        float: left;
        }
    }
`;
const Lower = styled.div`
    position: relative;
    label{
        font-size: 45px;
        text-align: left;
        @media only screen and (max-width:800px){
            font-size: 22px;
        }
    }
    select{
        font-size: 30px;
        border-radius: 30px;
        margin-left: 1rem;
        text-align: center;
        @media only screen and (max-width:800px){
            font-size: 22px;
            background: none;
            color: white;
            border: 2px solid white;
        }
    }
`;

const Prefs = (props) => {

    const [level, setLevel] = useState("easy");
    const [ classToggle, setClassToggle ] = useState("prefs");
    

    function hidePrefs(){
        if(classToggle === "hidePrefs prefs"){
            setClassToggle("prefs");
        }else{
            setClassToggle("hidePrefs prefs");
        }
    }

  return (<>
    <Preference className={classToggle}>
    <Upper>
        <h1>ReactJS Memory</h1>
        <div>
            <p>Turns: {props.counter}</p>
        </div>
        <div>
            <p>Score: {props.score}</p>
        </div>
    </Upper>
    <Lower>
        <label for="level">Level:</label>
        <select id="level" onChange={(e) => props.clickFunction(e)} levelValue={props.levelValue}>
            <option value="1" onChange={() => setLevel("1")}>Easy</option>
            <option value="2" onChange={() => setLevel("2")}>Middle</option>
            <option value="3" onChange={() => setLevel("3")}>Hard</option>
        </select>
        <button className="restart" onClick={(e) => props.startFunction(e)}>Start</button>
        <button className="mobileToggle" onClick={(e) => hidePrefs()}></button>
    </Lower>
    </Preference>
    </>
  );
}

export default Prefs