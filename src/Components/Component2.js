import React from 'react'
import Component3 from './Component3'

const Component2 = (props) => {
    return (
        <div style={{ display: 'flex', flexDirection: "column", border: '2px solid blue', maxWidth: '100%', padding:"2%"}}>
            This is the list of data:
            Total count: {props.saveData.length}
            {props.saveData?.map((data, index) => {
                return (
                    <div key={index}>
                        <Component3 title={data.title} price={data.price} index={index} />
                    </div>
                )
            })}
        </div>
    )
}

export default Component2