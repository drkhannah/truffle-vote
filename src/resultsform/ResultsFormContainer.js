import { connect } from 'react-redux'
import ResultsForm from './ResultsForm'
import { GetTotals } from './ResultsFormActions'

const mapStateToProps = (state, ownProps) => {
  return {
    allVotes: state.totalVotes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetTotals: () => {
      dispatch(GetTotals())
    }
  }
}

const ResultsFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultsForm)

export default ResultsFormContainer
