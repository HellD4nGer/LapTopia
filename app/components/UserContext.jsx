// UserContext.js
import { createContext } from 'react';

export const UserContext = createContext({
  isAdmin: false,
  userData: null,
});