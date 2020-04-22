class App extends React.Component {
  constructor() {
    super()
    this.state = {
      form: 'F1'
    }
  }

  render () {
    let labels = [];
    if (this.state.form === 'F1') {
      labels = ['Name', 'Email', 'Password'];
    } else if (this.state.form === 'F2') {
      labels = ['Address 1', 'Address 2', 'City', 'State', 'Zip'];
    } else if (this.state.form === 'F3') {
      labels = ['Credit Card Number', 'Expiration Date', 'CVV', 'Billing Zip']
    }

    return (
      <div>
        <Form labels={labels} />
      </div>
    )
  }
}

const Form = ({labels}) => {
  let entries = labels.map(label => <Entry label={label} key={label}/>)
  return (
    <form>
      {entries}
      <input type="submit"></input>
    </form>
  )
}

const Entry = ({label}) => {
  console.log(label);
  return (
    <label> {label}
      <input type="text"></input>
    </label>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));

// const F1 = () => {
//   return (
//     <form>
//       <div>
//         <label> Name
//           <input type="text"></input>
//         </label>
//       </div>
//       <div>
//         <label> Email
//           <input type="text"></input>
//         </label>
//       </div>
//       <div>
//         <label> Password
//           <input type="text"></input>
//         </label>
//       </div>
//       <input type="submit"></input>
//     </form>
//   )
// }


// const F2 = () => {
//   return (
//     <form>
//       <div>
//         <label> Address 1
//           <input type="text"></input>
//         </label>
//       </div>
//       <div>
//         <label> Address 2
//           <input type="text"></input>
//         </label>
//       </div>
//       <div>
//         <label> City
//           <input type="text"></input>
//         </label>
//       </div>
//       <div>
//         <label> State
//           <input type="text"></input>
//         </label>
//       </div>
//       <div>
//         <label> Zip
//           <input type="text"></input>
//         </label>
//       </div>
//       <input type="submit"></input>
//     </form>
//   )
// }

// const F3 = () => {
//   return (
//     <form>
//       <div>
//         <label> Credit Card Number
//           <input type="text"></input>
//         </label>
//       </div>
//       <div>
//         <label> Expiration Date
//           <input type="text"></input>
//         </label>
//       </div>
//       <div>
//         <label> CVV
//           <input type="text"></input>
//         </label>
//       </div>
//       <div>
//         <label> Billing Zip Code
//           <input type="text"></input>
//         </label>
//       </div>
//       <input type="submit"></input>
//     </form>
//   )
// }