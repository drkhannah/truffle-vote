import React, {Component} from 'react'

class VoteForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedCandidate: '',
            candidates: ["Derek", "Kelly", "Harper"],
        }
    }

    onInputChange(event) {
        if (event.target.checked) {
            this.setState({selectedCandidate: event.target.value});
        }

    }

    handleSubmit(event) {
        event.preventDefault()
        console.log(this.state.selectedCandidate)
        this.props.onVoteFormSubmit(this.state.selectedCandidate)
    }

    render() {
        return (
            <form className="pure-form pure-form-stacked" onSubmit={this.handleSubmit.bind(this)}>
                <fieldset>
                    <input id="name0" type="radio" value={this.state.candidates[0]}
                           checked={this.state.selectedCandidate === this.state.candidates[0]}
                           onChange={this.onInputChange.bind(this)}/>
                    {this.state.candidates[0]}
                    <br/>
                    <input id="name1" type="radio" value={this.state.candidates[1]}
                           checked={this.state.selectedCandidate === this.state.candidates[1]}
                           onChange={this.onInputChange.bind(this)}/>
                    {this.state.candidates[1]}
                    <br/>
                    <input id="name2" type="radio" value={this.state.candidates[2]}
                           checked={this.state.selectedCandidate === this.state.candidates[2]}
                           onChange={this.onInputChange.bind(this)}/>
                    {this.state.candidates[2]}
                    <br/>
                    <br/>
                    <button type="submit" className="pure-button pure-button-primary">Vote</button>
                </fieldset>
            </form>
        )
    }
}

export default VoteForm
