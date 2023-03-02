import React from 'react'

const SpecialButton = ({handleSomething,title}) => {
    return (
    <button onClick={handleSomething}>{title}</button>
    )
}

export default SpecialButton