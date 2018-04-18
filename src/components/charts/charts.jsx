import React from 'react';
import MaleFemaleChart from './maleFemaleChart';
import FirstNamesChart from './firstNamesChart';
import LastNamesChart from './lastNamesChart';

class Charts extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      male: 0,
      female: 0,
      firstNameAM: 0,
      lastNameAM: 0,
      firstNameNZ: 0,
      lastNameNZ: 0,
      states: [],
      ageRanges: [],
      total: 0
    }
  }

  render () {
    return (
        <div> Chart Info
          <MaleFemaleChart male={this.state.male} female={this.state.female} />
          <FirstNamesChart firstNameAM={this.state.firstNameAM} firstNameNZ={this.state.firstNameNZ} />
          <LastNamesChart lastNameAM={this.state.lastNameAM} lastNameNZ={this.state.lastNameNZ} />
          <div> Total </div>
          <div>{this.state.total}</div>
        </div>

    );
  }
}

export default Charts;
