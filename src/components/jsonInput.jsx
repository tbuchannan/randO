import React from 'react';
import Charts from './charts/charts';

class JSONInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      people: [],
      hasError: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.parseJSON = this.parseJSON.bind(this);
  }

  parseJSON(arr) {
    let obj = {};
    let male = 0;
    let female = 0;
    let firstNameAM = 0;
    let lastNameAM =  0;
    let firstNameNZ = 0;
    let lastNameNZ = 0;
    let states = {};
    let ageRanges = {
      "0-20":0,
      "21-40":0,
      "41-60":0,
      "0-20":0,
      "0-20":0,
      "0-20":0,
    };
    let total = arr.length;

    for (let i = 0; i < arr.length; i++) {
      let person = arr[i];
      let firstNameLetter = person.name.first[0].toLowerCase();
      let lastNameLetter = person.name.last[0].toLowerCase();
      let state = person.location.state;

      female += person.gender == "female" ? 1 : 0;
      male += person.gender == "male" ? 1 : 0;
      firstNameAM += firstNameLetter >= "a" && firstNameLetter <= "m" ? 1 : 0;
      firstNameNZ += firstNameLetter >= "n" && firstNameLetter <= "z" ? 1 : 0;
      lastNameAM += firstNameLetter >= "a" && firstNameLetter <= "m" ? 1 : 0;
      lastNameNZ += lastNameLetter >= "n" && lastNameLetter <= "z" ? 1 : 0;
      states[state] = states[state] ? states[state] + 1 : 1;

    }

  }

  handleChange(e) {
    e.preventDefault();
    try {
      let results = JSON.parse(e.target.value).results;
      let info = this.parseJSON(results);
      this.setState({value: e.target.value, people: results, hasError: false});
    } catch (e) {
      this.setState({value: "", hasError: true})
    }
  }

  render () {
    return(
      <div>
        <textarea rows="30" cols="70" value={this.state.value} placeholder="Paste JSON Info" onChange={this.handleChange}/>
        <Charts people={this.state.people} />
      </div>

    );
  }
}

export default JSONInput;
