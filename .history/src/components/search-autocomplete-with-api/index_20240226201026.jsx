import { useState } from "react";

export const SearchAutocomplete = () => {
    const [loading, setLoading] = useState

  return (
    <div className="search-autocomplete-container">
      <input
        type="text"
        name="search-users"
        placeholder="Search Users here..."
      />
    </div>
  );
};
