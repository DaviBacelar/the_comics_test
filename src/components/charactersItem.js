import React, { useState } from 'react'
import Axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';

const Index = (props) => {
    const characters = useSelector(state => state.characters)
    const item = characters[props.location.search.split("=")[1]]
 
    // const creators = () => {
    //     let itens = []
    //     let creatorsList = item.creators.items
        
    //     if(creatorsList) {
    //         creatorsList.map((creator, key) => {
    //             itens.push(
    //                 <div>
    //                     <h6>{creator.name}</h6>
    //                     <p>{creator.role}</p>
    //                     <p><a href={creator.resourceURI}>{creator.resourceURI}</a></p>
    //                     <br/>
    //                 </div>
    //             )
    //         })
    //     }

    //     return itens
    // }

    // const charactersList = () => {
    //     let itens = []
    //     let charactersList = item.characters.items

    //     if(charactersList) {
    //         charactersList.map((character, key) => {
    //             itens.push(
    //                 <div>
    //                     <h6>{character.name}</h6>
    //                     <p><a href={character.resourceURI}>{character.resourceURI}</a></p>
                        
    //                 </div>
    //             )
    //         })
    //     }

    //     return itens
    // }

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

export default Index