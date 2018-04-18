import React from 'react'


const LastNamesChart = (props) => {
  const {lastNameAM, lastNameNZ} = props;
  return (
    <div> A-M:{lastNameAM} N-Z:{lastNameNZ} </div>
  )
}

export default LastNamesChart;
