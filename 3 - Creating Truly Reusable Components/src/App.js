import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/layout/Header';
import Content from './components/layout/Content';
import Footer from './components/layout/Footer';
import Counter from './components/hooks/Counter';
import Form from './components/hooks/Form';

function App() {
  return (
    <div className="App">
      <Header title="Art Store" />
      <Content>
        <Counter />
        <Form />
        <img src={logo} className="App-logo" alt="logo" />
      </Content>
      <Footer copyright={`Mitch Gollub ${new Date().getFullYear()}`}/>
    </div>
  );
}

export default App;
