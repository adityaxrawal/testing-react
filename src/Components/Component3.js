import React, { useState } from 'react'

const Component3 = (props) => {
    const [flag, setFlag] = useState(false)
    return (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', width: "100%", justifyContent: "center", alignItems: "center", marginBottom: "1rem"}} key={props.index}>
            <div style={{ display: 'flex', flexDirection: 'row', width: "750px", gap: '1rem' }}>
                <div>{props.index + 1}.&nbsp;</div>
                <div>Title: {props.title}</div>
                <div>Price: {props.price}</div>
                <div>Selected <input type='checkbox' onClick={() => { setFlag(true) }} />{flag && <span>Yo!</span>}</div>
                <div><button onClick={() => { setFlag(false) }}>Reset</button></div>
            </div>
        </div>
    )
}

export default Component3