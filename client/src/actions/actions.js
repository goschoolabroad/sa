export const FETCH_RESULTS_PENDING = 'FETCH_RESULTS_PENDING';
export const FETCH_RESULTS_RECEIVED = 'FETCH_RESULTS_RECEIVED';
export const FETCH_RESULTS_REJECTED = 'FETCH_RESULTS_REJECTED';

export const requestResults = () => {
  return { type: FETCH_RESULTS_PENDING };
};

export const rejectResults = (error) => {
  return { type: FETCH_RESULTS_REJECTED, error };
};

export const receiveResults = () => {
  return { type: FETCH_RESULTS_RECEIVED };
};

// export const getSchoolsList = () {
//   return dispatch => {
//     dispatch(requestResults);
//     return fetch("/schools", {
//       method: "GET",
//       headers: new Headers({
//         'Content-type' : 'application/json'
//       })
//     })
//     .then(response => response.json(),
//     error => dispatch(rejectResults(error)))
//     .then(json => dispatch(receiveResults(json)));
//   }
// }