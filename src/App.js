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

function App(props) {
  const { isLoggedIn, checkLoggedIn } = props;


  useEffect(() => {
    checkLoggedIn();
  }, [isLoggedIn, checkLoggedIn]);

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
