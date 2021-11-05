/** @format */

import { ActionType } from '../actionTypes/index';

interface SearchRepoAction {
  type: ActionType.SEARCH_REPO;
}

interface SearchRepoSucessAction {
  type: ActionType.SEARCH_REPO_SUCESS;
  payload: string[];
}

interface SearchRepoErrorAction {
  type: ActionType.SEARCH_REPO_ERROR;
  payload: string;
}

export type Action =
  | SearchRepoAction
  | SearchRepoSucessAction
  | SearchRepoErrorAction;
