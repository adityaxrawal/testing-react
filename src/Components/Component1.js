import React from 'react'

const Component1 = (props) => {
    
    const handleSearchData = async () => {
        const limit = Math.floor(Math.random() * 100) + 1;
        const response = await fetch(`https://dummyjson.com/products?limit=${limit}&select=title,price`)
            .then(res => res.json())
        props.handleSaveData(response)
    }
    return (
        <div>
            <button onClick={handleSearchData}>Search</button>
        </div>
    )
}

export default Component1