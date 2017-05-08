import axios from 'axios'

export default function verifyMvn() {
  return (dispatch) => {
    return axios.get('/api/verify')
  }
}
