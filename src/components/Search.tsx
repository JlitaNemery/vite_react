import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';

interface SearchProps {
  setSearchVal: Function
}

export default function Search({ setSearchVal }: SearchProps) {
  const [text, setText] = useState('');
  const [value] = useDebounce(text, 300);

  useEffect(() => {
    setSearchVal(value);
  }, [value]);

  return (
    <div>
      <input
        defaultValue={''}
        placeholder='Search here'
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </div>
  );
}