import React, { useState } from 'react'
import Axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';

const CharactersItem = (props) => {
    const characters = useSelector(state => state.characters)
    const item = characters[props.location.search.split("=")[1]]

    return (
        <div className="item-container">
            {item && <>
                <div>
                    <img src={`${item.thumbnail.path}/portrait_uncanny.jpg`} />
                </div>
                <br/>               
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <p><a href={item.urls[0].url}>{item.urls[0].url}</a></p>
            </>}
        </div>
    )
}

export default CharactersItem