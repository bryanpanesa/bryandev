import React, { Component } from 'react';
import '../../components/css/projects.css';

//Components
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Header from '../../components/header';

class Bfp extends Component {
    render() {
        var projectData = {
            title: "Assessment & Reports System",
            company: "Legazpi Central Fire Station",
            date: "2016 April",
            type: "Web Development",
            role: "Front End Developer",
            tools_used: [
                "PHP",
                "jQuery",
                "Bootstrap",
                "MySQL"
            ],
            team: "Bryan Jay Panesa",
            desc: "Bacon ipsum"
        };
        return(
            <div>
            <Navbar />
            <Header projectData={projectData}/>
            <Footer />
            </div>
        );
    }
}

export default Bfp;