import React from "react"
import { AdminHomePage } from "./pages/AdminHomePage"
import { AplicationForm } from "./pages/AplicationFormPage"
import { HomePage } from "./pages/HomePage"
import { ListTripPage } from "./pages/ListTripsPage"
import { TripDetailsPage } from "./pages/TripDetailsPage"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { CreateTripPage } from "./pages/CreateTripPage"

import styled from "styled-components"



const App = () => {
  return(

    <BrowserRouter>
    <switch>

      <Route exact path={"/"}>
      <HomePage />
      </Route>
       
      <Route exact path={"trips/aplication"}>
      <AplicationForm />
      </Route>

      <Route exact path={"/admin/trips/list"}>
      <AdminHomePage />
      </Route>

      <Route exact path={"admin/trips/create"}>
      <CreateTripPage />
      </Route>
      
      <Route exact path={"trips/list"}>
      <ListTripPage />
      </Route>
      
      <Route exact path={"admin/trips/:id"}>
      <TripDetailsPage />
      </Route>
      
    </switch>
    </BrowserRouter>
    
    
  )

}


export default App