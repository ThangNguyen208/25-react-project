import { useEffect, useState } from "react";

export const SearchAutocomplete = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const fetchListOfUsers = async () => {
    try {
        
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    fetchListOfUsers();
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
