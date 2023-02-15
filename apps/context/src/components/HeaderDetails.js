import { useContext } from "react";
import UserDetailsContext from "../context/UserDetailsContext";

const HeaderDetails = () => {
    const { userDetails } = useContext(UserDetailsContext);

    return (
        <div> user: {userDetails.name} </div>
    );
}

export default HeaderDetails;