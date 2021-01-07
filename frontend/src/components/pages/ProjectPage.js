import React, { Component } from 'react';
import axios from 'axios';
import SocialBar from '../layout/SocialBar';

const PORT = process.env.PORT || 'http://localhost:5000' ;


export default class ProjectPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            project: {},
            projectID:  this.props.match.params.id,
            gotData: false,
        }
    }


    componentDidMount() {
        const url = `${PORT}/projects/${this.state.projectID}`;
       
        
        axios.get(url)
        .then((res) => {
            this.setState({
                project: res.data,
                gotData: true
            });
        })
        .catch((err) => {
            console.log(err);
        });
    }


    render() {
       
        return (
            <>
            {this.state.gotData ?
                <div className="project-page-row">
                    <div className="project-page-col">
                        <img src={this.state.project.imageData} />
                    </div>
                    <div className="project-page-col">
                        <div className="project-page-content">
                            <h1>{this.state.project.title}</h1>
                            <h3>{this.state.project.type} - ({this.state.project.ocassion})</h3>
                            <p>{this.state.project.description}</p>
                        </div>
                    </div>
                    
                </div>
                :
                <h1>This Project Does Not Exist</h1>
    }
    <SocialBar />

            </>
        )
    }
}
