import React,{Component} from 'react'
import Search from '../../containers/search/search'
import Filter from '../filter/filter'
import './header.scss'

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Search />
        <Filter />
      </div>
    );
  }
}
