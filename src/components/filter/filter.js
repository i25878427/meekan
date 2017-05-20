import React,{Component} from 'react'
import FontAwesome from 'react-fontawesome'
import './filter.scss' 

export default class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <div>some filter</div>
        <FontAwesome name="caret-down" />
      </div>
    );
  }
}

