import { useState } from "react";
import {useAuthContext} from './useAuthContext'
export const useLogin=()=>{
    const [error,setError]=useState(null)
    const [isLoading,setIsLoading]=useState(null)
    const {dispatch}=useAuthContext()

    const login=async(id,password)=>{
        setIsLoading(true)
        setError(null)
        const response=await fetch(`${process.env.VITE_SERVER_URI}/api/user/login`,
        {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({id,password})
        })

        const json=await response.json()

        if(!response.ok){
            setError(json.error)
            setIsLoading(false)
        }
        if(response.ok){
            localStorage.setItem('user',JSON.stringify(json))
            dispatch({type:'LOGIN',payload:json})
            setIsLoading(false)

        }

    }
    return {login,isLoading,error}
}