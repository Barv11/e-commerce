import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllUsers } from "../../redux/actions";
import s from "../../page/Admin/AdminPage.module.css";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import Navbar from '../Navbar/Navbar';
import { useModal } from '../Modals/useModal';
import Modal from '../Modals/Modal';


export default function AllUsers() {
  let dispatch = useDispatch();
 
  const [input, setInput] = useState({
    role: "",
  });

  const allUsers = useSelector((state) => state.allUsers);
  console.log(allUsers);
  const [search, setSearch] = useState("");

  const [isOpenModal, openModal, closeModal] = useModal(false);
  

  const deploy = "https://gametech.up.railway.app";
  const local = "http://localhost:3001";

  async function handleButtonBanned(userId) {
    await axios.put(`${local}/user/create/edit`, {
      show: false,
      id: userId,
    });
    dispatch(getAllUsers());
  }

  async function handleButtonUnbanned(userId) {
    await axios.put(`${local}/user/create/edit`, {
      show: true,
      id: userId,
    });
    dispatch(getAllUsers());
  }

  const setRole = async (e) => {
    setInput({ ...input, role: e.target.value });
  };
  console.log(input.role);

  async function handleRoleChange(id) {
    await axios.put(`http://localhost:3001/user/create/edit`, {
      id: id,
      role: input.role,
    });
    openModal();
  }

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let result = !search
    ? allUsers
    : allUsers.filter((el) =>
        el.userName.toLowerCase().includes(search.toLocaleLowerCase())
      );


  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  useEffect(() => {
    document.title = `Gamer Tech | Usuarios`;
  }, []);
  return (
    <div className={s.alluserscontainer}>
      <Navbar />
      <div className={s.UserListTitleIcon}>
        <h1 className={s.userListTxt}>Lista de Usuarios</h1>
        <div className={s.usersListIcon}>
          <PeopleAltRoundedIcon fontSize={"inherit"}/>
        </div>
      </div>
      <div className={s.searchContainer}>
        <span className={s.buscarTxt}>Buscar por Username: </span>
        <input
          value={search}
          onChange={handleSearch}
          type="text"
          placeholder="Inserte un username..."
          className={s.input}
        />
      </div>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Rol</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {result.length > 0 ? (
            result?.map((u) => {
              return (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.firstName}</td>
                  <td>{u.lastName}</td>
                  <td>{u.userName}</td>
                  <td>{u.email}</td>
                  <td>
                    <label>
                      <select
                        onChange={(e) => setRole(e)}
                        defaultValue="default"
                      >
                        <option value="default">{u.role}</option>
                        <option name="role" value="admin">
                          Admin
                        </option>
                        <option name="role" value="superAdmin">
                          Super Admin
                        </option>
                        <option name="role" value="user">
                          User
                        </option>
                      </select>
                    </label>
                  </td>
                  {u.show ? (
                    <td>
                      <button onClick={() => handleButtonBanned(u.id)}>
                        Ban
                      </button>
                    </td>
                  ) : (
                    <td>
                      <button onClick={() => handleButtonUnbanned(u.id)}>
                        Unban
                      </button>
                    </td>
                  )}
                  <td>
                    <button onClick={() => handleRoleChange(u.id)}>
                      <CheckRoundedIcon />
                    </button>
                      <Modal isOpen={isOpenModal} closeModal={closeModal}>
                        <h1 className={s.modalTitle}>Rol asignado con éxito</h1>
                        <p className={s.modalSubtitle}>Has signado el rol de {u.role} correctamente.</p>
                      </Modal>
                  </td>
                </tr>
              );
            })
          ) : (
            <div></div>
          )}
        </tbody>
      </Table>
    </div>
  );
}
