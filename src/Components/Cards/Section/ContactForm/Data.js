import React from "react"
import { ReactDOM } from "react"

class App extends React.Component{
    state = {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
    submitHandaler = e => {
      e.preventDefault()
      console.log(e.target) 
    }
     changeHandeler = event => {
       //console.log(event.target.value)
       const value = event.target.name ==='email' ? event.target.value.toUpperCase() : event.target.value
       console.log(value)
       this.setState({
         [event.target.name]: value
       })
     }
     clickHandeler = event => {
       //event.preventDefault()
       console.log(event.target)
     }
    render(){
      return(
       <div className="container p-3 p-lg-5">
        <form onSubmit={this.submitHandaler}>
          <h2>contact form</h2>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" name="name" id="name" className="form-control" 
              value={this.state.name} 
              onChange={this.changeHandeler}
              />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" id="email" className="form-control" 
              value={this.state.email} 
              onChange={this.changeHandeler}
              />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="text" name="phone" id="phone" className="form-control" 
              value={this.state.phone} 
              onChange={this.changeHandeler}
              />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea  name="message" id="message" className="form-control" 
              value={this.state.message} 
              onChange={this.changeHandeler}
              />
          </div>
          <div className="form-group">
            <button type="submit" className="btn text-uppercase px-5 btn-danger" onClick={this.clickHandeler}>Submit</button>
          </div>
         </form>
       </div>
      )
    }
  }
  ReactDOM.render(<App />, document.getElementById('root'));