import * as userService from '../../utilities/users-service';
import "./OrderHistoryPage.css"

export default function OrderHistoryPage() {
  async function handleCheckToken() {
    const expDate = await userService.checkToken();
    console.log(expDate);
  }

  return (
    <div>

    <div className="pictureBox">
      <div className="bd-example">
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://sites.psu.edu/lindseypassion/files/2019/10/file_23168_australian-shepherd-460x290.jpg" className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Toby - 5yrs old</h5>
                <p>Toby loves to play, eat, play, and play again!</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://www.dogtime.com/assets/uploads/2011/01/file_23228_mutt-460x290.jpg" className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="http://cdn2-www.cattime.com/assets/uploads/2011/12/file_2676_persian-460x290-460x290.jpg" className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
    <div>
      <h2>Adoption / Transfer Process</h2>
      <p>Vomit words, lots of words, and include a bunch of words here.</p>
    </div>
    <div>
      <h2>Upcoming Events</h2>
      <p>Card with Charity Events</p>
      <p>Card with Food Drive Events</p>
      <p>Card with Cuddle Party</p>
    </div>
    </div>
  );
}