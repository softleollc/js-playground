import {
  CODE_RUN_ERROR,
  CODE_RUN_SUCCESS,
  TOGGLE_MODAL,
  UPDATE_CODE,
  CODE_RUNNING
} from '../actions/types';

const INITIAL_STATE = {
  code: '',
  result: '',
  error: '',
  loading: false,
  display: 'none'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CODE_RUNNING:
      return { ...state, loading: true };
    case UPDATE_CODE:
      return {
        ...state,
        code: action.payload,
        loading: false
      };
    case CODE_RUN_SUCCESS:
      const result = action.payload ? `${action.payload}` : '';
      return { ...state, result, error: '', loading: false };
    case CODE_RUN_ERROR:
      return { ...state, error: action.payload, result: '', loading: false };
    case TOGGLE_MODAL:
      const display = state.display === 'none' ? 'block' : 'none';
      return { ...state, display };
    default:
      return state;
  }
};
