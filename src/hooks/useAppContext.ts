import { useContext } from 'react'
import { AppContext } from '../provider/contextProvider';

 export const useAppContext = () => useContext(AppContext);

