import { FETCHING_DOCUMENTS, FETCHED_DOCUMENTS, ERROR_FETCHED_DOCUMENTS} from '../actions/actionTypes';


export default function rootReducer(state, action) {
  switch(action.type) {
    case FETCHING_DOCUMENTS: 
      return {
        ...state,
        documents: {
          isFething: true,
          error: null,
          data: [...state.documents.data]
        }
      }
    case FETCHED_DOCUMENTS: 
      return {
        ...state,
        documents: {
          isFething: false,
          error: null,
          data: action.data
        }
      }
    case ERROR_FETCHED_DOCUMENTS:
      return {
        ...state,
        documents: {
          isFething: false,
          error: action.error,
          data: state.documents.data
        }
      }
    default: return state;
  }
};