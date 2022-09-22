import React from 'react'
import {MyContext} from './MyContext'

class Enfant extends React.Component {
    render () {
        return (
            <MyContext.Consumer>

                {
                    data => {
                        console.log(data.point)
                        return (
                              <h1>Allo {data.point}</h1>
                                
                        )
                    }
                }
                
            </MyContext.Consumer>
        )
    }
}

export default Enfant

// reducer = (bcc, v) => bcc + v

// let array = [11, 12, 13, 14];
// let sum = array.reduce(reducer); 
// // sum = 50