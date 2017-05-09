import axios from 'axios'

export default function getSteps() {
  return (dispatch) => {
    return axios.get('/api/steps')
  }
}
