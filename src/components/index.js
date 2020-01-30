import React, { useState } from 'react'
import Axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'

const Index = () => {
    const data = useSelector(state => state.data)

    const grid = () => {
        let itens = []
    
        if(data) {
            data.map((item, index) => {
                itens.push(                    
                    <div className="grid-item">
                        <Link to={`/item?item=${index}`}>                           
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
        <div className="grid">
            {grid()}
        </div>
    )
}

export default Index