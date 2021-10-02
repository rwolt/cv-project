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
        editable: true,
        personName: '',
        phone: '',
        email: ''
      },
      education: {
        editable: true,
        school: '',
        degree: '',
        startDate: '',
        endDate: '',
        id: uniqid()
      },
      career: {
        editable: true,
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
    const {name, value, id} = e.target;
    const elName = e.target.parentElement.parentElement.name;
    let entries;
    if (elName === 'info') {
      this.setState(prevState => {
        return({
            [elName]: {
              ...prevState[elName],
              [name]: value
            }
        })
      })
    } else {
      if (elName === 'education') {
        entries = 'educationHistory'
      } else {
        entries = 'careerHistory'
      }
      this.setState({
        [entries]: this.state[entries].map(entry => {
          return(
            entry.id === id ? {...entry, [name]: value} : entry
          )
        })
      })
    }
  }

  handleSubmit = (e) => {
    const {name, id} = e.target;
    if(name === 'info'){
      this.setState({
        [name]: {
          ...this.state[name],
          editable: !this.state[name].editable
        }
      })
    } else {
      this.setState(prevState => {
        return({
          [name]: this.state[name].map(entry => {
            return(
              entry.id === id ? {...entry, editable: !entry.editable} : entry
            )
          })
        })
      })
    }
  }

  handleAdd = (e) => {
    const {name} = e.target;
    const {career, careerHistory, education, educationHistory} = this.state;
    name === "career" ?
      this.setState({
          careerHistory: careerHistory.concat(career),
          career: {
            editable: true,
            company: '',
            jobTitle: '',
            description: '',
            startDate: '',
            endDate: '',
            id: uniqid()
          }
        }) :
      this.setState({
          educationHistory: educationHistory.concat(education),
          education: {
            editable: true,
            school: '',
            degree: '',
            startDate: '',
            endDate: '',
            id: uniqid()
          }
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
