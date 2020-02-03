import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import Navbar from './navbar'

const Comics = () => {
    const comics = useSelector(state => state.comics)

    const grid = () => {
        let itens = []
    
        if(comics) {
            comics.map((item, index) => {
                itens.push(                    
                    <div className="grid-item">
                        <Link to={`/comics/item?item=${index}`}>                           
                            <img src={`${item.thumbnail.path}/standard_xlarge.jpg`} />
                            <div className="item-title">{item.title}</div>
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

export default Comics