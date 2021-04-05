import React from 'react'
import './card.styles.css'
export const Card = props =>{
    var url = `https://robohash.org/${props.monster.id}?set=set2&size=180x180`
    return  <div className='card-container'>
                <img src={url} alt="not found"></img>
                <h2>{props.monster.name}</h2>
                <p>{props.monster.email}</p>
            </div>;
};