import {Outlet} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

export default function DefaultLayout(){
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}