import React from 'react';

export default class OneList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        pathUrl: '',
        other: '',
      }
    }
  
    render() {
      return (
        <div>
          第一个标签one
        </div>
      );
    }
  }