import { useState, createContext } from 'react';

export const ReloadingContext = createContext();

export default function ReloadingProvider({ children }) {
    const [reload, setReload] = useState(0);
    return <ReloadingContext.Provider value={{ reload, setReload }}>{children}</ReloadingContext.Provider>;
}
