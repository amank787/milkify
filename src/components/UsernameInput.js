import { useState } from "react";

const UsernameInput = ({ value, onChange }) => {
  const [error, setError] = useState("");

  const handleUsernameChange = (e) => {
    const username = e.target.value;
    onChange(username);

    if (username.length < 3) {
      setError("Username must be at least 3 characters long.");
    } else {
      setError("");
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="username" className="text-gray-700 font-medium">
        Username:
      </label>
      <input
        type="text"
        id="username"
        placeholder="Enter username"
        value={value}
        onChange={handleUsernameChange}
        required
        autoComplete="username"
        className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default UsernameInput;
