import React,{Component} from 'react'
import Header from '../header/header'
import Poll from './poll'
export default class Polls extends Component {
  constructor(){
    super()
    this.renderPolls = this.renderPolls.bind(this)
    this.state = {
      list: {}
    }
  }
  componentDidMount() {
    this.props.init()
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.polls.list.length !== nextProps.polls.list) {
      this.setState({
        list: nextProps.polls.list
      })
    }
    if (this.props.search.searchValue !== nextProps.search.searchValue) {
      const list = this.props.polls.list.filter((poll) => {
        return (poll.title.toLowerCase().indexOf(nextProps.search.searchValue.toLowerCase()) > -1) ||
                (poll.initiator.name.toLowerCase().indexOf(nextProps.search.searchValue.toLowerCase()) > -1)
      })
      this.setState({
        list
      })
    }
  }
  renderPolls(){
    const polls = this.state.list
    const allPolls = polls.length > 0 && polls.map((pollDetails) => {
    return (<Poll
              key={pollDetails.id}
              title={pollDetails.title}
              initiator={pollDetails.initiator.name}
              creationDate={pollDetails.initiated}
              participantsCount={pollDetails.participantsCount}
               />
            )
    })
    return  allPolls
  }
  render() {
    return (
      <div>
        <Header />
        {this.renderPolls()}
      </div>
    );
  }
}
