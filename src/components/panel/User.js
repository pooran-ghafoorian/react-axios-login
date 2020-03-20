import React from 'react';
import pageadmin from './pageAdmin';

export default function User({user}){
    return (
        <div className="listuser">
            <table className='tb'>
                <td>
                    <tr>{ user.id }</tr>
                </td>
                <td>  
                    <tr>{ user.first_name }</tr>
                </td>
                <td>  
                    <tr>{ user.email }</tr>
                </td>
            </table>
        </div>
    )
}