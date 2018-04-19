import React from 'react';
import MaleFemaleChart from './maleFemaleChart';
import FirstNamesChart from './firstNamesChart';
import LastNamesChart from './lastNamesChart';

const Charts = props =>  {
  const { info } = props;
    return (
      <div> Chart Info
        <MaleFemaleChart male={info.male} female={info.female} />
        <FirstNamesChart firstNameAM={info.firstNameAM} firstNameNZ={info.firstNameNZ} />
        <LastNamesChart lastNameAM={info.lastNameAM} lastNameNZ={info.lastNameNZ} />
        <div> Total: {info.total} </div>
      </div>
    );
  }

export default Charts;
