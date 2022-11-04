import { useState } from "react";
import { getAllUsers } from "../../redux/actions";

export default function SearchUsers(){
    const [user, setUser] = useState([]);

    return(
        <div>
        
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    setUser("");
                    props.getAllUsers(user);
                }}>
                <input
                placeholder="Busca un usuario"
                type="search"
                value={user}
                onChange={e => setUser(e.target.value)}
                />
                <button type="submit">
                <i>search</i>
                </button>
                </form>
            </div>

            <div>
                {props.allUsers ?  props.allUsers.map((UsuarioEncontrado, id) => {
                return(
                    <div>
                        <h3>{UsuarioEncontrado.firstName} {UsuarioEncontrado.lastName}</h3>
                        <h3>{UsuarioEncontrado.userName}</h3>
                        <h3>{UsuarioEncontrado.email}</h3>
                        <h3>{UsuarioEncontrado.rol}</h3>
                        <button onClick={e => {
                        e.preventDefault(e)
                        props.Usertoadmin(UsuarioEncontrado.id)
                        return alert({
                            title: UsuarioEncontrado.firstName + UsuarioEncontrado.lastName,
                            text: "Ahora es administrador",
                          })
                        }}> Asignar Admin
                        </button>
                    </div>
                )
            }): <div></div>
        }
            </div>
    
        </div>
    )
}

// function mapStateToProps(state) {
//     return {
//       users: state.allUsers
//     }
//   }
//   function mapDispatchToProps(dispatch) {
//     return {
//       getAllUser: title => dispatch(getAllUsers(title)),
//       Usertoadmin: title => dispatch(Usertoadmin(title))
//     };
//   }
  
//   export default connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(SearchUsers)