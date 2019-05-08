import React from 'react'
import { withRouter } from 'react-router-dom'
import '../scss/SurveyModal.scss'
import SurveyModalEscape from '../images/survey-modal-escape.svg'

class SurveyModal extends React.Component {

  state = {location: '', tagCount: 0}

  headerText = () => {
    if (this.props.questionNumber) {
      return <h1 className='survey-header-text'>Question {this.props.questionNumber} / 16</h1>
    }
  }

  bodyText = () => {
    if (this.props.questionBody && this.props.questionNumber === '8') {
      let words = this.props.questionBody.question.split('(');
      let parentheses = '('
      let secondSection = parentheses + words[1]
      let wholeSection = <div className="q8-first">{words[0]}<div className="q8-second">{secondSection}</div></div>;
      return <div className='survey-body-text question-8'>{wholeSection}</div>
    } else if (this.props.questionBody) {
      return <div className='survey-body-text'>{this.props.questionBody.question}</div>
    }
  }

  selectionType = () => {
    let type = this.props.questionBody.type;
    switch (type) {
      case 'major':
        return this.majorSelection();
      case 'rank':
        return this.rankSelection();
      case 'binary':
        return this.binarySelection();
      case 'location':
        return this.locationSelection();
      default:
        return;
    }
  }

  majorSelection = () => {
    return (
        <select className="survey-select">
          <option value="0">Select major:</option>
          <option value="1">Art</option>
          <option value="2">Biology</option>
          <option value="3">Business</option>
          <option value="4">Chemistry</option>
          <option value="5">Communications</option>
          <option value="6">Computer Science</option>
          <option value="7">Design</option>
          <option value="8">Economics</option>
          <option value="9">Engineering</option>
          <option value="10">History</option>
          <option value="11">Nursing</option>
          <option value="12">Physics</option>
          <option value="13">Other / Undecided</option>
        </select>
    )
  }


  rankSelection = () => {
    return(
      <div className="rank-selection">
        <hr className="rank-line" />
        <div className="not-desired-text">Not desired</div>
        <div className="not-desired-circle rank-circle" onClick={this.handleCircleChoice}></div>
        <div className="not-important-text">Not important</div>
        <div className="not-important-circle rank-circle" onClick={this.handleCircleChoice}></div>
        <div className="neutral-text">Neutral</div>
        <div className="neutral-circle rank-circle" onClick={this.handleCircleChoice}></div>
        <div className="little-importance-text">A little important</div>
        <div className="little-importance-circle rank-circle" onClick={this.handleCircleChoice}></div>
        <div className="very-important-text">Very Important</div>
        <div className="very-important-circle rank-circle" onClick={this.handleCircleChoice}></div>
      </div>
    )
  }

  binarySelection = () => {
    return (
      <div className="binary-container">
        <div className="binary-yes binary-choice" onClick={this.handleBinaryChoice}>Yes</div>
        <div className="binary-no binary-choice" onClick={this.handleBinaryChoice}>No</div>
      </div>
    )
  }

  locationSelection = () => {
    return (
      <div className="location-container">
        <input type="text" onKeyDown={this.handleEnterPress} onChange={this.handleLocationChoice} className="location-tag-input" value={this.state.location} />
      </div>
    )
  }

  handleLocationChoice = e => {
    let value = e.target.value
    if (value.length > 2) {
      this.setState({location: value.slice(0, 2).toUpperCase()})
    } else {
      this.setState({location: e.target.value.toUpperCase()})
    }
  }

  handleEnterPress = e => {
    if (e.key === 'Enter') {
      this.produceTab();
      this.setState({location: ''})
    } else if (e.key === 'Backspace' && this.state.location === '') {
      let firstEl, secondEl, thirdEl, fourthEl;
      let input = document.querySelector('.location-tag-input')
      firstEl = document.querySelector('.location-0');
      secondEl = document.querySelector('.location-1');
      thirdEl = document.querySelector('.location-2');
      fourthEl = document.querySelector('.location-3');
      if (fourthEl && thirdEl && secondEl && firstEl) {
        fourthEl.remove();
        input.classList.toggle('tag-3');
        this.setState({tagCount: 3})
      } else if (thirdEl && secondEl && firstEl) {
        thirdEl.remove();
        input.classList.toggle('tag-2');
        this.setState({tagCount: 2})
      } else if (secondEl && firstEl) {
        secondEl.remove();
        input.classList.toggle('tag-1');
        this.setState({tagCount: 1})
      } else if (firstEl) {
        firstEl.remove();
        input.classList.toggle('tag-0');
        this.setState({tagCount: 0});
      }
    }
  }

