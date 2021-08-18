import React from "react"
import { useHistory } from "react-router"



export const HomePage = () => {
    
    const history = useHistory()
    const goToLoginPage = () => {
        history.push("/login")
    }

    const goToListTripsPage = () => {
        history.push("/trip/list")
    }






    
    return (
    <div>
        <buttonHome>
            <h1>LabeX</h1>
            <button onClick={goToLoginPage}>Área de admin</button>
            <button onClick={goToListTripsPage}>Viagens Disponíveis</button>

        </buttonHome>

         
    

    </div>
    )
}