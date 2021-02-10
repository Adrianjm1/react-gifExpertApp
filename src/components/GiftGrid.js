import React, { Fragment } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GiftGrid = ({category}) => {
    

    const {data:images,loading} = useFetchGifs(category);

    return (
        <> 
            <h3 className="animate__animated animate__fadeIn animate__delay-1s">  {category}</h3>

            {loading && <p className="animate__animated animate__flash animate__delay-1s">Loading</p>}

        <div className="card-grid">


                {
                    images.map( img =>(
                            <GifGridItem
                            key = {img.id}
                            {...img}
                            /> 
                        ))
                }


        </div>
        </>
    )
}