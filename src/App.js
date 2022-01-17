import './App.css';

import HelloWorld from './tutorial/HelloWorld';
import GetGreeting from './tutorial/2-dars';
import Props from './tutorial/Props'
import Comment from './tutorial/4-dars';
import Clock from './tutorial/Lesson5';
import Phone from  './tutorial/project';
// import Toggle from './tutorial/mine';
// import Self from './tutorial/self';
import Render from './tutorial/render';
import NameForm from './tutorial/new';
import New2 from './tutorial/new2';

  
const comment = {
  date: new Date(),
  text: '4-dars',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64'
  }
};
const comment2 = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  }
};


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>1-dars</h1>
        <HelloWorld/>
        <h1>2-dars</h1>
        <GetGreeting user="ELYOR" mail="salom@gmail.com" />
        <h1>3-dars</h1>
        <Props time= {new Date().toLocaleTimeString()}/>
        <h1>4-dars</h1>
        <Comment  date={comment.date} text={comment.text} author={comment.author}/>,
        <Comment  date={comment2.date} text={comment2.text} author={comment2.author}/>
        <h1>5-dars</h1>
        <Clock myProp="test" />
        <h1>6-dars</h1>
        <Phone /> 
        {/* <Toggle/> */}
        <h1>7-8-dars</h1>
        <Render/>
        <h1>9-dars</h1>
        <NameForm />
        <New2 />
      </header>
    </div>
  );
}

export default App;