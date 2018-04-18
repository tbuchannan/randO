import React from 'react';
import Charts from './charts/charts';

class JSONInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      people: [],
      hasError: false,
      info: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.parseJSON = this.parseJSON.bind(this);
    this.getAge = this.getAge.bind(this);
  }

  getAge(age) {
    let now = new Date().getFullYear();
  }
  parseJSON(arr) {
    let info = {
      male: 0,
      female: 0,
      firstNameAM: 0,
      lastNameAM:  0,
      firstNameNZ: 0,
      lastNameNZ: 0,
      states: {},
      ageRanges: {
        "0-20": 0,
        "21-40": 0,
        "41-60": 0,
        "61-80": 0,
        "81-100": 0,
        "100+": 0,
      },
      total: arr.length
    }

    for (let i = 0; i < arr.length; i++) {
      let person = arr[i];
      let firstNameLetter = person.name.first[0].toLowerCase();
      let lastNameLetter = person.name.last[0].toLowerCase();
      let state = person.location.state;
      let age = this.getAge(person.dob)

      info.female += person.gender == "female" ? 1 : 0;
      info.male += person.gender == "male" ? 1 : 0;
      info.firstNameAM += firstNameLetter >= "a" && firstNameLetter <= "m" ? 1 : 0;
      info.firstNameNZ += firstNameLetter >= "n" && firstNameLetter <= "z" ? 1 : 0;
      info.lastNameAM += firstNameLetter >= "a" && firstNameLetter <= "m" ? 1 : 0;
      info.lastNameNZ += lastNameLetter >= "n" && lastNameLetter <= "z" ? 1 : 0;
      info.states.state = info.states.state ? info.states.state + 1 : 1;

      switch (age) {
        case age <= 20:
          info.ageRanges["0-20"] += 1;
          break;
        case age <= 40:
          info.ageRanges["21-40"] += 1;
          break;
        case age <= 60:
          info.ageRanges["41-60"] += 1;
          break;
        case age <= 80:
          info.ageRanges["61-80"] += 1;
          break;
        case age <= 100:
          info.ageRanges["81-100"] += 1;
          break;
        case age > 100:
          info.ageRanges["100+"] += 1;
          break;
      }
    }
    return info;
  }

  handleChange(e) {
    e.preventDefault();
    try {
      let results = JSON.parse(e.target.value).results;
      let info = this.parseJSON(results);
      this.setState({value: e.target.value, info: info, hasError: false});
    } catch (e) {
      this.setState({value: "", hasError: true, info:{}})
    }
  }

  render () {
    return(
      <div>
        <textarea rows="30" cols="70" value={this.state.value} placeholder="Paste JSON Info" onChange={this.handleChange}/>
        <Charts info={this.state.info} />
      </div>
    );
  }
}

export default JSONInput;
