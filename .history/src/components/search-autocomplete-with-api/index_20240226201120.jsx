import { useEffect, useState } from "react";

export const SearchAutocomplete = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchListO
  }, []);
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
