import {useReducer} from 'react'

function Count () {
    const initialState = 0;

    const reducer = (state,action) => {
        switch (action) {
            case 'increment' : return state + 1;
            case 'decrement' : return state - 1;
            case 'reinitialize' : return initialState;

            default : return state;
        }
            
    }

    const [count, dispatch] = useReducer(reducer,initialState)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>dispatch('increment')}>Incrémenter</button>
            <button onClick={()=>dispatch('decrement')}>Décrémenter</button>
            <button onClick={()=>dispatch('reinitialize')}>Réinitialiser</button>
        </div>
    )

}

export default Count