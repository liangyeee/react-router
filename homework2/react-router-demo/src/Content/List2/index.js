import React from 'react';

export default class TwoList extends React.Component {
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
          第二个标签two
        </div>
      );
    }
  }