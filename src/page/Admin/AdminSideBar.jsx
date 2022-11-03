import React from 'react'
import { Link } from 'react-router-dom'
import s from './AdminPage.module.css'
import adminProfilePhoto from '../../assets/admin-profile-img.png'

export default function AdminSideBar(){
    return(
        <div className={s.adminsbContainer}>
            <img className={s.adminImg} src={adminProfilePhoto} />
            <h2 className={s.adminName}>Admin 1</h2>
            <div className={s.catTxt}>
                <Link style={{ textDecoration: 'none' }}>
                    <h2 className={s.catTxt}>Lista de Usuarios</h2>
                </Link>
                <Link style={{ textDecoration: 'none' }}>
                    <h2 className={s.catTxt}>Eliminar Usuarios</h2>
                </Link> 
                <Link style={{ textDecoration: 'none' }}>
                    <h2 className={s.catTxt}>Administradores</h2>
                </Link>
                <Link style={{ textDecoration: 'none' }} to={'/create'}>
                    <h2 className={s.catTxt}>Crear Producto</h2>
                </Link>
                <Link style={{ textDecoration: 'none' }} to={'/orden'}>
                    <h2 className={s.catTxt}>Ordenes</h2>
                </Link>
            </div>
        </div>
    )
}