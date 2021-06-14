import "./About.css";
// import image1 from "../../../public/images/SecretAgent2.png";

export default function About() {
    return (
        <div className="About container">
            <div className="About-MeetTheTeam">
                <h4>Meet the Team</h4>
            </div>
            <div className="About-DeveloperBox">
                <div className="About-Description">
                    <div className="About-Image">
                        <img src="https://i.imgur.com/5Vrz6zG.png" alt="" />
                    </div>
                    <div className="About-ImageDescription">
                        Lead Front-End Developer
                    </div>
                </div>
                <div className="About-Description">
                    <div className="About-Image">
                        <img src="https://i.imgur.com/C0C89J0.png" alt="" />
                    </div>
                    <div className="About-ImageDescription">
                        UX/UI, Manager, VP of Things
                    </div>
                </div>
                <div className="About-Description">
                    <div className="About-Image">
                        <img src="https://i.imgur.com/jz0J9YU.png" alt="" />
                    </div>
                    <div className="About-ImageDescription">
                        Lead Back-End Developer
                    </div>
                </div>
            </div>

            <div className="About-TeamInfo">
                <p>This group of exceptional dudes keep this website from falling apart.
                    <br/>Pats on the back to these lads and a round of applause!! Yay!
                </p>
            </div>
            
            
        </div>
    )
}