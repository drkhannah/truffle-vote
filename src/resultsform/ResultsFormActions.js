import VotingContract from '../../build/contracts/Voting.json'
import store from '../store'

const contract = require('truffle-contract')

export const TOTAL_VOTES = 'TOTAL_VOTES'

function totalVotes(votes) {
    return {
        type: TOTAL_VOTES,
        payload: votes
    }
}

export function GetTotals() {
    let web3 = store.getState().web3.web3Instance

    // Double-check web3's status.
    if (typeof web3 !== 'undefined') {

        return function (dispatch) {
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

                voting.deployed().then(function (instance) {
                    votingInstance = instance

                    // Attempt to vote.
                    votingInstance.getAllVotes()
                        .then(function (result) {
                            //your vote is cast
                            dispatch(totalVotes({"totalVotesForCandidates": result}))
                        })
                        .catch(function (error) {
                            // If error...
                            console.log(error)
                        })
                })
            })
        }
    } else {
        console.error('Web3 is not initialized.');
    }
}
