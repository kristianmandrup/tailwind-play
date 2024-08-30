// components/SearchBar.tsx
import React, { useState } from 'react';
import { Input } from '@nextui-org/react';
import { IconSearch, IconX } from '@tabler/icons-react'; // Adjust icon import based on available icons

const SearchBar: React.FC = () => {
  const [value, setValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClear = () => {
    setValue('');
  };

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-10 w-1/2 max-w-xl">
      <div className="relative flex items-center">
        <Input
          value={value}
          onChange={handleChange}
          placeholder="Search..."
          width="100%"
          className="bg-gray-800 text-white pl-10"
          aria-label="Search input"
        />
        <IconSearch
          size={20}
          className="absolute left-3 text-gray-400"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        />
        {value && (
          <button
            onClick={handleClear}
            className="absolute right-3 text-gray-400"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
            aria-label="Clear search input"
          >
            <IconX size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
