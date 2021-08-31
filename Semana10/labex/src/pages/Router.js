import React from "react"
import { BrowserRouter, Switch, Router } from "react-router-dom"
import DocumentTitle from "react-document-title"
import styled from "styled-components"


import { AdminHomePage } from "./pages/AdminHomePage"
import {AplicationFormPage} from "./pages/AplicationFormPage"
import { HomePage } from "./pages/HomePage"
import { ListTripPage } from "./pages/ListTripsPage"
import { TripDetailsPage } from "./pages/TripDetailsPage"
import { CreateTripPage } from "./pages/CreateTripPage"
import { LoginPage } from "./pages/LoginPage"





const Router = () => {
  return(

    <BrowserRouter>
    <Switch>

      <Route exact path={"/"}>
        <DocumentTitle title="LabeX - Home">
        <HomePage />
        </DocumentTitle>
        </Route>
       

      <Route exact path={"/trip/list"}>
        <DocumentTitle title="LabeX - Lista de Viagens">
        <ListTripPage />
        </DocumentTitle>
        </Route>

      <Route exact path={"/trips/aplication"}>
        <DocumentTitle title="LabeX - Formulário de Inscrição">
        <AplicationFormPage />
        </DocumentTitle>
      </Route>

      <Route exact path={"/login"}>
        <DocumentTitle title="LabeX - Login Administrador">
        <LoginPage />
        </DocumentTitle>
        </Route>
      
      <Route exact path={"/admin/trips/list"}>
        <DocumentTitle title="LabeX - logado ">
        <AdminHomePage />
        </DocumentTitle>
        </Route>
      
      <Route exact path={"/admin/trips/create"}>
        <DocumentTitle title="LabeX - Detalhes da Viagem">
        <TripDetailsPage />
        </DocumentTitle>
        </Route>

      <Route exact path={"/admin/trips/:id"}>
        <DocumentTitle title="LabeX - Criar Viagem">
        <CreateTripPage />
        </DocumentTitle>
        </Route>
      
    </Switch>
    </BrowserRouter>
    
    
  )

}


export default Router;