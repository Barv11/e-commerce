import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllUsers, getUser } from "../../redux/actions";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import Navbar from "../Navbar/Navbar";
import Modal from "../Modals/Modal";
import { useModal } from "../Modals/useModal";
import "./AllUsers.css";

export default function AllUsers() {
  let dispatch = useDispatch();

  const [input, setInput] = useState({
    role: "",
  });

  const allUsers = useSelector((state) => state.allUsers);
  const [search, setSearch] = useState("");
  const [isOpenModal, openModal, closeModal] = useModal(false);


  const local = "https://gametech.up.railway.app";
  //const local = "http://localhost:3001";

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user") || "[]")
  );


  const deploy = "https://gametech.up.railway.app";
  // const url = "http://localhost:3001";


  async function handleButtonBanned(userId) {
    const config = {
      headers: {
        authorization: `Bearer ${user.token}`,
      },
    };

    await axios.put(`${deploy}/user/create/edit`, {
      show: false,
      id: userId,
    }, config);
    dispatch(getAllUsers());
  }

  async function handleButtonUnbanned(userId) {
    const config = {
      headers: {
        authorization: `Bearer ${user.token}`,
      },
    };
    await axios.put(`${deploy}/user/create/edit`, {
      show: true,
      id: userId,
    }, config);
    dispatch(getAllUsers());
  }

  const setRole = async (e) => {
    setInput({ ...input, role: e.target.value });
  };

  async function handleRoleChange(id) {
    const config = {
      headers: {
        authorization: `Bearer ${user.token}`,
      },
    };
    await axios.put(`${deploy}/user/create/edit`, {
      id: id,
      role: input.role,
    }, config);

    if (user.logged) {
      dispatch(getUser(user.token));
    }
    dispatch(getAllUsers());
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
    <div className="alluserscontainer">
      <Navbar />
      <div className="UserListTitleIcon">
        <h1 className="userListTxt">Lista de Usuarios</h1>
        <div className="usersListIcon">
          <PeopleAltRoundedIcon fontSize={"inherit"} />
        </div>
      </div>
      <div className="searchContainer">
        <span className="buscarTxt">Buscar por Username: </span>
        <input
          value={search}
          onChange={handleSearch}
          type="text"
          placeholder="Inserte un username..."
          className="input"
        />
      </div>
      <Table responsive striped bordered hover variant="dark">
        <thead>
          <tr>
            {/* <th>#</th> */}
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Rol Actual</th>
            <th>Cambiar Rol</th>
            <th>Estado</th>
            <th>Cambiar Estado</th>
            <th>Enviar</th>
          </tr>
        </thead>
        <tbody>
          {result.length > 0 ? (
            result?.map((u) => {
              return (
                <tr key={u.id}>
                  {/* <td>{u.id}</td> */}
                  <td>{u.firstName}</td>
                  <td>{u.lastName}</td>
                  <td>{u.userName}</td>
                  <td>{u.email}</td>
                  {/* <td>{u.role}</td> */}
                  <td>{u.role === 'user' ? 'Usuario' : u.role === 'admin' ? 'Administrador' : u.role === 'superAdmin' ? 'Super admin' : null}</td>
                  <td>
                    <label>
                      <select
                        onChange={(e) => setRole(e)}
                        defaultValue="default"
                      >
                        <option value="default">Elija</option>
                        <option name="role" value="admin">
                          Administrador
                        </option>
                        <option name="role" value="superAdmin">
                        Super admin 
                        </option>
                        <option name="role" value="user">
                          Usuario
                        </option>
                      </select>
                    </label>
                  </td>
                  <td>{u.show ? 'Activo' : 'Baneado'}</td>
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
                      <h1 className="modalTitle">Rol asinado con éxito</h1>
                      <p className="modalSubtitle">
                        Has asignado el rol {u.role} exitosamente.
                      </p>
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
