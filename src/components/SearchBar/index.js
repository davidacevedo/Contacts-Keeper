import React from 'react'
import { connect } from 'react-redux'
import { addContact } from 'actions'

let AddContact = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addContact({
          firstName: 'David',
          lastName: 'Acevedo',
          dateOfBirth: '11/14/1994',
          phone: '5625476811',
          email: 'david.acevedo07@gmail.com',
          notes: 'He is ok'
        }));
        // console.log(this.props)
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddContact = connect()(AddContact)

export default AddContact


// export class SearchBar extends Component {
//   render() {
//     return (
//       <div className='SearchBar'>
//         <form onSubmit={e => {
//                 e.preventDefault();
//                 dispatch(actionCreators)
//               }}>
//           <button type="submit">Add Contact</button>
//         </form>
//       </div>
//     )
//   }
// }
//
// export default connect(
//   state => ({}),
//   dispatch => bindActionCreators(actionCreators, dispatch)
// )(SearchBar);
//

// let AddTodo = ({ dispatch }) => {
//   let input;
//
//   return (
//     <div>
//       <form onSubmit={e => {
//         e.preventDefault();
//         if (!input.value.trim()) {
//           return
//         }
//         dispatch(addContact({
//           type: 'AVATAR_LOAD_COMPLETE',
//           obj: {}
//         }));
//         // console.log(dispatch);
//         input.value = ''
//       }}>
//         <input ref={node => {
//           input = node
//         }} />
//         <button type="submit">
//           Add Todo
//         </button>
//       </form>
//     </div>
//   )
// };
// AddTodo = connect()(AddTodo);
//
// export default AddTodo