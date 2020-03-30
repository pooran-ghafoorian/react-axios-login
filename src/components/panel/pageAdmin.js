import React, { Component } from 'react';

import './pageAdmin.css';

class pageadmin extends Component {
    render() {
        return (
            <div className="pageadmin">
                <div className="right">
                    <nav>
                        <ul>
                            <li><a href='./users'>لیست کاربران</a> </li>
                            <li>تصاویر</li>
                            <li>لیست کاربران</li>
                            <li>تصاویر</li>
                        </ul>
                    </nav>
                </div>
                <div className="left">
                    <div className='leftpanelhead'>به پنل ادمین خوش آمدید</div>
                    <p>نوروز 1399 مبارک</p>


                </div>


            </div>

        );
    }
}
export default pageadmin;