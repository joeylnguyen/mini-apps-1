class App extends React.Component {
  constructor() {
    super()
    this.state = {
      form: 'F1',
      done: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addData = this.addData.bind(this);
  }

  //TODO Figure out a usecase for this handleChange... might not need? Could possibly use as a checker for empty values
  handleChange (event) {
    console.log(`${event.target.name}: `, event.target.value);
  }

  //TODO Change form state after handleSubmit runs

  handleSubmit (event) {
    event.preventDefault();
    console.log(event.target.children);
    let inputData = {};
    const inputArray = event.target.children;

    for (let i = 0; i < inputArray.length - 1; i++) {
      let inputName = inputArray[i].children[0].name;
      let inputValue = inputArray[i].children[0].value;

      if (inputData[inputName] === undefined) {
        inputData[inputName] = inputValue;
      }
    }
    console.log(inputData);
    this.addData(inputData);
  };

  addData (data) {
    axios.post('http://localhost:3000/', data)
      .then(response => console.log(response))
      .catch(error => console.log(error))
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
    // TODO: Reformat elements to look more like a form
    // TODO: Add stylesheet
    return (
      <div>
        {this.state.done ? <h1>Your order has been placed!</h1> : <Form labels={labels} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>}
      </div>
    )
  }
}

const Form = ({labels, handleSubmit, handleChange}) => {
  let entries = labels.map(label => <Entry label={label} key={label} handleChange={handleChange}/>)
  return (
    <form onSubmit={handleSubmit}>
      {entries}
      <input type="submit"></input>
    </form>
  )
}

const Entry = ({label, handleChange}) => {
  return (
    <label> {label}
      <input type="text" name={label} onChange={handleChange}></input>
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