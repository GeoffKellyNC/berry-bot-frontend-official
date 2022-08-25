import React, { useEffect } from "react";
import "./css/App.css";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./store/authState/authState.creators";

import styled from "styled-components";

// Imported Components
import Home from "./views/Home";
import Landing from "./views/Landing";
import ProtectedRoute from "./components/ProtectedRoute";
import TwitchRedirect from "./components/TwitchRedirect";
import Music from "./views/Music";

function App(props) {
  const { isLoggedIn, checkLoggedIn, userData } = props;


  useEffect(() => {
    checkLoggedIn();
  }, [isLoggedIn, checkLoggedIn]);

  return (
    <AppStyled>
      <Routes>
        <Route path="/" element={<Landing isLoggedIn={isLoggedIn} />} />
        <Route path = "/music" element={<Music isLoggedIn={isLoggedIn} userData = { userData } />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Home />} />
        </Route>
        <Route path="/redirect" element={<TwitchRedirect />} />
      </Routes>
    </AppStyled>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
    userData: state.userData
  };
};

export default connect(mapStateToProps, actions)(App);

const AppStyled = styled.div`
  

`;
