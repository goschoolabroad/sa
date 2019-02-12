import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

class StudentPie extends Component {
  render() {
    let international = Math.floor(this.props.total * this.props.intl / 100);
    let remaining = this.props.total - international;
    let data = {
      datasets: [{
          data: [remaining, international],
          backgroundColor: ["#545454", "#ffcc00"],
          borderColor: 'white',
      }],

      labels: [
          'Local Students',
          'International Students'
      ]
    };
    return(
      <Doughnut data={data}
        options={{
          title: {
            display: true,
            position: "bottom"
          },
          animateRotate : true,
          legend: {
            position: "right",
            labels: { fontSize: 16, fontFamily: "Open Sans" }
          }
        }}
        />
    );
  }
}

export default StudentPie;