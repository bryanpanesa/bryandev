import React, { Component } from 'react';

//Components
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Header from '../../components/header';

//Images
import phage from '../../images/projects/phagebiotics/phage2.jpg';

class Phagebiotics extends Component {
    render() {
        var projectData = {
            title: "Phagebiotics: A 2D Survival Shooting Game",
            company: "Undergraduate Thesis",
            date: "2017 April",
            type: "Game Development",
            role: [
                "Front End Developer",
                "Analyst",
                "UI & Assets Designer"
            ],
            tools_used: [
                "Java",
                "Tiled Map Editor",
                "Photoshop"
            ],
            team: [
                "Bryan Jay Panesa",
                "Dexter Miranda",
                "John Carlo Reñivo"
            ],
            desc: "Assessment & Reports System is an offline system that records all the manually assessed details and important documents of an establishment. The system helps keep track of the records while it is still under assessment, inspection, infraction or release of clearances. Printing documents also becomes faster because we have implemented a search function in which all documents are always ready for printing. It is a project for "
        };
        return(
            <div>
                <figure className="image is-3by1">
                    <img src={phage} alt="Phagebiotics: A 2D Survival Shooting Game" />
                </figure>
                <Navbar />
                <Header projectData={projectData} />
                <Footer />
            </div>
        );
    }
}

export default Phagebiotics;