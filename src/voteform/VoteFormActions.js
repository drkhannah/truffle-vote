import VotingContract from '../../build/contracts/Voting.json'
import store from '../store'
import { browserHistory } from 'react-router'

const contract = require('truffle-contract')

export function VoteForCandidate(candidate) {
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
                    votingInstance.voteForCandidate(candidate, {from: coinbase})
                        .then(function (result) {
                            //your vote is cast
                            return browserHistory.push('/results')
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
