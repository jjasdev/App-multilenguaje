import { useContext } from "react"
import LanguageContext from "../context/LanguageContext"

const Content = () => {
  const { texts, handleLanguage } = useContext(LanguageContext);
  
  return (
    <div>
      <h1>{texts.headerTitle}</h1>
      <p>{texts.parragraph}</p>
    </div>
  )
}

export default Content