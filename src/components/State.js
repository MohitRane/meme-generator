import React from "react"
// import '../style.css' // <== Import CSS to see work

export default function State() {
    // const result = React.useState("Yes")

    /* Array Destructuring  */
    // const [isImportant, func] = React.useState("Yes")
    const [isImportant, setIsImportant] = React.useState("Yes")
    function handleClick() {
        setIsImportant("No")
    }
    
    /**
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.
     */
    const [counter, setCounter] = React.useState(0)
    function counterPlus() {
        // setCounter(counter + 1)
        // setCounter(function(oldValue) {
        //     return oldValue + 1
        // })
        setCounter(prevCount => prevCount + 1)
    }

    function counterMinus() {
        // setCounter(counter - 1)
        // setCounter(function(oldValue) {
        //     return oldValue - 1
        // })
        setCounter(prevCount => prevCount - 1)
    }

    /**
     * Use ternery operators
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the div.state--value flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     */
    const [isGoingOut, setIsGoingOut] = React.useState(false)
    function changeMind() {
        // setIsGoingOut(prevState => prevState ? false : true);
        setIsGoingOut(prevState => !prevState);
        console.log(isGoingOut);
    }
    
    return (
        <div>
            {/* State Practice */}
            <div className="state">
                <h1 className="state--title">Is state important to know?</h1>
                <div className="state--value" onClick={handleClick}>
                    <h1>{isImportant}</h1>
                    {/* <h1>{result[0]}</h1> */}
                </div>
            </div><hr />
            {/* Counter State Practice */}
            <div className="counter">
                <button className="counter--minus" onClick={counterMinus}>–</button>
                <div className="counter--count">
                    <h1>{counter}</h1>
                </div>
                <button className="counter--plus" onClick={counterPlus}>+</button>
            </div><hr />
            {/* Flipping State Practice */}
            <div className="state">
                <h1 className="state--title">Do I feel like going out tonight?</h1>
                <div className="state--value" onClick={changeMind}>
                    <h1>{isGoingOut ? "Yes" : "No"}</h1>
                </div>
            </div><hr/>
            {/* Accessibility Practice
            In Above div structure we are using onClick on div we should use button to follow best practice */}
            <div className="state">
                <h1 className="state--title">Do I feel like going out tonight?</h1>
                <button className="state--value2" onClick={changeMind}>
                    {isGoingOut ? "Yes" : "No"}
                </button>
            </div>
        </div>
    )
}
