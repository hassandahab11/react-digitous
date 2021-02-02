import React from 'react';
import  './style/style.css';
import ClassHas from './components/has';

class App extends React.Component{
  render(){
    return(
      <div className="col-6 col-sm-12">
        <ClassHas></ClassHas>
      </div>
    );
}
}

export default App;
