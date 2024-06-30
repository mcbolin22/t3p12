import { Outlet } from "react-router-dom";
import NavBar from "../components/navBar";

export default function BaseLayout() {
    return <>
        {/* <NavBar /> */}
        <Outlet />
    </>
}