import React from "react"

class StateClass extends React.Component {

    state = {
        value:0
    }

    increment = () => {
        this.setState({
            value: this.state.value+1
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.value}</h1>
                <button onClick={this.increment}>Incrémenter</button>
            </div>
        )
    }
}

export default StateClass