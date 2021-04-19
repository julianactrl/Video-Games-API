import React from 'react'
import { useSelector, useDispatch } from "react-redux";

const Order = () => {
    
    return(
        <>
            <select>
                <option>---Order By---</option>
                <option value="az">A - Z</option>
                <option value="za">Z - A</option>
                <option value="lowest">Rating lowest</option>
                <option value="highest">Rating highest</option>
            </select>
        </>
    )
}

export default Order