/** @format */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const RepoList: React.FC = () => {
  const [term, setTerm] = useState('');

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={term}
          type='text'
          onChange={(e) => setTerm(e.target.value)}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default RepoList;
