import React, { Component } from "react";

//Components

class Header extends Component {

    // Function that maps tools used on projects
    tools_used() {
        return this.props.projectData.tools_used
            .map(tools =>
                <span className="tag is-size-5 is-light">{tools}</span>
            );
    }

    // Function that maps team members of projects
    team() {
        return this.props.projectData.team
            .map(team => 
                <span className="tag is-size-5 is-white">{team}</span>
            );
    }

    // Function that maps my roles on projects
    role() {
        return this.props.projectData.role 
            .map(role => 
                <span className="tag is-size-5 is-white has-text-weight-bold">{role}</span>
            );
    } 

    // Function that maps project descriptions
    desc() {
        return this.props.projectData.desc
            .map(desc =>
                <div><p className="is-size-5">{desc}</p><br/></div>
            );
    }
    render(){
        return(
            <div>
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column is-8 is-offset-1"><br />
                            <h1 className="is-size-3 has-text-grey-light">{this.props.projectData.title}</h1>
                            {
                                this.desc()
                            }
                            <p><strong>{this.props.projectData.for_project}</strong>.</p>
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
                            <h3 className="is-size-5 has-text-grey-light">Team</h3>
                            <div className="tags">
                            {
                                this.team()
                            }
                            </div>
                        </div>
                        <div className="column is-size-3">
                            <h3 className="is-size-5 has-text-grey-light">Role</h3>
                            <div className="tags">
                            {
                                this.role()
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        );
    }
}

export default Header;