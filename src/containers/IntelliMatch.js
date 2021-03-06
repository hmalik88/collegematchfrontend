import React from 'react'
import '../scss/IntelliMatch.scss'
import intellimatchLogo from '../images/intellimatch-logo.svg'
import { Link } from 'react-router-dom'



export default class IntelliMatch extends React.Component {

  constructor() {
    super()
    let root = document.querySelector('#root');
    root.className = '';
    root.classList.toggle('intellimatch-root');
  }

  render() {
    return(
      <>
        <div id="first-portion-intellimatch">
          <h1 id="intellimatch-title">IntelliMatch</h1>
        </div>
        <div id="second-portion-intellimatch">
          <div id="second-portion-left-im">
            <div id="im-text">
              Intellimatch is designed to take your choices<br/> and use our in house algorithm to intuitively calculate, rank and provide you with the college choice that is<br/> the best fit for you!
            </div>
          </div>
          <div id="second-portion-right-im">
            <img id="im-logo" src={intellimatchLogo} alt="" />
            <Link className="im-link-survey" to="/intellimatch/1"><div id="im-enter">Begin</div></Link>
          </div>
        </div>
      </>
      )
  }

}
