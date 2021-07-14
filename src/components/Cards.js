import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
`;
const Cards = (props) => {

    const click = () => {
      props.clickFunction(props.value, props.foo);
    }

  return (
    <Card data-key={props.foo} src={props.src} data-value={props.value} className={props.className} onClick={() =>  click() }>
       <div className="side-a"></div>
       <div className="side-b" data-img={props.img}>
        <img src={props.src} alt="Card Back"/>
       </div>
    </Card>
  );
}

export default Cards