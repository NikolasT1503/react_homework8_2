import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const data = [
  {
    title: 'React',
    subtitle: 'Библиотека для создания пользовательских интерфейсов',
    imageURL: "https://res.cloudinary.com/practicaldev/image/fetch/s--2ghxZn6G--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/buz4t2ckimsj48zieyja.png",
  },
  {
    title: 'Angular 2',
    subtitle: 'Один фреймворк',
    imageURL: "https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/angulart2-dark_1200x303.png?sfvrsn=b936a75a_0",
  },
]

ReactDOM.render(
  <React.StrictMode>
    <App heroes={data} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
