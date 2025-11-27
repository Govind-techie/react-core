// Importing the useState Hook from React.
// useState lets this component store and update state (like a variable that triggers UI updates).
import { useState } from "react";


function Counter() {
    // useState hook:
    // - Creates a state variable 'count' with an initial value of 0.
    // - setCount is a special function provided by React to update 'count'.
    // Whenever setCount is called, React re-renders the component with the new value.
    const [count, setCount] = useState(0);

    // Event handler function that increases the count.
    // This function runs every time the button is clicked.
    function increaseCount() {
        // Updating the state:
        // React schedules a re-render and updates 'count' on the next render cycle.
        setCount(count => count + 1);
        // No need to return anything here — React completely ignores the return value
        // of event handler functions. They are used only for performing actions.
    };

    return (
        // When the button is clicked, increaseCount() is executed.
        // The UI shows the updated count because React re-renders the component.
        <button onClick={increaseCount} style={{display: "flex", flexDirection: "column", margin: 10}}>
            Count {count}
        </button>
    );
}

export default Counter;