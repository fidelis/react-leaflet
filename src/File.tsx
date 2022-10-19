import React, { Component } from 'react';

import "./File.css";

class File extends Component {
  
  constructor(props){
    super(props);
  }

  showFile = async (e) => {
    var preview = document.getElementById('show-text')
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = async (e) => {
      const text = (e.target?.result)
      console.log(text)
      preview.innerHTML = text
    };
    reader.readAsText(e.target.files[0])
  }

  render = () => {
    return (
      <div id="page-map"> 
        <input type="file" onChange={(e) => this.showFile(e)} /> 
        <div id="show-text">Choose text File</div>
      </div>
    )
  }
}

export default File