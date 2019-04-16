import React from 'react';

export default class ThreeList extends React.Component {
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
          第三个标签three
        </div>
      );
    }
  }