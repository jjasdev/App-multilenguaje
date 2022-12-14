import './App.css'
import Header from './components/Header';
import Content from './components/Content';
import { LanguageProvider } from './context/LanguageContext'

function App() {
  
  return (
    <LanguageProvider>
      <Header />
      <Content />
    </LanguageProvider>
  )
}

export default App;
