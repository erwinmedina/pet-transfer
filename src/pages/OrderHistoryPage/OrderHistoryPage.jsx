import FirstItem from "../../components/Home/FirstItem"
import "./OrderHistoryPage.css"

export default function OrderHistoryPage() {
  return (
    <div className="homepage">
      <h2 className="homepage-title">Pet Transfer !</h2>
      <FirstItem/>
      
      <div className="mt-5 landingBoxes">
        <h2 className="">Adoption / Transfer Process</h2>
        <h4 className="text-left">Our Goal:</h4>

        <p className="text-left">We love everything pets and we want to share our love for pets with you! Here at Pet Transfer, we make putting up your pet
        for adoption painless and as easy as possible. 
        <br/><br/>
        By filling out an adoption form, your pet will be placed in the database and people using this application
        who live in the area will be notified. People looking for your specific pet will also be notified and we WILL FIND YOUR PET A HOME! 
        <br/> <br/>
        We know that giving up an animal can be hard and our goal is to make that process safe, easy, reliable, and happy for everyone
        involved! It is our promise to YOU that you and your pet will be satisfied !
        <br/> <br/>
        Sign in or create an account to get your pet all set up!
        </p>
        
        <h4 className="text-left">Pet Transfer's Core Values:</h4>
        <ul className="text-left">
          <li>- Mutual Respect</li>
          <li>- Innovation</li>
          <li>- Integrity</li>
          <li>- Professionalism</li>
          <li>- Flexibility</li>
          <li>- Responsiveness</li>
        </ul>
      </div>
      <div className="mt-5">
        <h2>Upcoming Events</h2>
        <div className="d-flex justify-content-center">
          <div class="card mr-5">
            <img class="card-img-top" src="http://connection.media.clients.ellingtoncms.com/img/photos/2013/07/23/R0724-208_t670.jpg?b3f6a5d7692ccc373d56e40cf708e3fa67d9af9d" alt="Card cap"/>
              <div class="card-body">
                <h5 class="card-title">Charity Events!</h5>
                <p class="card-text">May 26th, Wednesday<br/>Come join us for some charity work!</p>
                <a href="/" class="btn btn-primary">Charity Page</a>
              </div>
          </div>
          <div class="card mr-5">
            <img class="card-img-top" src="data:image/jpeg;base64,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" alt="Card cap"/>
              <div class="card-body">
                <h5 class="card-title">Pet Food Drive!</h5>
                <p class="card-text">May 28th, Friday<br/>Come donate to our local pet food drive for animal shelters!</p>
                <a href="/" class="btn btn-primary">Food Drive Details</a>
              </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="https://www.atlanticvetseattle.com/wp-content/uploads/2020/10/man-cuddling-dog-blog.jpg" alt="Card cap"/>
              <div class="card-body">
                <h5 class="card-title">Cuddle Party!!</h5>
                <p class="card-text">May 29th, Saturday<br/>It's that time of the month again! Come join us at the park, and do a "greet and meet" with pets that you'd be interested in adopting!</p>
                <a href="/" class="btn btn-primary">Join the Cuddle Party!</a>
              </div>
          </div>

        </div>
      </div>
      <div className="footerThing">
        <div class="bg-light text-center text-lg-start">
              <div class="container p-4">
                  <div class="row">
                  <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                      <h5 class="text-uppercase">Contact Information</h5>

                      <p>
                        Free feel to email the CEO of Pet Transfer 
                        <br/> Erwin Medina
                        <br/> erwin.l.medina@gmail.com
                        <br/> 909-503-2834
                      </p>
                  </div>
                  </div>
              </div>

              <div class="text-center p-3">
                  © 2020 Copyright: Pet Transfer
              </div>
          </div>
      </div>
    </div>
  );
}