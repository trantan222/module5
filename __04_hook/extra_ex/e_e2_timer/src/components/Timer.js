import {useEffect, useState} from "react";

export function Timer() {
    const [timer,setTimer] =useState(10)
    useEffect(() =>{
        let timerId = setInterval(() =>{
            setTimer(prevState => prevState - 1)
        },1000)
        console.log("timer",timer)
        if(timer === 0){
            clearInterval(timerId)
        }
        return () =>{
            clearInterval(timerId)
        }
    },[timer])
    return (
        <>
            <h1>Timer : {timer}</h1>
            </>
    )
}