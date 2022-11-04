import axios from 'axios';
import React, { useEffect, useId } from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAllUsers } from '../../redux/actions';

export default function AllUsers(){
    let dispatch = useDispatch()
    useEffect (() => {
        dispatch(getAllUsers())
    }, [dispatch]) 

    const allUsers = useSelector((state) => state.allUsers);
    console.log(allUsers)

    async function handleButtonBanned(userId){ 
        await axios.put(`http://localhost:3001/user/create/${userId}`, {show: false})
        dispatch(getAllUsers())
    }

    async function handleButtonUnbanned(userId){
        //active o desactive propiedad show (desbannear = show en true)
        await axios.put(`http://localhost:3001/user/create/${userId}`, {show: true})
        dispatch(getAllUsers())
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
                    {allUsers && allUsers?.map((u) => {
                        return (
                        <tr>
                        <td>{u.id}</td>
                        <td>{u.firstName}</td>
                        <td>{u.lastName}</td>
                        <td>{u.userName}</td>
                        <td>{u.email}</td>
                        <td>{u.role}</td> 
                        {u.show ? 
                        <td><button onClick={() => handleButtonBanned(u.id)}>Ban</button></td> :
                        <td><button onClick={() => handleButtonUnbanned(u.id)}>Unban</button></td> 
                        }
                        </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}