  produceTab = () => {
   let el = document.createElement('div');
   let locationDiv = document.querySelector('.location-container');
   if (this.state.tagCount === 0) {
    locationDiv.appendChild(el);
   } else if (this.state.tagCount === 1) {
    let firstTag = document.querySelector('.location-0');
    locationDiv.insertBefore(el, firstTag);
   } else if (this.state.tagCount === 2) {
    let secondTag = document.querySelector('.location-1');
    locationDiv.insertBefore(el, secondTag);
   } else if (this.state.tagcount === 3) {
    let thirdTag = document.querySelector('.location-2');
    locationDiv.insertBefore(el, thirdTag);
   }
   el.className = `location-${this.state.tagCount} location-tag`;
   let textDiv = document.createElement('div');
   textDiv.className = 'location-text';
   textDiv.innerText = this.state.location;
   let input = document.querySelector('.location-tag-input');
   input.classList.toggle(`tag-${this.state.tagCount}`);
   el.appendChild(textDiv);
   this.setState({tagCount: this.state.tagCount + 1});
  }

  handleCircleChoice = e => {
    let list = document.querySelectorAll('.rank-circle');
    list.forEach(el => {
      let classList = [...el.classList]
      if (classList.includes('picked-circle')) {
        el.classList.toggle('picked-circle')
      }
    })
    e.target.classList.toggle('picked-circle');
  }

  handleBinaryChoice = e => {
    let list = document.querySelectorAll('.binary-choice');
    list.forEach(el => {
      let classList= [...el.classList]
      if (classList.includes('picked-binary')) {
        el.classList.toggle('picked-binary')
      }
    })
    e.target.classList.toggle('picked-binary')
  }

  handleEscape = () => {
    let message = "Please be aware that exiting out of this survey will discard any question choices you have made"
    if (window.confirm(message)) {
      this.props.history.push("/intellimatch")
    } else {
      return
    }
  }

  bodyPullCheck = () => {
    let body = document.querySelector('.survey-body-text')
    body.classList.remove('body-pull')
    if (this.props.questionBody.type === 'rank' && this.props.questionNumber !== '15') {
      body.classList.toggle('body-pull')
    }
  }

  tagChecker = () => {
    if (this.props.questionNumber !== '8') {
      let tags = document.querySelectorAll('.location-tag');
      if (tags.length > 0) {
        tags.forEach( tag => tag.style.display = 'none')
      }
    } else if (this.props.questionNumber === '8') {
      let tags = document.querySelectorAll('.location-tag');
      if (tags.length > 0) {
        let input = document.querySelector('.location-tag-input');
        input.style.order = "1";
        tags.forEach( tag => {
          tag.style.display = 'flex'
        })
        let num = tags.length;
        for (let i = 0; i < num; i++) {
          let input = document.querySelector('.location-tag-input');
          let thisTag = document.querySelector(`.location-${i}`);
          thisTag.style.order = `${num + 1 - i}`
          let name = `tag-${i}`;
          input.classList.toggle(name);
        }
      }
    }
  }

  componentDidMount() {
    this.bodyPullCheck();
  }

  componentDidUpdate(prevProps) {
    if (this.props.questionBody !== prevProps.questionBody) {
      this.bodyPullCheck();
      this.tagChecker();
    }
  }

  render() {
    return(
        <div className="survey-modal">
          <div className="survey-modal-header">
            <div className="survey-modal-header-pt1">
              {this.headerText()}
            </div>
            <div className="survey-modal-header-pt2">
              <img className="survey-escape-btn" src={SurveyModalEscape} alt="close" onClick={this.handleEscape} />
            </div>
          </div>
          <div className="survey-modal-body">
            {this.bodyText()}
            {this.selectionType()}
          </div>
        </div>
      )
  }

}

export default withRouter(SurveyModal)
