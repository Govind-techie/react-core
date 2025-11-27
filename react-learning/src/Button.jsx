// A normal JavaScript function (NOT a React component).
// This function will run when the button is clicked.
function handleOnClick() {
    console.log("Clicked"); 
    // When executed, it prints "Clicked" to the console.
}

// This is a React component.
// Components return UI (JSX) that gets rendered on the screen.
function Button() {
    return (
        <div>
            {/* 
                React event handling:
                - onClick is a React event listener (camelCase).
                - We pass the FUNCTION REFERENCE (handleOnClick) and NOT the function call (handleOnClick()).
                - React will call handleOnClick automatically when the button is clicked.
                
                Important:
                If you write onClick={handleOnClick()} 
                → the function runs immediately during rendering (wrong).
                
                Correct: onClick={handleOnClick}
                → React saves this function and calls it LATER when the event happens.
            */}
            <button onClick={handleOnClick}>Click Me!</button>
        </div>
    );
}

// Export the component so it can be used in other files.
export default Button;