import React, { Component } from "react";
//Components

class Header extends Component {

    // Map tools used for the project
    tools_used() {
        return this.props.projectData.tools_used
            .map(tools =>
                <span className="tag is-size-6 is-light">{tools}</span>
            );
    };

    render(){
        return(
            <div>
                <figure className="image is-3by1">
                    <img src="https://bulma.io/images/placeholders/256x256.png" alt="Project" />
                </figure>  
            
            <section className="container">
                <div className="columns">
                    <div className="column is-8 is-offset-1"><br />
                        <h1 className="is-size-3">{this.props.projectData.title}</h1>
                        <p className="is-size-5">Assessment & Reports System is an offline system that records all the manually assessed details and important documents of an establishment. The system helps keep track of the records while it is still under assessment, inspection, infraction or release of clearances. Printing documents also becomes faster because we have implemented a search function in which all documents are always ready for printing. It is a project for <strong>{this.props.projectData.company}</strong></p>
                    </div>
                    <div className="column is-2 is-offset-1"><br />
                        <h3 className="is-size-5">{this.props.projectData.type}</h3>
                        <h3 className="is-size-5">{this.props.projectData.date}</h3><br />
                        <div className="tags">
                            {
                            this.tools_used()
                            }
                        </div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-size-5 is-offset-1">
                        <h3 className="is-size-5">Team</h3>
                        <h3 className="is-size-6">{this.props.projectData.team}</h3>
                    </div>
                    <div className="column is-size-5 is-offset-1">
                        <h3 className="is-size-5">Role - {this.props.projectData.role}</h3>
                    </div>
                </div>
            </section>
            </div>
        );
    }
}

export default Header;