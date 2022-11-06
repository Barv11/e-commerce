import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllUsers } from "../../redux/actions";
import s from "../../page/Admin/AdminPage.module.css";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";

export default function AllUsers() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  const [input, setInput] = useState({
    role: "",
  });

  const allUsers = useSelector((state) => state.allUsers);
  console.log(allUsers);

  async function handleButtonBanned(userId) {
    await axios.put(`https://gametech.up.railway.app/user/create/edit`, {
      show: false,
      id: userId,
    });
    dispatch(getAllUsers());
  }

  async function handleButtonUnbanned(userId) {
    await axios.put(`https://gametech.up.railway.app/user/create/edit`, {
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
    await axios.put(`https://gametech.up.railway.app/user/create/edit`, {
      id: id,
      role: input.role,
    });
  }

  return (
    <div>
      <div className={s.UserListTitleIcon}>
        <h1 className={s.userListTxt}>User List</h1>
        <div className={s.usersListIcon}>
          <PeopleAltRoundedIcon />
        </div>
      </div>
      <Table striped bordered hover variant="dark">
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
          {allUsers &&
            allUsers?.map((u) => {
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
                      Confirmar
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}
