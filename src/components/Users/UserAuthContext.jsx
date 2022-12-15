import { createContext, useContext, useEffect, useState } from 'react';

const UserAuthContext = createContext({
    userAuthenticated: null,
});

// export useAuth = () => useContext(UserAuthContext);

const UserAuthProvider = ({ children }) => {
  const [userAuthenticated, setUserAuthenticated] = useState(null);

  useEffect(() => {
    const hasToken = async () => {
        const token = await localStorage.token;
        setUserAuthenticated(token)
    }
    hasToken()
  }, [userAuthenticated]);

  return (
    <UserAuthContext.Provider value={{ userAuthenticated }}>
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthProvider;