import React from 'react'
import { Link } from 'react-router-dom'
import s from './AdminPage.module.css'
import adminProfilePhoto from '../../assets/admin-profile-img.png'

export default function AdminSideBar(){
    return(
        <div className={s.adminsbContainer}>
            <img className={s.adminImg} src={adminProfilePhoto} />
            <h2 className={s.adminName}>Admin</h2>
            <div className={s.categoriesContainer}>
                <Link style={{ textDecoration: 'none' }} to={'/users'}>
                    <h2 className={s.catTxt}>Lista de Usuarios</h2>
                </Link>
                <Link style={{ textDecoration: 'none' }} to={'/create'}>
                    <h2 className={s.catTxt}>Crear Producto</h2>
                </Link>
                <Link style={{ textDecoration: 'none' }} to={'/edit'}>
                    <h2 className={s.catTxt}>Ver Productos</h2>
                </Link>
                <Link style={{ textDecoration: 'none' }} to={'/orden'}>
                    <h2 className={s.catTxt}>Ordenes</h2>
                </Link>
                <Link style={{ textDecoration: 'none' }} to={'/trash'}>
                    <h2 className={s.catTxt}>Ver Papelera</h2>
                </Link>
            </div>
        </div>
    )
}