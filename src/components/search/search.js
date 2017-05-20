import React,{Component} from 'react'
import FontAwesome from 'react-fontawesome'
import './search.scss';

export default class Search extends Component {
  render() {
    return (
      <div className="Search">
        <FontAwesome name='search'/>
        <input type="text" placeholder="Search" />
      </div>
    );
  }
}



