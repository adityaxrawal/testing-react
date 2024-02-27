import React, { useState } from 'react'
import Component1 from './Component1'
import Component2 from './Component2'

const Testing = () => {
    const [saveData, setsaveData] = useState([])

    const handleSaveData = (data) => {
        console.log("data:", data.products)
        setsaveData(data.products)
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem', maxWidth: "100%", justifyContent: 'center', alignItems: 'center', margin: '1%', padding: '1%', border: 'green 3px solid' }}>
            <Component1 saveData={saveData} handleSaveData={handleSaveData}/>
            <Component2 saveData={saveData}/>
        </div>
    )
}

export default Testing