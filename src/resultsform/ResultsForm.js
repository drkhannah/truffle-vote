import React, {Component} from 'react'

class ResultsForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            totalVotes: this.props.allVotes,
            candidates: ["Derek", "Kelly", "Harper"],
        }
    }

    createResultList() {
        if (this.props.allVotes.data !== null) {
            return this.props.allVotes.data.totalVotesForCandidates.map((result, idx) => {
                return (
                    <li key={idx}>
                        {result.c[0]}
                    </li>
                )
            })
        }
    }

    componentDidMount() {
        this.props.onGetTotals()
    }

    render() {
        return (
            <ul>
                {this.createResultList()}
            </ul>
        )
    }
}

export default ResultsForm
