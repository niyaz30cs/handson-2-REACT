import "./App.css";
import React, { Component } from 'react'

export default class App extends Component {
     state={
        name:"",
        age:"",
        rating:"",
        data:[]
     }

     change=(event)=>{
        this.setState({[event.target.name]:event.target.value})
     }

     handleClick=()=>{
        let obj={
            name:this.state.name,
            department:this.state.department,
            rating:this.state.rating
        }
        this.state.data.push(obj)
        this.setState({data:this.state.data,name:"",department:"",rating:""})
     }

  render() {
    return (
      <div className="container">
        <h1 className="center">EMPLOYEE FEEDBACK FORM</h1>
        <div className="input">
        Name:<input type="text" id="area" name="name" value={this.state.name} placeholder=""
        onChange={this.change} />
        </div>
        <div className="input" >
        Department:<input type="text" id="area" name="department" value={this.state.department} placeholder=""
        onChange={this.change} />
        </div>
        <div className="input">
        Rating:<input type="number" id="area" name="rating" value={this.state.rating} placeholder=""
        onChange={this.change} />
        </div>
        <div id="btn">
        <button onClick={this.handleClick}>Submit</button>
        </div>
        <div className="array">
        {this.state.data.map((item,index)=>{
            return (
              <h3 key={index} className="box">Name:{item.name} | Department:{item.department} | Rating:{item.rating}</h3>
            )
        })}
        </div>
      </div>
    )
  }
}



