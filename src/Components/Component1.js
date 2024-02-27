import React from 'react'

const Component1 = (props) => {
    
    const handleSearchData = async () => {
        const limit = Math.floor(Math.random() * 100) + 1;
        const response = await fetch(`https://dummyjson.com/products?limit=${limit}&select=title,price`)
            .then(res => res.json())
        props.handleSaveData(response)
    }
    return (
        <div style={{display: 'flex', width: '750px', flexDirection: 'row', border: "red 2px solid", justifyContent: 'center', alignItems: 'center', height: "50px"}}>
            <button onClick={handleSearchData}>Search</button>
        </div>
    )
}

export default Component1