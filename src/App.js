import './App.css';
import SearchEngine from "./SearchEngine.js"



export default function App() {
  return (
    <div className="App">
     <div className= "row Header">
     <div className= "col">
    
       <img src="https://www.shecodes.io/assets/branding/logo-shecodes-f9fa0540d113c086f61eb6e89466c0cbd24a42163b6a96d4b01da078803f53ee.png" width="200px" alt="shecodes-logo" className="img-fluid logo"/>
    
     </div>

     <div className= "col"><h1>DICTIONARY 📚</h1></div>

     </div>
     <SearchEngine />

     <div className="footer">This project was coded by Luzia Fernandes at <a href="https://www.shecodes.io/" target="_blanck">SheCodes</a> and is <a href="https://github.com/LuziaFernandes/dicionary-app.git" target="_blanck">open-sourced</a> on  GitHub and hosted on <a href="https://zen-thompson-229ef2.netlify.app/" target="_blanck"> Netlify</a></div>
    </div>
  );
}

