import React, { Component } from 'react'
import ResultsFormContainer from '../../resultsform/ResultsFormContainer'

class Results extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Results</h1>
            <p><strong>Congratulations {this.props.authData.name}!</strong> Here are the current results</p>
            <ResultsFormContainer/>
          </div>
        </div>
      </main>
    )
  }
}

export default Results
