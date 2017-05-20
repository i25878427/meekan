import React,{Component} from 'react'
import './poll_footer.scss'
import FontAwesome from 'react-fontawesome'

export default class PollFooter extends Component {
  render() {
    const { participantsCount } = this.props
    return (
        <div className="footer">
          <div>
            <FontAwesome name="comment" />
            <span>2</span>
          </div>
          <div>
            <FontAwesome name="users" />
            <span>{participantsCount}</span>
          </div>
        </div>
    )
  }
}

