import React, { Component } from 'react';
import '../../components/css/projects.css';

//Components
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Header from '../../components/header';

//Images
import oilprice from '../../images/projects/oilprice/oilprice.jpg';
import oilprice1 from '../../images/projects/oilprice/oilprice1.png';
import oilprice2 from '../../images/projects/oilprice/oilprice2.png';

class Oilprice extends Component {
    render() {
        var projectData = {
            title: "Philippine Oil Price Hike",
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
                "App that tracks oil price changes in the Philippine market. The app can help our fellow filipinos to see realtime and upcoming oil price changes."
            ],
            for_project: "This project was made for my personal product design journey."
        };
        return (
            <div>
                <figure className="image">
                    <img src={oilprice} alt="Philippine Oil Price Hike" />
                </figure>
                <Navbar />
                <Header projectData={projectData} />
                <section className="section">
                    <div className="containter">

                        <div className="container">
                            <div className="columns">
                                <div className="column is-10 is-offset-1">
                                    <h3 className="is-size-4 has-text-centered"><strong>Brief</strong></h3><br />
                                    <p className="is-size-5">The goal of the app is to track oil price changes in the Philippine market. The app can help our fellow filipinos to see realtime and upcoming oil price changes.</p><br />
                                    <p className="is-size-5">This was one of the app design I made for my daily UI/UX design challenge.</p>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column is-6">
                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image">
                                                <img src={oilprice1} alt="Philippine Oil Price Hike" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-6">
                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image">
                                                <img src={oilprice2} alt="Philippine Oil Price Hike" />
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

export default Oilprice;