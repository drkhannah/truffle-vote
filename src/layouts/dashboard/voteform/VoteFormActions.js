import VotingContract from '../../../../build/contracts/Voting.json'
//import { loginUser } from '../loginbutton/LoginButtonActions'
import store from '../../../store'

const contract = require('truffle-contract')

export function VoteForCandidate(candidate) {
  let web3 = store.getState().web3.web3Instance

  // Double-check web3's status.
  if (typeof web3 !== 'undefined') {

    return function(dispatch) {
      // Using truffle-contract we create the voting object.
      const voting = contract(VotingContract)
        voting.setProvider(web3.currentProvider)

      // Declaring this for later so we can chain functions on it.
      var votingInstance;

      // Get current ethereum wallet.
      web3.eth.getCoinbase((error, coinbase) => {
        // Log errors, if any.
        if (error) {
          console.error(error);
        }

        voting.deployed().then(function(instance) {
          votingInstance = instance

          // Attempt to vote.
            votingInstance.voteForCandidate(candidate, {from: coinbase}).then(function (result) {
                votingInstance.totalVotesFor.call(candidate).then(function(result) {
                            // If no error, total votes for candidate
                            console.log("Total Votes For Candidate:" + JSON.stringify(result))
                            //return dispatch(loginUser())
                        })
                        .catch(function(error) {
                            // If error...
                            console.log("totalVotesFor error: " + error)
                        })
                })
                .catch(function(error) {
                    // If error...
                    console.log("voteForCandidate error: " + error)
                })
        })
      })
    }
  } else {
    console.error('Web3 is not initialized.');
  }
}
