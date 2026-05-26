import React from 'react'

class MyComponent extends React.Component {
    state = {
        name: 'Phvster',
        address: 'Ha Noi',
        age: 21
    }
    handleClick = (event) => {
        this.setState({
            name: 'Oanh',
            age: Math.floor((Math.random() * 100) + 1)
        })
        // this.setState({
        //     age: Math.floor((Math.random() * 100) + 1)
        // })
        console.log("My name is ", this.state.name)
        console.log("Age: ", this.state.age)
    }
    handleOnMouseOver(event) {
        console.log(event.pageX)
    }

    //JSX
    render() {
        return (
            <div>
                <button onClick={(event) => { this.handleClick(event) }}>=>Click me</button>
                <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
            </div>
        )
    }
}

export default MyComponent