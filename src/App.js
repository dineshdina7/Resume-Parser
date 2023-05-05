import React, {Component} from 'react';
import './App.css';
import PdfUploader from './ResumeParser/ResumeParser';

class App extends Component {
  render(){
    return (
        <div >
          <PdfUploader/>
      </div>
      
    );
  }
  
}

export default App;
