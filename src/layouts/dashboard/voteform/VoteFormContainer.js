import { connect } from 'react-redux'
import VoteForm from './VoteForm'
import { VoteForCandidate } from './VoteFormActions'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onVoteFormSubmit: (candidate) => {
      event.preventDefault();

      dispatch(VoteForCandidate(candidate))
    }
  }
}

const VoteFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VoteForm)

export default VoteFormContainer
