import React, { useEffect, useState } from "react"

const WithRef = () => {
    // const inputEl = useRef(null)
    // console.log(inputEl)

    // const numRef = useRef(0)
    const [count, setCount] = useState(0)
    const handleClick = () => {
        // setCount(count + 1)
        // setCount(count + 1)
        // setCount(count + 1)
        // setCount(count + 1)
        // numRef.current = numRef.current + 1
        setCount((prevCount) => prevCount + 1)
        setCount((prevCount) => prevCount + 1)
        setCount((prevCount) => prevCount + 1)
        setCount((prevCount) => prevCount + 1)
    }

    useEffect(() => {
        // console.log(inputEl)
        // console.log(numRef.current)
    })
    return (
        <div>
            {/* <input type="text" placeholder="bane" ref={inputEl} /> */}
            <button onClick={handleClick}>{count}</button>
        </div>
    )
}
export default WithRef
