import './App.css';
import headshot from './components/helmet_headshot.jpg';
import resume from './components/Eric_Yuyitung_Resume.pdf'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={headshot} className="headshot" />
        <h2>Eric Yuyitung</h2>
        <p>4th Year Mathematics & Engineering Student at Queen's University in Canada</p>
        <ul className='links'>
          <li> <a href='https://linkedin.com/in/eric-yuyitung' target='_blank' rel='noopener noreferrer'>linkedin </a></li>
          <li> <a href='https://github.com/eyuyitung' target='_blank' rel='noopener noreferrer'>github </a></li>
          <li> <a href={resume} target='_blank' rel='noopener noreferrer'>résumé</a></li>
        </ul>
      </header>
    </div>
  );
}

export default App;
