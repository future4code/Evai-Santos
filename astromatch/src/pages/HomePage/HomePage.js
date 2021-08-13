import axios from "axios"
import React, { useState, useEffect } from "react"
import { HomeContainer, Profile, ProfileImage } from "./styled"




export const HomePage = () => {
    const [profile, setProfile] = useState({})

    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/evai-santos"
     
     useEffect(() => {
         getProfile()
     }, [])


       const getProfile = () => {
        axios.get(`${url}/person`)
        .then((res) => {
        setProfile(res.data.profile)
        })
        .catch((err) => {
         console.log(err.response)
        })
    }

    const choosePerson = (choice) => {
        const body = {
            id: profile.id,
            choice: choice
        }
        axios.post(`${url}/choose-person`, body)
        .then((res) => {
            getProfile()
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err.response)
        })

    }


    return(
        <HomeContainer>
            {!profile ? <div>Acabou todos os perfis! Aperte botão de limpar</div> : 
            <Profile>
                <ProfileImage src={profile.photo}/>
                <h2>{profile.name}, {profile.age}</h2>
                <p>{profile.bio}</p>
                
                <div>
                    <button onClick={() => choosePerson (true)}>❌</button>
                    <button onClick={() => choosePerson (false)}>💚</button>
                </div>
            
            </Profile>
            }
            
        </HomeContainer>
        
    )
}