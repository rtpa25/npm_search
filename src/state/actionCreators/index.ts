/** @format */

import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../actionTypes/index';
import { Action } from '../actions/index';

export const SearchRepo = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPO,
    });

    try {
      const { data } = await axios.get(
        'https://registry.npmjs.org/-/v1/search',
        {
          params: {
            text: term,
          },
        }
      );
      const names = data.object.map((item: any) => {
        return item.package.name;
      });
      dispatch({
        type: ActionType.SEARCH_REPO_SUCESS,
        payload: names,
      });
    } catch (err) {
      dispatch({
        type: ActionType.SEARCH_REPO_ERROR,
        payload: err.message,
      });
    }
  };
};
