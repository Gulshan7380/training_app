import { useState, useEffect } from 'react';

const App = () => {
    const [employee, setEmployee] = useState({});
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchEmployee();
        fetchLogin();
    }, []);

    const fetchEmployee = async () => {
        const result = await fetch('http://localhost:5000/employee')
        .then((result) => result.json())
        .then((response) => {
            return response;
        });

        if (result) {
            setEmployee(result);
        }
    };

    const fetchLogin = async () => {
        const result = await fetch('http://localhost:5000/login', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({ userName: 'Test', password: 'Test' })
        })
        .then((response) => response.text())
        .then((result) => result);

        if (result) {
            setMessage(result);
        }
    }

    return (
        <div>
            <div style={{ textAlign: 'center' }}>API Testing...</div>
            <div style={{ textAlign: 'center' }}>
                <span> Employee Name: <strong> {employee?.name } </strong></span>
                <span> Employee ID: <strong> {employee?.id } </strong></span>
                <span> Employee Age: <strong> {employee?.age } </strong></span>
                <span> Employee Salary: <strong> {employee?.salary } </strong></span>
                <span> { message }</span>
            </div>
        </div>
    );
};

export default App;
