import React from 'react'
import PropTypes from 'prop-types'

class Widget extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      people = [];
    }

    this.handleChange(e) {
      e.preventDefault();
      this.setState()
    }
  }

  render () {

  }
}

export default Widget;
