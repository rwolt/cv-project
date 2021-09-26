import React, {Component} from 'react';
import uniqid from 'uniqid';
import './App.css';
import Info from './components/GeneralInformation';
import Education from './components/Education';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        editable: false,
        personName: '',
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
        id: uniqid(),
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
    const el = e.target.parentElement.name;
      this.setState(prevState => {
        return({
            [el]: {
              ...prevState[el],
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
