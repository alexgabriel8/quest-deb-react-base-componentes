import './App.css';
import ModifiedTextList from './components/toggleable-case-paragraphs';
import ShowLabelButtons from './components/show-label-buttons';

function App() {
  return (
    <>
      <main className='main'>
        <ModifiedTextList />
        <ShowLabelButtons />
      </main>

      <footer className='footer'>
        <p>Exercício feito no React!</p>
        <a href='https://react.dev/'><img className='logo' src='assets/logo.svg' /></a>
      </footer>
    </>
  );
}

export default App;
