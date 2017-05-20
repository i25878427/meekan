import React,{Component} from 'react'
import Header from '../header/header'
import Poll from './poll'
export default class Polls extends Component {
  constructor(){
    super()
    this.renderPolls = this.renderPolls.bind(this)
  }
  componentDidMount() {
    this.props.init()    
  }
  componentWillReceiveProps(nextProps) {
    debugger
  }
  renderPolls(){
    debugger
    const { polls } = this.props
    const pollsKeys = Object.keys(polls)
    const allPolls = pollsKeys.length > 0 && pollsKeys.map((key) => {
      debugger
      const pollDetails = polls[key]
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
    debugger
    
    return (
      <div>
        <Header />
        {this.renderPolls()}
      </div>
    );
  }
}

