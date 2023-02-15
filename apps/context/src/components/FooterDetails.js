import { useContext } from "react";
import UserDetailsContext from "../context/UserDetailsContext";

const FooterDetails = ({ user }) => {
    const { userDetails } = useContext(UserDetailsContext);

    return (
        <div> user: {userDetails.name}</div>
    );
}

export default FooterDetails;    