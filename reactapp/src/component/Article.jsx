import React from 'react'
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
