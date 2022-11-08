import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import AdminSideBar from './AdminSideBar';
import AdminTopBar from './AdminTopBar';
import s from './AdminPage.module.css'
import { useEffect } from 'react';

export default function AdminPage(){
    useEffect(() =>{
        document.title = `Gamer Tech | Admin`
      }, []); 
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