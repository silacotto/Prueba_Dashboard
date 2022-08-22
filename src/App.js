import './App.css';

// seccion donde se importan los componentes

import ContentRow from './components/ContentRow';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';

function App() {
  return (
    <div className="App">
      	<div id="wrapper">	
          <SideBar/>
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <TopBar/>
              <ContentRow/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
