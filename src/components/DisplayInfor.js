import React, { useState } from 'react'
import './DisplayInfor.scss'
import logo1 from './../logo.svg'

// class DisplayInfor extends React.Component {

//     state = {
//         isShowListUser: true
//     }
//     componentDidMount() {
//         console.log(">>> Call me component did mount")
//         setTimeout(() => {
//             document.title = "Phuc & Dao Minh Phuc"
//         }, 3000)
//     }

//     componentDidUpdate(prevProps, prevState, snapshot) {
//         console.log(">>> Call me component did update", this.props, prevProps)
//         if (this.props.listUsers !== prevProps.listUsers) {
//             if (this.props.listUsers.length === 5) {
//                 alert("You got 5")
//             }
//         }
//     }

//     handleShowHide = () => {
//         this.setState({
//             isShowListUser: !this.state.isShowListUser
//         })
//     }
//     render() {
//         //destructuring array/object
//         const { listUsers } = this.props
//         console.log(listUsers)
//         return (
//             <div className='display-infor-container'>
//                 {/* <img src={logo1} /> */}
//                 <div>
//                     <span onClick={() => { this.handleShowHide() }}>
//                         {this.state.isShowListUser === true ? "Hide list user" : "Show list user"}
//                     </span>
//                 </div>
//                 {this.state.isShowListUser &&
//                     <>
//                         {listUsers.map((user, index) => {
//                             return (
//                                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                                     <div>My name's {user.name}</div>
//                                     <div>My age's {user.age}</div>
//                                     <hr />
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                     </div>
//                                 </div>
//                             )
//                         })}
//                     </>}
//             </div>
//         )
//     }
// }

const DisplayInfor = (props) => {
    const { listUsers, handleDeleteUser } = props
    const [isShowHideListUser, setShowHideListUser] = useState(true)

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser)
    }

    return (
        <div className='display-infor-container'>

            <div>
                <span onClick={handleShowHideListUser}>
                    {isShowHideListUser ? "Hide list user" : "Show list user"}
                </span>
            </div>

            {isShowHideListUser &&
                <>
                    {listUsers.map((user) => {
                        return (
                            <div
                                key={user.id}
                                className={+user.age > 18 ? "green" : "red"}
                            >
                                <div>My name's {user.name}</div>
                                <div>My age's {user.age}</div>

                                <hr />

                                <div>
                                    <button
                                        onClick={() => handleDeleteUser(user.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </>
            }

        </div>
    )
}

export default DisplayInfor
