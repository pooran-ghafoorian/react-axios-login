import React from 'react';

export default function User({user}){
    return (
        <div>
                <h2>{ user.id }</h2>
                <p>{ user.first_name }</p>
        </div>
    )
}