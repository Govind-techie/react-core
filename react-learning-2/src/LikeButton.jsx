// Importing the useState Hook from React.
// useState helps this component track whether the user has liked the post or not.
import { useState } from "react";

function LikeButton() {
    // liked → state variable (true/false) to store like status.
    // setLiked → function to update the liked value.
    // Initial value: false (heart is not liked at first).
    const [liked, setLiked] = useState(false);

    // Event handler:
    // Toggles the 'liked' state each time the user clicks the icon.
    // If liked = false → becomes true.
    // If liked = true → becomes false.
    function LikeState() {
        setLiked(!liked);
    }

    return (
        // Wrapping the icon in a <p> tag so that we can easily apply cursor:pointer.
        // onClick calls LikeState() to toggle the 'liked' state.
        <p onClick={LikeState} style={{ cursor: "pointer" }}>

            {/* 
                Dynamic class & style:
                - If liked is true → use the solid heart icon (fa-solid).
                - If liked is false → use the regular outline heart icon (fa-regular).

                - The style changes the color to red only when liked = true.
                - When liked = false → color is empty (default color).
            */}
            <i
                className={liked ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                style={{ color: liked ? "red" : "" }}
            ></i>

        </p>
    );
}

export default LikeButton;