import { useState, useId } from 'react'
import './App.css'
import countries from "./assets/countries.json";
import languages from "./assets/languages.json";
import { Selector } from "./components/Selector";
import { Output } from './components/Output';

function App() {
    const [country, setCountry] = useState('');
    const [language, setLanguage] = useState('');
    const changeCountry = e => setCountry(e.target.options[e.target.selectedIndex].innerHTML)
    const changeLanguage = e => setLanguage(e.target.options[e.target.selectedIndex].innerHTML)

    return (
        <main className='main'>
            <h1>Selector</h1>
            <div className="card">
                <Selector 
                    data={countries} 
                    txtDefault="Select country" 
                    onChange={changeCountry}
                    />
            </div>
            <div className="card">
                <Selector 
                    data={languages} 
                    txtDefault="Select language" 
                    onChange={changeLanguage}
                    />
            </div>
            <div className="card">
                <Output data={country}>Selected country</Output>
            </div>
            <div className="card">
                <Output data={language}>Selected language</Output>
            </div>
        </main>
    )
}

export default App