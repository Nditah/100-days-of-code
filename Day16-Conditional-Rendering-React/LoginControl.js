import React, { Component } from 'react'
import Greeting from './Greeting'

function Logoutbtn(props) {
    return (
        <button onClick={props.onClick}>Logout</button>
    )
}

function Loginbtn(props) {
    return (
        <button onClick={props.onClick}>Login</button>
    )
}


export class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true})     
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false})     
    }

    // render() {
        // USING ELEMENT VARIABLES
        // const isLoggedIn = this.state.isLoggedIn;
        // let button;
        // if (isLoggedIn) {
        //     button = <Logoutbtn onClick={this.handleLogoutClick} />
        // } else {
        //     button = <Loginbtn onClick={this.handleLoginClick} />
        // }

        // return (
        // <div className="section">
        //     <Greeting isLoggedIn={isLoggedIn} />
        //     {button}
        // </div>
        // )


// render() {
    // EXTRACTING CONDITIONAL RENDERING INTO FUNCTION
//     let {isLoggedIn} = this.state;
//     const renderBtn = () => {
//         if(isLoggedIn){
//             return <Logoutbtn onClick={this.handleLogoutClick} />
//         } else {
//             return <Loginbtn onClick={this.handleLoginClick} />
//         }
//     }
//     return (
//         <div className="section">
//             <Greeting isLoggedIn={isLoggedIn} />
//             {renderBtn()}
//         </div>
//     )
// }

    // render() {
        // USING A SWITCH STATEMENT (BUTTON.JS)
    //     const button = props => {
    //         let { isLoggedIn } = props;
    //         switch (isLoggedIn) {
    //             case true:
    //                 return <button>Logout</button>
    //                 break;
    //             case false:
    //                 return <button>Login</button>
    //                 break;
    //             default:
    //                 return null;
    //         }
    //     }
    // }

    render() {
        // TERNARY OPERATORS
        let { isLoggedIn } = this.state;
        return (
            <div className="section">
                <Greeting isLoggedIn={isLoggedIn}/>
                {isLoggedIn ? <Logoutbtn onClick={this.handleLogoutClick} /> : <Loginbtn onClick={this.handleLoginClick} />}
            </div>
        )
    }
}

export default LoginControl



