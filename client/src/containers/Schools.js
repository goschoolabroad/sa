import React, { Component } from 'react';
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { requestResults, receiveResults, rejectResults } from '../actions/actions.js';
import SchoolLogo from '../assets/canadian-u-d.png';


class Schools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minValue: 10000,
      maxValue: 60000,
      schools: []
    };

    this.onSlide = this.onSlide.bind(this);
  }

  onSlide(render, handle, value, un, percent) {
    this.setState({
      minValue: Math.round(value[0]),
      maxValue: Math.round(value[1])
    });
  };

  componentDidMount() {
    this.props.dispatch(requestResults);
    fetch("/schools", {
      method: "GET",
      headers: new Headers({
        'Content-Type' : 'application/json',
        'Accept': 'application/json'
      })
    })
    .then(response => response.json(),
    error => this.props.dispatch(rejectResults(error)))
    .then(json => { 
      this.props.dispatch(receiveResults);
      this.setState({schools: json})
    });
  }

  render() {
    const { minValue, maxValue } = this.state;
    return(
      <main className="fixed-height">
        <section className="schools py-5"><div className="container"><h1 className="text-white">Schools</h1></div></section>
        <section className="container sch-list py-3 py-md-5">
          <div className="row">
            <div className="col-12 col-md-4 col-xl-3 mb-4 mb-md-0">
              <h2>Filters</h2>
              <ul className="list-unstyled">
                <li>
                  <p>Tuition Fee (USD per year)</p>
                  <div>
                    <Nouislider
                      connect
                      start={[10000, 60000]}
                      behaviour="tap"
                      range={{
                        min: [0],
                        max: [100000]
                      }}
                      onSlide={this.onSlide}
                    />
                    {minValue && maxValue && (
                        <p className="pt-3">USD {minValue.toLocaleString()} - {maxValue.toLocaleString()}</p>
                      )}
                  </div>
                </li>
                <li>
                  <select className="custom-select" name="countries" id="countries">
                    <option value="Any Country">Any Country</option>
                    <option value="Canada">Canada</option>
                    <option value="Singapore">Singapore</option>
                    <option value="USA">USA</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="UAE">UAE</option>
                  </select>
                </li>
              </ul>
              <button className="btn">Filter Results</button>
            </div>
            {this.props.isFetching &&
            <div className="col-12 col-md-8 col-xl-9">
            <h2>Loading...</h2>
            </div>
            }
            {!this.props.isFetching && 
              <div className="col-12 col-md-8 col-xl-9">
              <h2>Schools</h2>
              {this.state.schools.map((school, i) => {
                return (
                  <div key={i} className="media p-4 mb-4 bg-white">
                <div className="row">
                <div className="col-12 col-md-3 col-xl-2">
                  <img className="mr-3" src={SchoolLogo} alt="Generic placeholder" width="110" />
                </div>
                <div className="media-body col-12 col-md-9 col-xl-10">
                  <h3 className="mt-0">
                  <Link title={`Visit ${school.name} page`} to={`/schools/${school.name}`} className="text-dark">{school.name}</Link>
                  </h3>
                  <p>{school.address}</p>
                  <p className="mb-0">{school.description}</p>
                </div>
                </div>
              </div>
                );
              })
              }

              {/* <div className="media p-4 mb-4 bg-white">
                <div className="row">
                <div className="col-12 col-md-3 col-xl-2">
                  <img className="mr-3" src="http://placehold.jp/110x110.png" alt="Generic placeholder" />
                </div>
                <div className="media-body col-12 col-md-9 col-xl-10">
                  <h3 className="mt-0"><a href="/" className="text-dark">Canadian University Dubai</a></h3>
                  <p>Edmonton, Canada</p>
                  <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                </div>
                </div>
              </div>
              <div className="media p-4 mb-4 bg-white">
                <div className="row">
                <div className="col-12 col-md-3 col-xl-2">
                  <img className="mr-3" src="http://placehold.jp/110x110.png" alt="Generic placeholder" />
                </div>
                <div className="media-body col-12 col-md-9 col-xl-10">
                  <h3 className="mt-0"><a href="/" className="text-dark">Canadian University Dubai</a></h3>
                  <p>Edmonton, Canada</p>
                  <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                </div>
                </div>
              </div>
              <div className="media p-4 mb-4 bg-white">
                <div className="row">
                <div className="col-12 col-md-3 col-xl-2">
                  <img className="mr-3" src="http://placehold.jp/110x110.png" alt="Generic placeholder" />
                </div>
                <div className="media-body col-12 col-md-9 col-xl-10">
                  <h3 className="mt-0"><a href="/" className="text-dark">Canadian University Dubai</a></h3>
                  <p>Edmonton, Canada</p>
                  <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                </div>
                </div>
              </div>
              <div className="media p-4 mb-4 bg-white">
                <div className="row">
                <div className="col-12 col-md-3 col-xl-2">
                  <img className="mr-3" src="http://placehold.jp/110x110.png" alt="Generic placeholder" />
                </div>
                <div className="media-body col-12 col-md-9 col-xl-10">
                  <h3 className="mt-0">Media heading</h3>
                  <p>Edmonton, Canada</p>
                  <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                </div>
                </div>
              </div> */}
            </div>
            }
          </div>
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  const { isFetching } = state;
  return {
    isFetching
  };
};

export default connect(mapStateToProps)(Schools);