import axios from 'axios';
import React, { Component } from 'react'

export default class ProjectCards extends Component {


    constructor(props) {
        super(props);
        this.state = {
            projects: [],
        }
    }

    componentDidMount() {
        const url = 'http://localhost:5000/projects';

        axios.get(url)
        .then((res) => {
            this.setState({
                projects: res.data
            });
        })
        .catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <>
                {this.state.projects.map((item,key) => (
                    <div id={key} className="img__wrap" >
                        {/* <h1 id={key}>{item.title}</h1> */}
                            <a href="/">
                            <img className="img__img" src={item.imageData} />
                            <h2 className="img__description">{item.title}</h2>
                            </a>
                    </div>
                    ))}
            </>
                );
}
}

