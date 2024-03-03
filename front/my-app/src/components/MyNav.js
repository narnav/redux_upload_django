import React from 'react'
import { Link } from "react-router-dom";
import { selectUsername,selectAdmin,selectLogged,logout } from '../features/counter/loginSlice'
import { useSelector, useDispatch } from 'react-redux';
const MyNav = () => {
    const admin = useSelector(selectAdmin);
    const logged = useSelector(selectLogged);
    const dispatch = useDispatch();
    return (
        <div>
            <Link to="/">Home</Link>{" "}
            {!logged ? <Link to="/Login">Login</Link> :<button onClick={() => dispatch(logout())}>Logout</button>}
            <Link to="/register">register</Link>{" "}
            <Link to="/About">About</Link>{" "}
            
           {admin && <div> Admin: <Link to="/Admin">Admin</Link>{" "}</div>}
        </div>
    )
}

export default MyNav