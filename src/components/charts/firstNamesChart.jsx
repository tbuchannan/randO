import React from 'react'


const FirstNamesChart = (props) => {
  const {firstNameAM, firstNameNZ} = props;
  return (
    <div> A-M:{firstNameAM} N-Z:{firstNameNZ} </div>
  )
}

export default FirstNamesChart;
