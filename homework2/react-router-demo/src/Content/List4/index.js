import React from 'react';

export default class FourList extends React.Component {
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
          第四个标签four
        </div>
      );
    }
  }