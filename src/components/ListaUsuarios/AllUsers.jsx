import React, { useEffect, useId } from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAllUsers } from '../../redux/actions';

export default function AllUsers(){
    let dispatch = useDispatch
    useEffect (() => {
        dispatch(getAllUsers())
    }, [dispatch]) 

    const allUsers = useSelector((state) => state.allUsers);
    console.log(allUsers)

    function handleButtonBanned(userId){
        //active o desactive propiedad show (bannear = show en false)
    }

    function handleButtonUnbanned(userId){
        //active o desactive propiedad show (desbannear = show en true)
    }
    
    return(
        <div>
            <h1>User List</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th> 
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {allUsers && allUsers.map((u) => {
                        return (
                        <tr>
                        <td>{u.id}</td>
                        <td>{u.firstName}</td>
                        <td>{u.lastName}</td>
                        <td>{u.userName}</td>
                        <td>{u.email}</td>
                        {u.show ? 
                        <td><button>Borrar</button></td> :
                        <td><button>Restaurar</button></td> 
                        }
                        </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}