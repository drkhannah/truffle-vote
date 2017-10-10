import React, { Component } from 'react'
import VoteFormContainer from '../../voteform/VoteFormContainer'

class Dashboard extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Ballet</h1>
            <p><strong>Congratulations {this.props.authData.name}!</strong> Please cast your vote on the following issue:</p>
            <VoteFormContainer/>
          </div>
        </div>
      </main>
    )
  }
}

export default Dashboard
