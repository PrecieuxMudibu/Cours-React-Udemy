// import StateClass from './components/StateClass'
// import Maman from './propsFunctions/components/Maman'
import { MyContext } from './context/MyContext'
// import Enfant from './context/Enfant'
import React from 'react'
import Count from './useReducer/Count'

class App extends React.Component {

    state = {
        point : 1
    }
    
    render() {
        return(
            <MyContext.Provider value={this.state}>
            <div className='container'>
                {/* <Maman /> */}
                {/* <Enfant /> */}
                <Count />
            </div>
        </MyContext.Provider>
        )
    }
   
}

export default App