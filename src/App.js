import React, {Component} from 'react';
import './App.css';
import Info from './components/Info'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        editable: false,
        name: '',
        phone: '',
        email: ''
      },
      education: {
        editable: false,
        school: '',
        degree: '',
        startDate: '',
        endDate: ''
      },
      career: {
        editable: false,
        school: '',
        degree: '',
        startDate: '',
        endDate: '',
      },
      educationHistory: [],
      careerHistory: []
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target;
      this.setState(prevState => {
        return({
            info: {
            ...prevState.info,
            [name]: value
          }
        })
      })
  }

  handleSubmit = (e) => {
    const {name} = e.target;
    this.setState(prevState => {
      return({
        [name]: {
          ...prevState[name],
          editable: !prevState[name].editable
        }
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Info
          {...this.state.info}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <Education
          {...this.state.education}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
