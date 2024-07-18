const API_URL = 'http://localhost:5000/api/users';

export const signup = async (userData) => {
  const response = await fetch(`${API_URL}/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  });
  return response.json();
};

export const getUser = async (id) => {
  const response = await fetch(`${API_URL}/profile/${id}`);
  return response.json();
};

// Add more API functions as needed
