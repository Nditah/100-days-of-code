import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NumberList from './NumberList';
import Blog from './Blog';
import NameList from './NameList';

const numbers = [1,2,3,4,5];
const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm'}
]

ReactDOM.render(
  <React.StrictMode>
    <NameList />
    <NumberList numbers={numbers}/>
    <Blog posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

