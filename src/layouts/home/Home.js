import React, {Component} from 'react'
import logo from '../../logo2x.png'

class Home extends Component {
    render() {
        return (
            <main className="container">
                <div className="pure-g">
                    <div className="pure-u-1-1" style={{marginTop: "100px",textAlign: "center"}}>
                        <img src={logo} />
                    </div>
                </div>
            </main>
        )
    }
}

export default Home
