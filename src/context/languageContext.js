import React, { createContext, useCallback, useMemo } from 'react'
import { useTranslation } from "react-i18next";
const LangContext = createContext()
function LangProvider({ children }) {
    const { i18n } = useTranslation();
    const changLanguage = useCallback((lang) => { i18n.changeLanguage(lang) }, [i18n])
    const langAndDir = useMemo(() => { return { lang: i18n.language } }, [i18n.language])

    return (
        <LangContext.Provider value={{ changLanguage, langAndDir }}>
            {children}
        </LangContext.Provider>
    )
}

export { LangContext, LangProvider }