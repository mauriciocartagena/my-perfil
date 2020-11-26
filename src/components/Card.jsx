import React from 'react'

export const Card = (  { image }  ) => {
    return (
        <div className="col-3">
            <img  className="card-img-top" src={ image } alt="flutter"/>
        </div>

    )
}
