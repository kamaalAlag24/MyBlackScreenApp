import React, { createContext, useState, ReactNode } from 'react';

type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
};

type UserContextType = {
  user: User | null;
  register: (user: User) => void;
  updateProfile: (user: User) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const register = (newUser: User) => {
    setUser(newUser);
  };

  const updateProfile = (updatedUser: User) => {
    setUser(updatedUser);
  };

  return (
    <UserContext.Provider value={{ user, register, updateProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
