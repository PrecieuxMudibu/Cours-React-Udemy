import React from "react";

const Toto = props => {
    const buttonReponseToto = props.leState.messageMaman !== null ? (<button onClick={props.reponse}>Répondre</button>) : (<button disabled>Répondre</button>)
    
    return (
        <div>
            <div>Je suis {props.name}</div>
            {buttonReponseToto}
            <p>{props.leState.messageToto}</p>
        </div>
    )
}

export default Toto