import React, { Component } from 'react';
import '../../components/css/projects.css';

//Components
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Header from '../../components/header';

//Images
import letgo from '../../images/projects/letgo/letgo.jpg';
import letgo1 from '../../images/projects/letgo/letgo1.png';
import letgo2 from '../../images/projects/letgo/letgo2.png';
import letgo3 from '../../images/projects/letgo/letgo3.png';

class Letgo extends Component {
    render() {
        var projectData = {
            title: "Letgo",
            company: "Personal Project",
            date: "2018 October",
            type: "Product Design",
            role: [
                "UI/UX Designer"
            ],
            tools_used: [
                "Adobe XD",
                "Adobe Photoshop"
            ],
            team: [
                "Bryan Jay Panesa"
            ],
            desc: [
                "App used to help users limit or quit the usage of mobile apps like games and social media."
            ],
            for_project: "This project was made for my personal product design journey."
        };
        return (
            <div>
                <figure className="image">
                    <img src={letgo} alt="Letgo App" />
                </figure>
                <Navbar />
                <Header projectData={projectData} />
                <section className="section">
                    <div className="containter">

                        <div className="container">
                            <div className="columns">
                                <div className="column is-10 is-offset-1">
                                    <h3 className="is-size-4 has-text-centered"><strong>Brief</strong></h3><br />
                                    <p className="is-size-5">The concept of the app to limit or stop mobile phone users using specific apps that they think is toxic or affects their productivity in some way. Aside from my personal issues with using mobile apps too much, I also had a friend who actually stopped using facebook for it was too toxic for him.</p><br />
                                    <p className="is-size-5">This was one of the app design I made for my daily UI/UX design challenge.</p>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column is-4">
                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image">
                                                <img src={letgo1} alt="Letgo" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-4">
                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image">
                                                <img src={letgo2} alt="Letgo" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-4">
                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image">
                                                <img src={letgo3} alt="Letgo" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><br /><br /><br /><br />

                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}

export default Letgo;