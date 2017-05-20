import React,{Component} from 'react'
import './poll.scss'
import FontAwesome from 'react-fontawesome'
import PoolFooter from './poll_footer'
export default class Poll extends Component {
  constructor() {
    super()
    this.renderDate = this.renderDate.bind(this)
  }
  renderDate (creationDate) {
    const d = new Date(creationDate)
    return d.getYear()
  }
  
  render() {
    const { title, initiator, creationDate, participantsCount } = this.props
    return (
      <div className="poll">
        <div>{title}</div>
        <div className="sub-title">
          <div>by {initiator}</div>
          <div>{this.renderDate(creationDate)}</div>
        </div>
        <hr />
        <PoolFooter participantsCount={participantsCount} />
      </div>
    );
  }
}

