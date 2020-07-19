import React, { Component } from "react";
import banner from "./images/amazon-banner.jpg";
import proimg from "./images/amazon-watch.jpg";
import "./Home.css";
import Products from "./Products";
class Home extends Component {
  render() {
    return (
      <div className="parent">
        <img className="home__image" src={banner} />
        <div className="home">
          <div className="home__row">
            <Products
              image={proimg}
              id="1"
              title="Camera"
              price="90"
              rating="5"
            />
          </div>
          <div className="home__row">
            <Products
              image={proimg}
              id="1"
              title="Camera"
              price="90"
              rating="5"
            />
          </div>
          <div className="home__row">
            <Products
              image={proimg}
              id="1"
              title="Camera"
              price="90"
              rating="5"
            />
          </div>
          <div className="home__row">
            <Products
              image={proimg}
              id="1"
              title="Camera"
              price="90"
              rating="5"
            />
          </div>
          <div className="home__row">
            <Products
              image={proimg}
              id="1"
              title="Camera"
              price="90"
              rating="5"
            />
            <div className="home__row">
              <Products
                image={proimg}
                id="1"
                title="Camera"
                price="90"
                rating="5"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
