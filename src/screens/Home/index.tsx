import React from "react";
import Header from "../../components/common/header";
import { Container } from "./styled";
import NavBar from "../../components/common/navbar";
import ProdutList from "../../components/common/productlist";

const Home = () => {
  return (
    <Container>
     <Header />
     <ProdutList />
     <NavBar />
    </Container>
  );
}

export default Home;