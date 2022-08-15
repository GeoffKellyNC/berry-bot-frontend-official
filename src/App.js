/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "./css/App.css";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./store/authState/authState.creators";

import styled from "styled-components";

// Imported Components
import ConfigureBot from "./views/ConfigureBot";
import Home from "./views/Home";
import Landing from "./views/Landing";
import Nav from "./components/nav/Nav";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./views/Register";
import TwitchRedirect from "./components/TwitchRedirect";

function App(props) {
  const { isLoggedIn, checkLoggedIn } = props;

  console.log("App isLoggedIn", isLoggedIn); //!REMOVE

  useEffect(() => {
    checkLoggedIn();
  }, [isLoggedIn]);

  return (
    <AppStyled>
      <Routes>
        <Route path="/" element={<Landing isLoggedIn={isLoggedIn} />} />
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
  };
};

export default connect(mapStateToProps, actions)(App);

const AppStyled = styled.div`

`;
