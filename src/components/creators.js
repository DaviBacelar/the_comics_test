import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import Navbar from './navbar'

const Index = () => {
    const creators = useSelector(state => state.creators)

    const grid = () => {
        let itens = []
    
        if(creators) {
            creators.map((item, index) => {
                itens.push(                    
                    <div className="grid-item">
                        <Link to={`/creators/item?item=${index}`}>                           
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

export default Index