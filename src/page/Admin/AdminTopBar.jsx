import React from 'react'
import AllUsers from '../../components/ListaUsuarios/AllUsers'
import s from './AdminPage.module.css'

export default function AdminTopBar(){
    return( 
        <div className={s.topBarContainer}>
            <h1 className={s.dashboardTitle}>Dashboard</h1>
            <h2 className={s.dashboardSubTitle}>Bienvenido a tu dashboard</h2>
            <AllUsers />
        </div>
    )
}