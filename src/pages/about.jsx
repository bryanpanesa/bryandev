import React, { Component } from 'react';

//Components
import Navbar from '../components/navbar';
import Footer from '../components/footer';

class About extends Component {
    render() {
        return(
            <div>
                <Navbar firstName="Bryan" lastName="Panesa" />
                <div className="container">
                    <h2>qwe</h2>
                    <p>Bacon ipsum dolor amet tenderloin buffalo pork belly tail pork turkey shank ground round sausage drumstick strip steak chuck. Picanha fatback ball tip shank ham. Tongue jerky andouille, biltong chuck sirloin drumstick filet mignon alcatra. Hamburger sirloin short ribs venison, salami ball tip jerky ground round pig doner. Short loin ham bresaola porchetta andouille pastrami kielbasa shank.</p>
                    <p>Jowl leberkas pastrami hamburger frankfurter beef ribs bresaola venison landjaeger burgdoggen t-bone. Short ribs drumstick swine tenderloin biltong boudin, andouille tri-tip. Landjaeger ham hock kevin strip steak t-bone. Ground round boudin buffalo ball tip kevin pork kielbasa chicken capicola brisket. Tenderloin landjaeger pork loin drumstick salami. Boudin kevin meatball, prosciutto chicken t-bone pig pork belly shankle. Cow kevin shank shankle porchetta buffalo kielbasa t-bone.</p>
                    <p>Hdau eberkas pastrami hamburger frankfurter beef ribs bresaola venison landjaeger burgdoggen t-bone. Short ribs drumstick swine tenderloin biltong boudin, andouille tri-tip. Landjaeger ham hock kevin strip steak t-bone. Ground round boudin buffalo ball tip kevin pork kielbasa chicken capicola brisket. Tenderloin landjaeger pork loin drumstick salami. Boudin kevin meatball, prosciutto chicken t-bone pig pork belly shankle. Cow kevin shank shankle porchetta buffalo kielbasa t-bonJowl leberkas pastrami hamburger frankfurter beef ribs bresaola venison landjaeger burgdoggen t-bone. Short ribs drumstick swine tenderloin biltong boudin, andouille tri-tip. Landjaeger ham hock kevin strip steak t-bone. Ground round boudin buffalo ball tip kevin pork kielbasa chicken capicola brisket. Tenderloin landjaeger pork loin drumstick salami. Boudin kevin meatball, prosciutto chicken t-bone pig pork belly shankle. Cow kevin shank shankle porchetta buffalo kielbasa t-bone.</p>
                </div>
                <Footer />
            </div>
        );
    }
}

export default About;