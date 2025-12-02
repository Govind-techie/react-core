import { useState } from "react";

// Function to check whether the ticket is a winning ticket (digit sum equals 15)
export default function Lottery() {

    function isWinner(ticket) {
        // Convert the ticket string into an array of single characters
        let digits = ticket.split("");
        // Convert each character (string digit) into a number
        let num = digits.map((d) => parseInt(d)); 
        // Add all digits using reduce to get total sum
        let sum = num.reduce((acc, curr) => acc + curr, 0);
        // Return true if sum is exactly 15, otherwise false
        if (sum === 15) return true;
        return false;
    }

    // Generate a random 3-digit ticket (000–999) and pad it to always be 3 digits
    function generateTicket() {
      setTicket(String(Math.floor(Math.random() * 1000)).padStart(3, "0"));
    }

    // State to store the generated 3-digit lottery ticket (as a padded string)
    let [ticket, setTicket] = useState("");

    // UI: Shows winner message based on isWinner(), displays current ticket, and a button to generate a new one
    return (
        <div>
            <h1>{isWinner(ticket) ? "Congratulations, you won!" : "Lottery"}</h1>
            <h3>Lottery Ticket = {ticket}</h3>
            <button onClick={generateTicket}>Get New Ticket</button>
        </div>
    );
}
