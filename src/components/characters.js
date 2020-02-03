import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import Navbar from './navbar'

const Characters = () => {
    const characters = useSelector(state => state.characters)

    const grid = () => {
        let itens = []
    
        if(characters) {
            characters.map((item, index) => {
                itens.push(                    
                    <div className="grid-item">
                        <Link to={`/characters/item?item=${index}`}>                           
                            <img src={`${item.thumbnail.path}/standard_xlarge.jpg`} />
                            <div className="item-title">{item.name}</div>
                        </Link>
                    </div>                    
                )
            })
        }

        return itens
    }

    return (
        <>
            <Navbar />
            <div className="grid">
                {grid()}
            </div>
        </>
    )
}

export default Characters