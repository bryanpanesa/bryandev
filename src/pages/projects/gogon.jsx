import React, { Component } from 'react';

//Components
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Header from '../../components/header';

//Images
import gogonBlock from '../../images/projects/gogon/Gogon-block.jpg';
import gogon1 from '../../images/projects/gogon/gogon1.PNG';
import gogon2 from '../../images/projects/gogon/gogon2.PNG';
import gogon3 from '../../images/projects/gogon/gogon3.PNG';
import gogon4 from '../../images/projects/gogon/gogon4.PNG';
import gogon5 from '../../images/projects/gogon/gogon5.PNG';
import gogon6 from '../../images/projects/gogon/gogon6.PNG';
import gogon7 from '../../images/projects/gogon/gogon7.PNG';

class Gogon extends Component {
    render() {
        var projectData = {
            title: "Gogon High School Grading Module",
            company: "Gogon High School",
            date: "2016 September",
            type: "Web Development",
            role: [
                "Front & Back End"
            ],
            tools_used: [
                "PHP",
                "jQuery",
                "Bootstrap",
                "MySQL"
            ],
            team: [
                "Bryan Jay Panesa",
                "Rastie Galve"
            ],
            desc: [
                "The Gogon Grading Module is for the use of Gogon High School and as such, it focuses on its existing grading system. The proposed Grading Module will cover the recording and computation of grades of students based on their ratings for quizzes, recitation, assignments, projects, unit tests, and periodical exams. This will include grade transmutation and use of transmutation tables.",
                "The printing of reports will include the generation of grades per subject, section and include the printing of individual grades or report cards. For security purposes, a one-level password is included. The grading module proposed is limited to single installation, stand-alone program, to be used individually by the teachers of Gogon High School."
            ],
            for_project: "This module was made for Gogon High School Grading Module as part of a larger multi-purpose system with scheduling, attendance, student information and enrollment."
        };
        return(
            <div>
            <figure className="image is-3by1">
                <img src={gogonBlock} alt="Bureau of Fire Protection Asssessment & Reports System" />
            </figure>  
            <Navbar />
            <Header projectData={projectData}/>
                <section className="section">
                    <div className="container">
                        <div className="columns has-text-centered">
                            <div className="column is-10 is-offset-1">
                                <h3 className="is-size-4"><strong>MODULES</strong> INTERFACE</h3><br />
                                <p className="is-size-5">The system consists of 5 interconnected modules which runs on the same database. The Personnel and Student Information (PSIS), Enrollment, Scheduling, Grading and Attendance Kiosk are the 5 modules.</p><br/>
                                <p className="is-size-5">All of our data are automatically taken from the PSIS, enrollment and attendance kiosk. Our module is just all about taking the enrolled students together with their sections and the teachers assigned on those sections. Once a student gets enrolled, we can already create quizzes, projects, activities and behavioral scores.</p>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-10 is-offset-1">
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image">
                                            <img src={gogon1} alt="Modules interface" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><br /><br /><br /><br />

                    <div className="container">
                        <div className="columns has-text-centered">
                            <div className="column is-10 is-offset-1">
                                <h3 className="is-size-4"><strong>GRADING</strong> QUARTERS</h3><br />
                                <p className="is-size-5">The module works by logging an authorized employee (e.g. teacher). Every authorized teacher can access students' grade levels and section in every quarter. </p>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-10 is-offset-1">
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image">
                                            <img src={gogon2} alt="Modules interface" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><br /><br /><br /><br />

                    <div className="container">
                        <div className="columns has-text-centered">
                            <div className="column is-5 is-offset-1">
                                <h3 className="is-size-4"><strong>QUIZZES</strong> & <strong>ACTIVITIES</strong></h3><br />
                                <p className="is-size-5">Written works (quizzes) & performance tasks (activities) grades can be created with an option of highscore on every task and a real-time update of totals, Percentage Scores (PS) and Weighted Scores (WS).</p>
                            </div>
                            <div className="column is-5">
                                <h3 className="is-size-4"><strong>EXAMS</strong> & <strong>VALUES</strong></h3><br />
                                <p className="is-size-5">Quarterly grades and exam scores are also automatically calculated. Aside from that, the learner's values are also observed and graded which includes Always, Sometimes, Rarely and Never observed values.</p>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-5 is-offset-1">
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image">
                                            <img src={gogon3} alt="Modules interface" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className="column is-5">
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image">
                                            <img src={gogon4} alt="Modules interface" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><br /><br /><br /><br />

                    <div className="container">
                        <div className="columns has-text-centered">
                            <div className="column is-10 is-offset-1">
                                <h3 className="is-size-4"><strong>SUBJECT</strong> & <strong>SECTION</strong></h3><br />
                                <p className="is-size-5">Each subjects per section has a ranking system where in grades from quarter 1-4, subject averages and remarks can be viewed.</p>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-10 is-offset-1">
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image">
                                            <img src={gogon5} alt="Modules interface" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><br /><br /><br /><br />

                    <div className="container">
                        <div className="columns has-text-centered">
                            <div className="column is-5 is-offset-1">
                                <h3 className="is-size-4"><strong>STUDENT</strong> RECORD</h3><br />
                                <p className="is-size-5">The student records consists of all the grade-level record of every student starting from grade 7 to 12.</p>
                            </div>
                            <div className="column is-5">
                                <h3 className="is-size-4">SETTING <strong>EXAM SUBJECT PERCENTAGES</strong></h3><br />
                                <p className="is-size-5">Every subject's written, perform & quarter percentages(%) can be modified depending on the decision of the authorized personnel.</p>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-10 is-offset-1">
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image">
                                            <img src={gogon6} alt="Modules interface" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><br /><br /><br /><br />

                    <div className="container">
                        <div className="columns has-text-centered">
                            <div className="column is-10 is-offset-1">
                                <h3 className="is-size-4"><strong>REPORT CARD</strong> (Form 137 & 138)</h3><br />
                                <p className="is-size-5">An auto-generated and print-ready report card is available and can only be managed and accessed by an adviser of a specific section.</p>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-10 is-offset-1">
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image">
                                            <img src={gogon7} alt="Modules interface" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><br /><br /><br /><br />
                </section>
            <Footer />
            </div>
        );
    }
}

export default Gogon;