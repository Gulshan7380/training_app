import { useContext } from 'react';
import { Header, Footer, ContentBody} from './container/index';
import UserDetailsContext from './context/UserDetailsContext';

const App = () => {
    const data = {
        name: 'Ram'
    };

    const { userDetails, setUserDetails } = useContext(UserDetailsContext);

    setUserDetails(data);

    return (
        <>
            <Header></Header>
            <ContentBody></ContentBody>
            <Footer></Footer>
        </>
    )
};

export default App;