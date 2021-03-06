import React, { useEffect, useState } from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={e => setFilter({ ...filter, query: e.target.value })}
        placeholder={'share...'}
      />

      <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
        defaultValue='Sort by'
        options={[
          { value: 'title', name: 'name' },
          { value: 'body', name: 'descr' },
        ]}
      />
    </div>
  );
};

export default PostFilter;
