// import React from "react";
//
// class Status extends React.Component {
//     state = {
//         editMode: false,
//         status: this.props.status
//     }
//     activateEditMode = () => {
//         this.setState({editMode: true})
//     }
//     deactivateEditMode = () => {
//         this.setState({editMode: false})
//         this.props.updateStatus(this.state.status)
//     }
//     onChangeStatus = (e) => {
//         this.setState({
//             status: e.currentTarget.value
//         })
//     }
//
//     render() {
//         return (
//             <div>
//                 <div>
//                     {!this.state.editMode &&
//                         <div>
//                             <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
//                         </div>
//                     }
//                 </div>
//                 <div>
//                     {this.state.editMode &&
//                         <div>
//                             <input onChange={this.onChangeStatus} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
//                         </div>
//                     }
//                 </div>
//             </div>
//         )
//     }
// }
//
// export default Status