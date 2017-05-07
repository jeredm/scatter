import axios from 'axios';

export function verifyMvn() {
  return dispatch => {
    return axios.get('/api/verify');
  }
}
