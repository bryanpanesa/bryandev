import React, { Component } from 'react';
import '../../components/css/projects.css';

//Components
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Header from '../../components/header';

//Images
import bfp from '../../images/projects/bfp/bfp1.PNG';
import bfp2 from '../../images/projects/bfp/bfp2.PNG';
import bfp3 from '../../images/projects/bfp/bfp3.PNG';
import bfp4 from '../../images/projects/bfp/bfp4.PNG';
import bfp5 from '../../images/projects/bfp/bfp5.PNG';
import bfp6 from '../../images/projects/bfp/bfp6.PNG';

class Bfp extends Component {
    render() {
        var projectData = {
            title: "Assessment & Reports System",
            company: "Legazpi Central Fire Station",
            date: "2016 April",
            type: "Web Development",
            role: [
                "Front End Developer"
            ],
            tools_used: [
                "PHP",
                "jQuery",
                "Bootstrap",
                "MySQL"
            ],
            team: [
                "Bryan Jay Panesa",
                "Dexter Miranda",
                "John Carlo Reñivo"
            ],
            desc: "Assessment & Reports System is an offline system that records all the manually assessed details and important documents of an establishment. The system helps keep track of the records while it is still under assessment, inspection, infraction or release of clearances. Printing documents also becomes faster because we have implemented a search function in which all documents are always ready for printing. It is an intership project for "
        };
        return(
            <div>
            <figure className="image is-3by1">
                <img src={bfp} alt="Bureau of Fire Protection Asssessment & Reports System" />
            </figure>  
            <Navbar />
            <Header projectData={projectData}/>
                <section className="section assessment">
                    <div className="containter">
                        <div className="columns is-centered">
                            <div className="column">
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image">
                                            <img src={bfp2} alt="Assessment Interface" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <h3 className="is-size-4 has-text-centered"><strong>ASSESSMENT</strong> INTERFACE</h3>
                                <p className="is-size-5">This is the first part of the system in which the manually written assesment forms will be recorded and saved in the system.</p><br />
                                <p className="is-size-5">I spent a lot of time making the design on this part since it needs to be user-friendly and actually solve the problem of manual calculation. We had troubles implementing data binding in order to lessen the work for the user, but in the end we still managed to do it.</p>
                            </div>
                        </div><br /><br />

                        <div className="container">
                            <div className="columns">
                                <div className="column is-10  is-offset-1">
                                    <h3 className="is-size-4 has-text-centered"><strong>ASSESSED</strong> INTERFACE</h3><br />
                                    <p className="is-size-5">All of the assessed establishments and projects are filtered here depending on selected year. Updating, deleting and printing of assessments are made here.</p>
                                </div>
                            </div>
                            <div className="columns is-centered">
                                <div className="column">
                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image">
                                                <img src={bfp3} alt="Assessment Interface" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><br /><br />

                        <div className="container">
                            <div className="columns">
                                <div className="column is-10  is-offset-1">
                                    <h3 className="is-size-4 has-text-centered"><strong>CLEARANCES</strong> & <strong>CERTIFICATES</strong></h3><br />
                                    <p className="is-size-5">The FSIC tab is where the Fire Safety Inspection Certificate (FSIC) is managed wherein the personnel in charge can track the number of reports or release a printable copy of inspection of a business or a project.</p><br />
                                    <p className="is-size-5">The FSEC tab is where the Fire Safety Evaluation Clearance (FSEC) is managed wherein the personnel in charge can update the Fire Safety Checklist on building plans or release a printable copy of the clearance.</p>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column is-6">
                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image">
                                                <img src={bfp4} alt="Assessment Interface" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-6">
                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image">
                                                <img src={bfp5} alt="Assessment Interface" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><br /><br />
                        <div className="container">
                            <div className="columns">
                                <div className="column is-10  is-offset-1">
                                    <h3 className="is-size-4 has-text-centered"><strong>CORRECT</strong> &<strong> COMPLY</strong></h3>
                                    <p className="is-size-5">In this part, there are two types of correction, notice to correct and notice to comply. The findings, defects or deficiencies automatically appears here right after every update of the FSEC. The personnel in charge then can penalize each problem for a certain amount.</p><br />
                                    <p className="is-size-5">There are many things that I want to fix here, like the alignment of texts and the back button in which only exists in the notices tabs.</p>
                                </div>
                            </div>
                            <div className="columns is-centered">
                                <div className="column">
                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image">
                                                <img src={bfp6} alt="Assessment Interface" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            <Footer />
            </div>
        );
    }
}

export default Bfp;