import React, {Component} from 'react';
import uniqid from 'uniqid';
import './App.css';
import Info from './components/GeneralInformation';
import Education from './components/Education';
import Career from './components/Career';

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
        endDate: '',
        id: uniqid()
      },
      career: {
        editable: false,
        company: '',
        jobTitle: '',
        description: '',
        startDate: '',
        endDate: '',
        id: uniqid()
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

  handleAdd = (e) => {
    const {name} = e.target;
    name === "career" ?
      this.setState(prevState => {
        return({
          careerHistory: prevState.careerHistory.concat(this.state.career)
        })

      }) :
      this.setState(prevState => {
        return({
          educationHistory: prevState.educationHistory.concat(this.state.education)
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
          educationHistory={this.state.educationHistory}
          handleAdd={this.handleAdd}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <Career
          {...this.state.career}
          careerHistory={this.state.careerHistory}
          handleAdd={this.handleAdd}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
