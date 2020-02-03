import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import Navbar from './navbar'

const Index = () => {
    const events = useSelector(state => state.events)

    const grid = () => {
        let itens = []
    
        if(events) {
            events.map((item, index) => {
                itens.push(                    
                    <div className="grid-item">
                        <Link to={`/events/item?item=${index}`}>                           
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