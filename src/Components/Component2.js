import React from 'react'
import Component3 from './Component3'

const Component2 = (props) => {
    return (
        <div>
            This is the list of data:
            Total count: {props.saveData.length}
            {props.saveData?.map((data, index) => {
                return (
                    <Component3 title={data.title} price={data.price} index={index} />
                )
            })}
        </div>
    )
}

export default Component2