import React from 'react';
import BgImg from '../assets/delfi-de-la-rua-140752-unsplash.jpg';
import StudentPie from '../containers/StudentPie';
import SchoolLogo from '../assets/canadian-u-d.png';

export const SchoolChildItem = ({school}) => {
  return (
    <main className="fixed-height">
      <div className="sch-bg-img w-100" style={{backgroundImage: `url(${BgImg})`}}></div>
      <section className="container py-5 sch-page">
        <div className="row">

            <div className="col-12 col-md-9">
              {school &&
                <section className="mb-4">
                  <div className="row sch-title">
                    <div className="col-12 col-md-3 col-lg-2">
                      <img className="mr-3" src={SchoolLogo} alt="Generic placeholder" width="120" />
                    </div>
                    <div className="col-12 col-md-9 col-lg-10">
                      <h1>{school.name}</h1>
                      <p>{`${school.address} | ${school.campus_type}`}</p>
                    </div>
                  </div>
                  <p>{school.description}</p>
                </section>
              }

              {school && school.score_req.length > 0 &&
                <section className="px-4 pb-4 mb-4">
                  <h3>Score Requirements</h3>
                  <ul className="list-unstyled">
                    {school.score_req.map((req, i) => {
                      return (<li key={i}>{req}</li>);
                    })
                    }
                  </ul>
                </section>
              }
  
              {school &&
                <section className="px-4 pb-4 mb-4">
                  <h3>Fees</h3>
                  <div>
                    <h4>Tuition Fees</h4>
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <p className="mb-1"><strong>Undergraduate Domestic</strong></p>
                        <p>{school.tuition_fee.dom_undergraduate}</p>
                      </div>
                      <div className="col-12 col-md-6">
                        <p className="mb-1"><strong>Undergraduate International</strong></p>
                        <p>{school.tuition_fee.intl_undergraduate}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <p className="mb-1"><strong>Postgraduate Domestic</strong></p>
                        <p>{school.tuition_fee.dom_postgraduate}</p>
                      </div>
                      <div className="col-12 col-md-6">
                        <p className="mb-1"><strong>Postgraduate International</strong></p>
                        <p>{school.tuition_fee.intl_postgraduate}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4>Room and Board</h4>
                    <p className="mb-1"><strong>Minimum Cost (sharing)</strong></p>
                    <p>{school.room_board}</p>
                  </div>
                </section>
              }
  
              {school &&
                <section className="px-4 pb-4 mb-4">
                  <h3>Students</h3>
                  <div>
                    <h4>Number of Students</h4>
                    <StudentPie total={school.total_students} intl={school.intl_students} />
                  </div>
                  {school.female_male_ratio &&
                    <div>
                      <h4>Female-Male Ratio</h4>
                      <p>{school.female_male_ratio}</p>
                    </div>
                  }
                  <div>
                    <h4>Student-Faculty Ratio</h4>
                    <p>{school.student_fac_ratio}</p>
                  </div>
                </section>
              }

            </div>
        </div>
      </section>
    </main>
  )
};