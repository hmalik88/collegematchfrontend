export default function surveyReducer (state = {
    Q1: '',
    Q2: '',
    Q3: '',
    Q4: '',
    Q5: '',
    Q6: '',
    Q7: '',
    Q8: '',
    Q9: '',
    Q10: '',
    Q11: '',
    Q12: '',
    Q13: '',
    Q14: '',
    Q15: '',
    Q16: '',
    Q17: ''
  }, action) {
  switch (action.question) {
    case 'Q1':
      return {...state, Q1: action.answer};
    case 'Q2':
      return {...state, Q2: action.answer};
    case 'Q3':
      return {...state, Q3: action.answer};
    case 'Q4':
      return {...state, Q4: action.answer};
    case 'Q5':
      return {...state, Q5: action.answer};
    case 'Q6':
      return {...state, Q6: action.answer};
    case 'Q7':
      return {...state, Q7: action.answer};
    case 'Q8':
      return {...state, Q8: action.answer};
    case 'Q9':
      return {...state, Q9: action.answer};
    case 'Q10':
      return {...state, Q10: action.answer};
    case 'Q11':
      return {...state, Q11: action.answer};
    case 'Q12':
      return {...state, Q12: action.answer};
    case 'Q13':
      return {...state, Q13: action.answer};
    case 'Q14':
      return {...state, Q14: action.answer};
    case 'Q15':
      return {...state, Q15: action.answer};
    case 'Q16':
      return {...state, Q16: action.answer};
    case 'Q17':
      return {...state, Q17: action.answer};
    default:
      return state;
  }
}
