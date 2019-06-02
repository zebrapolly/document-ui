import { FETCHING_DOCUMENTS, FETCHED_DOCUMENTS, ERROR_FETCHED_DOCUMENTS} from '../actions/actionTypes';

export const requesDocuments = () => ({
  type: FETCHING_DOCUMENTS,
});

export const recieveDocuments = data => ({
  type: FETCHED_DOCUMENTS,
  data,
});

export const recieveError = err => ({
  type: ERROR_FETCHED_DOCUMENTS,
  err
})

export function fetchDocuments(channel) {
  return function (dispatch) {
    dispatch(requesDocuments());
    return fetch('/documents')
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error),
      )
      .then((json) => {
        console.log('json', json)
        dispatch(recieveDocuments(json));
      })
    .catch(err => {
      dispatch(recieveError(err))
    });
  };
 }