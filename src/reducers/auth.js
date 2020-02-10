export default (state = {}, action) => {
  // Handle cases
  switch (action.type) {
    // Login
    case "LOGIN":
      // Return new state
      return {
        uid: action.uid
      };
    // Logout
    case "LOGOUT":
      // Return empty object on logout
      return {};
    // Default
    case "DEFAULT":
      return state;
  }
};
