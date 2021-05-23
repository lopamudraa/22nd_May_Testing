import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    var persons = [
      { firstname: "Malcom", lastname: "Reynolds" },
      { firstname: "Kaylee", lastname: "Frye" },
      { firstname: "Jayne", lastname: "Cobb" }
    ];

    var arr = [9, 5, 9, 5, 1, 1, 1];
    var cnt =0;
    for(var i=0;i< arr.length;i++){
      if(i<arr.length-2 && arr[i]==arr[i+2]){
        ++cnt;
      }
    }
    return (
      <div className="App">
        {cnt.toString()}
      </div>
    )
  }
}

export default App;
