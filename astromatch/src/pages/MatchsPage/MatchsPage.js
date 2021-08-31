import axios from "axios";
import React, {useState, useEffect} from "react"
import {ProfileListItem} from "../../components/ProfileListItem/ProfileListItem"
import { MatchsContainer, MatchsList  } from "./styled";



   export const MatchsPage = () => {
    const [matchsList, setMatchsList] = useState ([])

    useEffect(() => {
        getMatchsList()
    }, [])

    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/evai-santos/matches"

    const getMatchsList = () => {
        axios.get(url)
        .then((res) => {
            setMatchsList(res.data.matches)
        })
        .catch((err) => {
            console.log(err.response)
        })
    }


    const list = matchsList.map((m) => {
        return <ProfileListItem photo={m.photo} name={m.name}/>
    })





    return(
        <MatchsContainer>
            <MatchsList>
                {list.length > 0 ? list : <div>Você não recebeu matches 💔</div>}
            </MatchsList>
        </MatchsContainer>
            
        
    )
}