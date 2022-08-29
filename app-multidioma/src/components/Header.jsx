import { useContext } from "react"
import LanguageContext from "../context/LanguageContext"

const Header = () => {
  const { handleLanguage } = useContext(LanguageContext);
  
  return (
    <div className="Header">
        <select name="language" onChange={handleLanguage}>
            <option value="es" selected>ES</option>
            <option value="en" >EN</option>
        </select>
    </div>
  )
}

export default Header