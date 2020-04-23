class App extends React.Component {
  constructor() {
    super()
    this.state = {
      form: 1,
      done: false,
      sessionId: 1,
      data: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addData = this.addData.bind(this);
    this.changeForm = this.changeForm.bind(this);
    this.compileData = this.compileData.bind(this);
    this.getSessionId = this.getSessionId.bind(this);
  }

  compileData (data) {
    let prevData = this.state.data;
    let newData = Object.assign(prevData, data);

    this.setState({data: newData})
  }

  changeForm () {
    this.state.form < 3 ? this.setState({form: this.state.form + 1}) : this.addData(this.state.data);
  }

  //TODO Figure out a usecase for this handleChange... might not need? Could possibly use as a checker for empty values
  handleChange (event) {
    // console.log(`${event.target.name}: `, event.target.value);
  }

  handleSubmit (event) {
    event.preventDefault();
    // console.log(event.target.children);
    let inputData = {sessionId: this.state.sessionId};
    const inputArray = event.target.children;

    for (let i = 0; i < inputArray.length - 1; i++) {
      let inputName = inputArray[i].children[0].name.replace(/\s+/g, '_').toLowerCase();
      let inputValue = inputArray[i].children[0].value;

      if (inputData[inputName] === undefined) {
        inputData[inputName] = inputValue;
      }
    }
    this.compileData(inputData);
    this.changeForm();
  };
  // TODO: Possibly refactor so we send the post request in one batch by only invoking addData when we've submitted the last form. We can store the previous form data in state
  addData (data) {
    axios.post('http://localhost:3000/', data)
      .then(response => {
        this.setState({done: true})
        console.log(response)})
      .catch(error => console.log(error))
  }

  getSessionId () {
    console.log('Verifying session ID...');
    axios.get('http://localhost:3000/id')
      .then(response => {
        let newId = response.data[0]['MAX(id)'] + 1;
        this.setState({sessionId: newId});
      })
      .catch(error => {
        console.log(error)
      })
  }

  componentDidMount () {
    this.getSessionId();
  }

  render () {
    let labels = [];
    if (this.state.form === 1) {
      labels = ['Name', 'Email', 'Password'];
    } else if (this.state.form === 2) {
      labels = ['Address 1', 'Address 2', 'City', 'State', 'Zip'];
    } else if (this.state.form === 3) {
      labels = ['Credit Card Number', 'Expiration Date', 'CVV', 'Billing Zip']
    }
    // TODO: Reformat elements to look more like a form
    // TODO: Add stylesheet
    return (
      <div>
        {this.state.done ? <h1>{`Your order has been placed! Order ID: ${this.state.sessionId}`}</h1> : <Form labels={labels} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>}
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