import { Link } from 'react-router-dom';

import "./SecondItem.css"

export default function SecondItem() {
  return (
      <div className="secondItem">
          <div className="secondItem-twoBoxes">
              <div className="secondItem-leftBox">
                  <ul>
                      <li>
                          STEP BY STEP PROCESS
                      </li>
                      <li>
                          Sign Up !
                      </li>
                      <li>
                          Go to "My Pets" !
                      </li>
                      <li>
                          Fill out the application !
                      </li>
                      <li>
                          Play the waiting game !
                      </li>
                      <li>
                          Get Adopted !!!
                      </li>
                  </ul>
              </div>
              <div className="secondItem-rightBox">
                <h3>Giving Up A Pet Is HARD!</h3>
                <hr/>
                <p>We know it, you know it.<br/>
                    We try to make the process as easy and painless as possible. <br/>Here
                    you'll see your step by step process to find your furry friend a home!
                    <br/>
                    It's our promise to you that we'll find your pet a home!
                </p>
              </div>
          </div>
      </div>
  )
}