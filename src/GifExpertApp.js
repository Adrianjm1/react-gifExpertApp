import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GiftGrid } from './components/GiftGrid'

export const GifExpertApp = () => {

    
    const [categories, setCategories] = useState(['One punch'])

    return (
        <>
            <div className="title">
                <h2> GifExpertApp</h2>
                <h4>Obten los Gif de todo tipo aqui</h4>
             </div> 

            <AddCategory setCategories= { setCategories}/>
            <hr/>

        
            <ul>
                {
                    categories.map( category =>(
                        <GiftGrid
                        key = {category}
                        category = {category} />
                    ))
                }
            </ul>
        </>
    )
}
