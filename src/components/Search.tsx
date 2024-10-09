import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import { Box, Editable, EditableInput, EditablePreview } from '@chakra-ui/react';

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
    <Box
      margin='15px'
    >
      <Editable
        defaultValue=''
        placeholder='Search here'
        onChange={(value) => {
          setText(value);
        }}
      >
        <EditablePreview />
        <EditableInput />
      </Editable>
    </Box>
  );
}