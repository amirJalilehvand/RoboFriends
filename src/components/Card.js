import React from 'react';
//import { robots } from './robots';

const Card =({id , name , email}) => {
    return(
        <div className="bg-light-green ma2 pa2 br2 grow dib bw2 shadow-5 tc">
            <img alt="" src = {`https://robohash.org/${id}?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;