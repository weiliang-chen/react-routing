import { Outlet } from "react-router-dom";
// import { useNavigation } from "react-router-dom";

import MainNavigation from '../components/MainNavigation'


function RootLayOut(){
    // const navigation = useNavigation();
    return <>
        <MainNavigation />
        <main>
            {/* {navigation.state == 'loaded' && <p>Loading ...</p>} */}
            <Outlet />
        </main>
    </>
}

export default RootLayOut;