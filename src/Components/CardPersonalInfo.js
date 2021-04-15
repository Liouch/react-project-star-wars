import React from 'react'
import { useParams } from 'react-router'

function CardPersonalInfo(props) {
    let {id} = useParams()
    console.log(props)
    return (
        <div>
            {id}
        </div>
    )
}

export default CardPersonalInfo
