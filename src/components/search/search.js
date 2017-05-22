import React,{Component} from 'react'
import FontAwesome from 'react-fontawesome'
import './search.scss'

export default class Search extends Component {
  constructor() {
    super()
    this.searchPoll = this.searchPoll.bind(this)
  }
  searchPoll (event) {
    debugger
    this.props.searchBy(event.target.value)
  }
  render() {
    return (
      <div className="Search">
        <FontAwesome name='search'/>
        <input type="text" placeholder="Search" onChange={this.searchPoll} />
      </div>
    )
  }
}
