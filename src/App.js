import React, {Component, useState} from 'react';
import uniqid from 'uniqid';
import './App.css';
import Header from './components/Header';
import Info from './components/GeneralInformation';
import Education from './components/Education';
import Career from './components/Career';

function App () {
    const [info, setInfo] = useState ({
            editable: true,
            personName: '',
            phone: '',
            email: ''
    });
    const [education, setEducation] = useState ({
          editable: true,
          school: '',
          degree: '',
          startDate: '',
          endDate: '',
          id: uniqid()
    });
    const [career, setCareer] = useState({
        editable: true,
        company: '',
        jobTitle: '',
        description: '',
        startDate: '',
        endDate: '',
        id: uniqid()
    })
    const [educationHistory, setEducationHistory] = useState([]);
    const [careerHistory, setCareerHistory] = useState([]);

 const handleChange = (e) => {
    const {name, value, id} = e.target;
    const elName = e.target.parentElement.parentElement.name;
    let entries, setter;
    if (elName === 'info') {
      setInfo({
        ...info,
        [name]: value
      })
    } else {
      if (elName === 'education') {
        entries = educationHistory
        setter = setEducationHistory
      } else {
        entries = careerHistory
        setter = setCareerHistory
      }
      setter(entries.map(entry => {
            return(
              entry.id === id ? {...entry, [name]: value} : entry
            )
        }))
    }
  }

  const handleSubmit = (e) => {
    const {name, id} = e.target;
    if(name === 'info'){
      setInfo({...info, editable: !info.editable})
    } else if(name === 'educationHistory'){
      setEducationHistory(educationHistory.map(entry => {
        return(
          entry.id === id ? {...entry, editable: !entry.editable} : entry
        )
      }))
    } else if(name === 'careerHistory') {
      setCareerHistory(careerHistory.map(entry => {
        return(
          entry.id === id ? {...entry, editable: !entry.editable} : entry
        )
      }))
    }
  }


  const handleAdd = (e) => {
    const {name} = e.target;
    if (name === "career")  {
          setCareerHistory(careerHistory.concat(career));
          setCareer({
              editable: true,
              company: '',
              jobTitle: '',
              description: '',
              startDate: '',
              endDate: '',
              id: uniqid()
            }
          )}
    else {
      setEducationHistory(educationHistory.concat(education));
      setEducation({
        editable: true,
        school: '',
        degree: '',
        startDate: '',
        endDate: '',
        id: uniqid()
      })
    }
  }

  const handleDelete = (e) => {
    const {name, id} = e.target;
      name === 'educationHistory' ?
        setEducationHistory(educationHistory.filter(entry => entry.id !== id)) :
        setCareerHistory(careerHistory.filter(entry => entry.id !== id))
  }

    return (
      <div className="App">
          <Header />
          <div className="main">
          <Info
            {...info}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />
          <Education
            {...education}
            educationHistory={educationHistory}
            handleAdd={ handleAdd}
            handleDelete={handleDelete}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />
          <Career
            {...career}
            careerHistory={careerHistory}
            handleAdd={ handleAdd}
            handleDelete={handleDelete}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />
        </div>
      </div>
    );
}

export default App;
