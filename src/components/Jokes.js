import React from 'react';
import './style.css';


export default function Jokes(props){
    
    return(
     <div>
        <h3>Setup:{props.Setup}</h3>
        <p> Punchline:{props.Punchline}</p>
        <hr />
     </div>

    )
}

/*
the props can also be manipulated like this
export default function Jokes(props){
    
    return(
     <div>
        <h3>Setup:{props.Setup}</h3>
        <p> Punchline:{props.Punchline}</p>
        <hr />
     </div>

    )


    Inline styling of props
    export default function Joke(props) {
    return (
        <div>
            <h3 style={{display: props.setup ? "block" : "none"}}>Setup: {props.setup}</h3>
            <p>Punchline: {props.punchline}</p>
            <hr />
        </div>
    )

    conditional rendering with props
    The component renders a <div> element containing the following:

If the props.setup exists (i.e., it is truthy), it renders an <h3> element with the text "Setup:" followed by the value of props.setup.
It renders a <p> element with the text "Punchline:" followed by the value of props.punchline.
Finally, it renders an <hr> (horizontal line) element.
    export default function Joke(props) {
    return (
        <div>
            {props.setup && <h3>Setup: {props.setup}</h3>}
            <p>Punchline: {props.punchline}</p>
            <hr />
        </div>
    )
}
}
*/