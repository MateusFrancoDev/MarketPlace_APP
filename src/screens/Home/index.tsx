import React from "react";
import Header from "../../components/common/header";
import { Container } from "./styled";
import NavBar from "../../components/common/navbar";

const Home = () => {
  return (
    <Container>
     <Header />
     <NavBar />
    </Container>
  );
}

export default Home;