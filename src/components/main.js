import React, { Component } from "react";
import "../css/main.css";
import axios from "axios";
import { Line } from "react-chartjs-2";
import 'chart.js'
class Main extends Component {
  constructor() {
    super();
    // Local storage of data
    this.state = {
      countries: [],
      wheather: [],
      data: {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [
          {
            label: "Rainfall",
            fill: false,
            lineTension: 0.5,
            backgroundColor: "rgba(75,192,192,1)",
            borderColor: "rgba(0,0,0,1)",
            borderWidth: 2,
            data: [65, 59, 80, 81, 56],
          },
        ],
      },
    };
  }

  // Get countries name 
  getSearchedData = (query) => {
    axios
      .get("https://restcountries.eu/rest/v2/name/" + query)
      .then((response) => {
        this.setState({ countries: response.data, wheathers: [] });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Get wheather of a country after clicking on the name of a country from the list
  getWheather = (country) => {
    this.setState({ countries: [] });
    axios
      .get(
        "http://api.weatherstack.com/current?access_key=8b004453b3e0cedf95cd95dd2ef089c0&query=" +
          country.replace(" ", "%20")
      )
      .then((response) => {
        this.setState({ wheather: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    console.log(this.state.countries);
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="offset-md-4 col-md-4 col-12 d-flex justify-content-center my-4">
            <div className="card shadow p-3 mb-5 bg-white rounded">
              <div className="card-body">
                <div className="form-group has-search d-flex mb-0">
                  <span
                    className="input-location fa fa-map-marker form-control-search left"
                    aria-hidden="true"
                    style={{ fontSize: "20px" }}
                  ></span>
                  {/* For getting name of a country from user */}
                  <input
                    type="text"
                    className="form-control px-4"
                    placeholder="Search"
                    onChange={(e) => this.getSearchedData(e.target.value)}
                  />
                  <span className="input-search fa fa-search form-control-search right"></span>
                </div>
                <div style={{ position: "absolute", zIndex: 1, width: "85%" }}>
                  {/* Show searched counties name in a list */}
                  {this.state.countries.map((country, index) => (
                    <div
                      key={index}
                      onClick={() => this.getWheather(country.name)}
                      className="card border-right-0 border-left-0 border-top-0 border-bottom shadow rounded"
                    >
                      <div className="card-body d-flex justify-content-between py-1">
                        <h5 className="card-title mb-0 align-self-center">
                          <strong>{country.name}</strong>
                        </h5>
                        <div className="d-flex justify-content-between">
                          <span>
                            <strong>{country.area}</strong>
                            <br />
                            Area
                          </span>
                          <span className="align-self-center px-3">
                            <i
                              className="fa fa-cloud"
                              style={{ fontSize: "32px", color: "skyblue" }}
                            ></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Wheather infomation cards */}
                <div className="card-group my-3">
                  <div className="card border-0">
                    <div className="card-body p-1">
                      <p className="card-title mb-0 text-center">
                        <strong> Fri</strong>
                        <br />
                        <strong>
                          28<sup>o</sup>19<sup>o</sup>
                        </strong>
                        <br />
                        <i
                          className="fa fa-sun-o"
                          style={{ fontSize: "32px", color: "yellow" }}
                        ></i>
                        <br />
                        Sunny
                      </p>
                    </div>
                  </div>
                  <div className="card border-info border">
                    <div className="card-body p-1">
                      <p className="card-title mb-0 text-center">
                        <strong>Sat</strong>
                        <br />
                        <strong>
                          29<sup>o</sup>21<sup>o</sup>
                        </strong>
                        <br />
                        <i
                          className="fa fa-sun-o"
                          style={{ fontSize: "32px", color: "yellow" }}
                        ></i>
                        <br />
                        Sunny
                      </p>
                    </div>
                  </div>
                  <div className="card border-0">
                    <div className="card-body p-1">
                      <p className="card-title mb-0 text-center">
                        <strong> Sun </strong>
                        <br />
                        <strong>
                          29<sup>o</sup>21<sup>o</sup>
                        </strong>
                        <br />
                        <i
                          className="fa fa-cloud"
                          style={{ fontSize: "32px", color: "skyblue" }}
                        ></i>
                        <br />
                        Cloudly
                      </p>
                    </div>
                  </div>
                  <div className="card border-0">
                    <div className="card-body p-1">
                      <p className="card-title mb-0 text-center">
                        <strong> Mon </strong>
                        <br />
                        <strong>
                          30<sup>o</sup>20<sup>o</sup>
                        </strong>
                        <br />
                        {/* <!-- <i className="fas fa-cloud-sun" style={{fontSize:"32px",color:"skyblue"}}></i> --> */}
                        <i
                          className="fa fa-cloud"
                          style={{ fontSize: "32px", color: "skyblue" }}
                        ></i>
                        <br />
                        Cloudly
                      </p>
                    </div>
                  </div>
                  <div className="card border-0">
                    <div className="card-body p-1">
                      <p className="card-title mb-0 text-center">
                        <strong> Tue </strong>
                        <br />
                        <strong>
                          31<sup>o</sup>2<sup></sup>
                        </strong>
                        <br />
                        <i
                          className="fa fa-cloud"
                          style={{ fontSize: "32px", color: "skyblue" }}
                        ></i>
                        <br />
                        Rain
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card shadow p-3 mb-5 bg-white rounded border-0">
                  <div className="card-header d-flex border-0 bg-light">
                    <h3 className="pr-3">
                      <strong>
                        26<sup>o</sup>C
                      </strong>
                    </h3>
                    <i
                      className="fa fa-sun-o"
                      style={{ fontSize: "32px", color: "yellow" }}
                    ></i>
                  </div>
                  <div className="card-body">
                    <div>
                    {/* Chart for showing the degree of a country */}
                      <Line
                        data={this.state.data}
                        options={{
                          title: {
                            display: true,
                            text: "Average Rainfall per month",
                            fontSize: 20,
                          },
                          scales: { xAxes: [{ display: false, }], yAxes: [{ display: false, }], },
                          legend: {
                            display: false,  
                            position: "right",
                          },
                        }}
                      />
                    </div>

                    <div className="card-group">
                      <div className="card border-0">
                        <p className="mb-0 font-weight-normal">
                          {" "}
                          <strong> Pressure</strong>
                          <br />
                          1013 hpa
                        </p>
                      </div>
                      <div className="card border-0">
                        <p className="mb-0 font-weight-normal">
                          {" "}
                          <strong>Humidity</strong>
                          <br />
                          93 %
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card-body d-flex justify-content-between my-2">
                    <div className="card border-0">
                      <p className="mb-0 font-weight-normal">
                        {" "}
                        <strong>Sunrise</strong>
                        <br />
                        7:22am
                      </p>
                    </div>
                    <div className="card border-0">
                      <p className="mb-0 font-weight-normal">
                        {" "}
                        <strong>Sunset</strong>
                        <br />
                        6:12 pm
                      </p>
                    </div>
                  </div>

                  <div className="card-body text-info">
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
