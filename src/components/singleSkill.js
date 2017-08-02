import React from 'react';

export const SingleSkill = (props) => {
    
    
    return(
        <div className='skill-wrapper'>
            <div className='skill-name'>{props.name}</div>
            {/*<img className='skill-img' src={require(`../images/${props.img}`)} alt={props.name} />*/}
        </div>
    )
}
            // <img className='skill-img' src={require(props.img)} alt='Image of skill' />
// {require(props.img)}
export default SingleSkill;

            // <p className='skill-description'>{props.description}</p>