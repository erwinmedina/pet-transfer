import FirstItem from "../../components/Home/FirstItem"
import SecondItem from "../../components/Home/SecondItem"
import ThirdItem from "../../components/Home/ThirdItem"
import FourthItem from "../../components/Home/FourthItem"
import "./HomePage.css"

export default function HomePage({ user }) {

  navigator.geolocation.getCurrentPosition(function(position) {
    console.log("Lat is: ", position.coords.latitude);
    console.log("Lat is: ", position.coords.longitude);
    console.log(user);
  })

  return (
    <div className="homepage">
      <div className="logoTitle">
        <img src="/images/Logo.png" alt="HERE" />
        <h2 className="homepage-title">PET TRANSFER !</h2>
      </div>
      <FirstItem user={user}/>
      <SecondItem/>
      <ThirdItem/>
      <FourthItem/>
      <div className="footerThing">
        <div className=" text-center text-lg-start">
              <div className="container p-4">
                  <div className="row">
                  <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                      <h5 className="text-uppercase">Contact Information</h5>

                      <p>
                        CEO of Pet Transfer 
                        <br/> Erwin Medina
                        <br/> erwin.l.medina@gmail.com
                        <br/> 909-503-2834
                      </p>
                  </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}