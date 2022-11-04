import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import AdminSideBar from './AdminSideBar';
import AdminTopBar from './AdminTopBar';
import s from './AdminPage.module.css'

export default function AdminPage(){
    return(
        <div>
            <Navbar />
            <div className={s.sideTopContainer}>
                <div className={s.adminSB}>
                    <AdminSideBar />
                </div>
                <div className={s.adminTB}>
                    <AdminTopBar />
                </div>
            </div>
        </div>
    )
}