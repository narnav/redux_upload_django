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
            <Link className='btn btn-primary' to="/">Home</Link>{" "}
            <Link className='btn btn-primary' to="/Products">Products</Link>{" "}
            {!logged ? <><Link className='btn btn-primary' to="/Login">Login</Link>{" "}</>:<button className='btn btn-danger' onClick={() => dispatch(logout())}>Logout</button>}
            <Link className='btn btn-primary' to="/register">register</Link>{" "}
            <Link className='btn btn-primary' to="/About">About</Link>{" "}
            
           {admin && <div> Admin: <Link className='btn btn-success' to="/Admin">Admin</Link>{" "}</div>}
        </div>
    )
}

export default MyNav