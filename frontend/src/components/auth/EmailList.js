import axios from 'axios';
import React, { Component } from 'react'
import ControlPanel from '../pages/ControlPanel';

const PORT = process.env.PORT || 'http://localhost:5000' ;


export default class EmailList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            emails: [],
        }
  
    }

    componentDidMount() {
        let token = localStorage.getItem("auth-token");
        const url = `${PORT}/emails`;
      
        axios.get(url, { 
            headers: {
                "x-auth-token" : token,
            }})
        .then((res) => {
            this.setState({
                emails: res.data
            });
        })
        .catch((err) => {
            console.log(err);
        });
    }

    
    render() {
        return (
            <>
            <ControlPanel />
            <div className="email-list">
                <h1 className="control-panel-heading">Email List</h1>
                <h4 className="email-list-heading">Subscribers: </h4>
                {this.state.emails.map( (item,key) => (
                    <div key={item.key}>
                        <p>{item.email}</p>
                    </div>
                )

                )}                
            </div>
            </>
        )
    }
}
