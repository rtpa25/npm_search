/** @format */
import { ActionType } from '../actionTypes/index';
import { Action } from '../actions/index';

interface RepoState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const repoReducer = (
  state: RepoState = initialState,
  action: Action
): RepoState => {
  switch (action.type) {
    //action is SearchRepoAction type
    case ActionType.SEARCH_REPO:
      return { loading: true, error: null, data: [] };
    //action is SearchRepoSucessAction
    case ActionType.SEARCH_REPO_SUCESS:
      return { loading: false, error: null, data: action.payload };
    //action is SearchRepoErrorAction
    case ActionType.SEARCH_REPO_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default repoReducer;
