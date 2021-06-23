import { Link } from 'react-router-dom';
import "./FirstItem.css"

export default function FirstItem({ user }) {

  return (
    <div className="firstItem">
      <div className="firstItem-twoBoxes">
        
        <div className="firstItem-leftBox">
            <h3>Who We Are:</h3>
            <hr/>
            <p>We love everything pets! <br/>Our goal at Pet Transfer is to find your pet a loving home. 
                If you're moving or need to give up your pet for adoption, this is your stop! 
                <br/>Throughout our website, you'll find others also putting up their pet or looking for one! Good luck!
                <br/>
                <Link to= {user ? "/mypets" : "/login"} className="firstItem-button btn btn-outline-danger">Sign up here to initiate Pet Transfer!</Link>
            </p>
        </div>

        <div className="firstItem-rightBox pictureBox">
          <img src="https://st3.depositphotos.com/1199142/i/600/depositphotos_156132130-stock-photo-dog-with-human-family-at.jpg" alt="" />
          {/* <div className="bd-example">
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to="2"
                ></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active" data-interval="6000">
                  <img
                    src="https://sites.psu.edu/lindseypassion/files/2019/10/file_23168_australian-shepherd-460x290.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>
                      Dolby
                      <p className="textStuff">
                        Give dolby some socks and he'll be your best friend for
                        life!{" "}
                      </p>
                    </h5>
                  </div>
                </div>
                <div className="carousel-item" data-interval="6000">
                  <img
                    src="https://www.dogtime.com/assets/uploads/2011/01/file_23228_mutt-460x290.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>
                      Roger Boi
                      <p className="textStuff">
                        Healthy, fast, and obedient. Roger Boi loves the fast
                        life and loves big yards.
                      </p>
                    </h5>
                  </div>
                </div>
                <div className="carousel-item" data-interval="6000">
                  <img
                    src="http://cdn2-www.cattime.com/assets/uploads/2011/12/file_2676_persian-460x290-460x290.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>
                      Socks
                      <p className="textStuff">
                        Socks loves to sleep, argue with dogs, play with other
                        cats, and eat food!
                      </p>
                    </h5>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleCaptions"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleCaptions"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
