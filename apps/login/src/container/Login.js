import { useState } from "react";
import userLogin from "../service/login";
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";

const Login = () => {
    const [ userName, setUserName ] = useState('');
    const [ password, setPassword ] = useState('');
    const navigate = useNavigate();

    const submitHandler = async (event) => {
        event.preventDefault();
        const requestData = {
            userName,
            password: password
        };
        const result = await userLogin(requestData);
        if (!result.id) {
            alert('user not found!');
        } else {
            localStorage.setItem('user', JSON.stringify(result));
            navigate('/home');
        }
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                 
                <TextField
                    variant="standard"
                    label="User Name: "
                    type="text"
                    value={userName} onChange={(e) => {
                        setUserName(e.target.value) 
                    }}    
                />
                <TextField label="Password: " variant="standard" type="password" value={password} onChange={(e) => setPassword(e.target.value) } />
                <Button type="submit" style={{ marginTop: '10px', marginLeft: '10px' }} variant="contained">Login</Button>
                <Button type="button" style={{ marginTop: '10px', marginLeft: '10px' }} variant="contained">Reset</Button>
            </form>
        </div>
    );
};

export default Login;
