import './App.css';
import ModifiedTextList from './components/toggleable-case-paragraphs/toggleable-case-paragraphs';
import ShowLabelButtons from './components/show-label-buttons/show-label-buttons';

function App() {
  return (
    <main className='main'>
      <ModifiedTextList />
      <ShowLabelButtons />
    </main>
  );
}

export default App;
