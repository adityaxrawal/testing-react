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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
            <Component1 saveData={saveData} handleSaveData={handleSaveData} />
            {
                <Component2 saveData={saveData} />
            }
        </div>
    )
}

export default Testing