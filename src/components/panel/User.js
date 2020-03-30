import React from 'react';
import pageadmin from './pageAdmin';

export default function User({user}){
    return (
        <div className="listuser">
            <table className='tb'>
                <td>
                    <tr>{ user.id }<label>:کدملی</label></tr>
                </td>
                <td>  
                    <tr>{ user.first_name }<label>:نام کاربری</label></tr>
                </td>
                <td>  
                    <tr>{ user.email }<label>:ایمیل</label></tr>
                </td>
            </table>
        </div>
    )
}