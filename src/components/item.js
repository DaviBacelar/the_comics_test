import React, { useState } from 'react'
import Axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';

const Index = (props) => {
    const data = useSelector(state => state.data)
    const item = data[props.location.search.split("=")[1]]
    console.log(item)

    const creators = () => {
        let itens = []
        let creatorsList = item.creators.items
        console.log(creatorsList)
        
        if(creatorsList) {
            creatorsList.map((creator, key) => {
                itens.push(
                    <div>
                        <h6>{creator.name}</h6>
                        <p>{creator.role}</p>
                        <p><a href={creator.resourceURI}>{creator.resourceURI}</a></p>
                    </div>
                )
            })
        }

        return itens
    }

    const characters = () => {
        let itens = []
        let charactersList = item.characters.items
        console.log(charactersList)

        if(charactersList) {
            charactersList.map((character, key) => {
                itens.push(
                    <div>
                        <h6>{character.name}</h6>
                        <p><a href={character.resourceURI}>{character.resourceURI}</a></p>
                    </div>
                )
            })
        }

        return itens
    }

    return (
        <div className="item-container">
            {item && <>
                <div>
                    <img src={`${item.thumbnail.path}/landscape_incredible.jpg`} />
                </div>                
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <p><a href={item.urls[0].url}>{item.urls[0].url}</a></p>
                <div>
                    <h5>Criadores</h5>
                    {creators()}
                </div>
                {characters().length > 0 &&
                    <div>
                        <h5>Character</h5>
                        {characters()}
                    </div>
                }
            </>}
        </div>
    )
}

export default Index