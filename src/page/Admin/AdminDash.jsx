import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './AdminDash.css';
import { Link } from 'react-router-dom';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import EditIcon from '@mui/icons-material/Edit';

import { useEffect } from 'react';

export default function AdminDash() {
    useEffect(() =>{
        document.title = `Gamer Tech | Admin`
      }, []); 
    return(
        <div>
            <Navbar />
            <div className='containerDash'>
                <h1 className='dashTitle'>Dashboard <AutoAwesomeIcon color="secondary" sx={{ fontSize: 37 }}/></h1>
                <h2 className='dashSubTitle'>¡Bienvenido a tu dashboard! <EditIcon color="secondary"/></h2>
                <div>
                    <Link style={{ textDecoration: 'none' }} to={'/users'}>
                        <div className='categoriasContainer'>
                        <h2 className='categoriasTxt'>Lista de Usuarios <i class="uil uil-users-alt"></i></h2>
                        </div>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to={'/create'}>
                        <div className='categoriasContainer'>
                        <h2 className='categoriasTxt'>Crear Producto <i class="uil uil-file-plus-alt"></i></h2>
                        </div>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to={'/inventory'}>
                        <div className='categoriasContainer'>
                        <h2 className='categoriasTxt'>Inventario <i class="uil uil-clipboard-notes"></i></h2>
                        </div>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to={'/orden'}>
                        <div className='categoriasContainer'>
                        <h2 className='categoriasTxt'>Ordenes de Compra <i class="uil uil-shopping-cart"></i></h2>
                        </div>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to={'/trash'}>
                        <div className='categoriasContainer'>
                        <h2 className='categoriasTxt'>Ver Papelera <i class="uil uil-trash-alt"></i></h2>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}