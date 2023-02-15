import { useState } from 'react';
import UserDetailsContext from '../context/UserDetailsContext';

const UserDetailsContextProvider = ({ children }) => 
{
    const [userDetails, setUserDetails ] = useState({});
    return (
        <UserDetailsContext.Provider value={{userDetails, setUserDetails}}>
            {children}
        </UserDetailsContext.Provider>
    )
};

export default UserDetailsContextProvider;