import React, {useEffect} from "react";
import {Navigate} from "react-router";
import {selectCurrentUser} from "./redux/user/user.selectors";
import {connect, useDispatch, useSelector} from "react-redux";
import './App.css';
import {Routes, Route} from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer"
import DirectoryComponent from "./directory/directory.component";
import CalzadoComponent from "./products-list/Calzado-list";
import RopaComponent from "./products-list/Ropa-list";
import ComestibleComponent from "./products-list/Comestible-list";
import ElectronicosComponent from "./products-list/Electronicos-list";
import MiscComponent from "./products-list/Misc-list";
import SignInSide from "./pages/signin/SignInSide";
import CartIconComponent from "./cart-icon/cart-icon.component";
import {startChecking} from "./helpers/auth";
import SignUp2 from "./pages/SignUp/SignUp2";

function App(props) {


    return (
            <div>
                <Header/>
                <Routes>
                    <Route
                      path="/signin"
                      element={
                          props.currentUser ? (
                              <Navigate to="/singin"
                                        replace />) :
                              (<SignInSide />)}/>
                    <Route exact path='/signup' element={<SignUp2/>}/>
                    <Route exact path='/' element={<DirectoryComponent/>}/>
                    <Route exact path='/calzado' element={<CalzadoComponent/>}/>
                    <Route exact path='/ropa' element={<RopaComponent/>}/>
                    <Route exact path='/comestibles' element={<ComestibleComponent/>}/>
                    <Route exact path='/electronicos' element={<ElectronicosComponent/>}/>
                    <Route exact path='/misc' element={<MiscComponent/>}/>
                    <Route exact path='/cart' element={<CartIconComponent/>}/>
                </Routes>
                <Footer/>
            </div>
    )
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

export default connect(mapStateToProps)(App);
