import React, { useContext, useReducer, useLayoutEffect } from 'react';
import ThemeContext from '../../context';

import themeReducer from '../../reducer';

const DARK_MODE_CLASS = 'dark-mode';

export default function App({ children }) {
  const initialState = useContext(ThemeContext);
  const [state, dispatch] = useReducer(themeReducer, initialState);
  
  const {
     theme,
  } = state;

  useLayoutEffect(() => {
    switch (theme) {
      case 'dark':
        document.body.classList.add(DARK_MODE_CLASS);
        break;
      default:
        document.body.classList.remove(DARK_MODE_CLASS);
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ state, dispatch}}> 
        {children}  
    </ThemeContext.Provider>
  )
}
