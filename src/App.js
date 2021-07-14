import './App.css';

import React,{Component} from 'react';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Contents from './components/Contents';



class App extends Component{
  constructor(props){
    super(props);
    this.state={
      mode : 'read',
      subject :{title:'WEB',sub:'world wide web'},
      welcome :{title:'welcome', desc:'Hello, React'},
      contents :[
        {id:1, title:'HTML', desc :'HTML is for information'},
        {id:2, title:'CSS', desc :'CSS is for design'},
        {id:3, title:'JavaScript', desc :'JavaScript is for interactive'}
      ]
    }
  }
  render(){
    let _title, _desc = null;
    if(this.state.mode ==='welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }
    else if(this.state.mode==='read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return(
      <div className="App">
        {/* <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject> */}

        <header>
          <h1><a href="/" onClick={function(){
              alert('hi');
          }}>{this.state.subject.title}</a></h1>
            {this.state.subject.sub}
        </header>


        <TOC data={this.state.contents}></TOC>
        <Contents title ={_title} desc={_desc}></Contents>
      </div>
    )
  }
}

export default App;
