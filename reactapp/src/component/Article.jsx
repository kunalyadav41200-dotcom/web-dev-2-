import React, { use, useEffect } from 'react'
import ArtStyle from './Article.module.css'
import styled from 'styled-components'
import styled from "@emotion/styled"

function Article(props) {
    const[count,setCount]=useState(0)
}
function Article() {
    const handleIncrement = () => {
        setCount(count+1)
        console.log(count)
    }
    return (
        <div>
            <h2>Article</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, architecto?</p>
        </div>
    )
}
export default Article 

const Button=styled.Button`
    background-color: ${props=>props.primary ? "red" : "pink"};
    color:white;
    border-radius: 10px;
    height: 30px;
    width: 100px;`
export default Article

const Button=styled.button` 
    background-color: ${props=>props.primary ? "red" : "pink"};
    color:white;
    border-radius: 10px;
    height: 30px;
    width: 100px;`
export default Article 
useEffect(()=>{
    console.log("component Mounted")
},[name])
const handleIncrement = () => {
    setCount(count+1)
    console.log(count)
}
useEffect(()=>{
    console.log("component Mounted")
    return()=>{
        console.log("component Unmounted")
    }       
},[name])
useState(()=>{
    const fetchData=async()=>{
    console.log("Data Fetched")
}
 fetchData()
},[])