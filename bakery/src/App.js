
import React from 'react';
import Button from './composants/button';
import Add from './composants/add';
import List from './composants/list';
import Pay from './composants/pay';
import './style/style.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      activeTabs: 'add',
      items: []
    }
    this.selectAdd = this.selectAdd.bind(this)
    this.selectList = this.selectList.bind(this)
    this.selectPay = this.selectPay.bind(this)
    this.renderContent = this.renderContent.bind(this)
    this.add = this.add.bind(this)
  }

  selectAdd(e) {
    this.setState({
      activeTabs: 'add'
    })
  }

  selectList() {
    this.setState({
      activeTabs: 'list'
    })
  }

  selectPay() {
    this.setState({
      activeTabs: 'pay'
    })
  }

  add(name, price) {
    const obj = {
      name: name,
      price: price
    }
    const newList = this.state.items
    newList.push(obj)
    this.setState({
      items: newList
    })
  }


  renderContent= ()=>{
    switch (this.state.activeTabs) {
      case 'add':
        return <Add addItem = {this.add}></Add>
      case 'list':
        return <List listItems = {this.state.items}></List>  
      case 'pay':
        return <Pay></Pay>  
      default:
        <Add></Add>;
    }
  }

  render() {
    return (
      <div className="App" >
        <Button style= {{backgroundColor:"blue"}} onClick={this.selectAdd} isSelected={this.state.activeTabs === 'add' ? true : false}> Add </Button>
        <Button style= {{backgroundColor:"orange"}} onClick={this.selectList} isSelected={this.state.activeTabs === 'list' ? true : false}> List </Button>
        <Button style= {{backgroundColor:"red"}} onClick={this.selectPay} isSelected={this.state.activeTabs === 'pay' ? true : false}> Pay </Button>

        {this.renderContent()}
      </div>
    );
  }
}

export default App;