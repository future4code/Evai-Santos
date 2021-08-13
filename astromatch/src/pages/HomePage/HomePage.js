import axios from "axios"
import React, { useState, useEffect } from "react"
import { HomeContainer, Profile, ProfileImage } from "./styled"




export const HomePage = () => {
    const [profile, setProfile] = useState({})

    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/evai-santos/person"
     
     useEffect(() => {
         getProfile()
     }, [])


       const getProfile = () => {
        axios.get(url)
        .then((res) => {
        setProfile(res.data.profile)
        })
        .catch((err) => {
         console.log(err.response)
        })
    }

    const choosePerson = () => {
        console.log("botão de escolha")

    }


    return(
        <HomeContainer>
            <Profile>
                <ProfileImage src={profile.photo}/>
                <h2>{profile.name}, {profile.age}</h2>
                <p>{profile.bio}</p>
                
                <div>
                    <button onClick={choosePerson}>follow</button>
                    <button onClick={choosePerson}>unfollow</button>
                </div>
            
            </Profile>
            Homepage
        </HomeContainer>
        
    )
}