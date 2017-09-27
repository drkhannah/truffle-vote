import React, { Component } from 'react'

class VoteForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedCandidate: '',
        candidates: ["Derek", "Kelly", "Harper"]
    }
  }

  onInputChange(event) {
    this.setState({ selectedCandidate: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.onVoteFormSubmit(this.state.selectedCandidate)
  }

  render() {
    return(
      <form className="pure-form pure-form-stacked" onSubmit={this.handleSubmit.bind(this)}>
        <fieldset>
          <label htmlFor="name0">{this.state.candidates[0]}</label>
          <input id="name0" type="radio" value={this.state.candidates[0]} onChange={this.onInputChange.bind(this)} />

          <label htmlFor="name1">{this.state.candidates[1]}</label>
          <input id="name1" type="radio" value={this.state.candidates[1]} onChange={this.onInputChange.bind(this)} />

          <label htmlFor="name2">{this.state.candidates[2]}</label>
          <input id="name2" type="radio" value={this.state.candidates[2]} onChange={this.onInputChange.bind(this)} />

          <br />

          <button type="submit" className="pure-button pure-button-primary">Vote</button>
        </fieldset>
      </form>
    )
  }
}

export default VoteForm
