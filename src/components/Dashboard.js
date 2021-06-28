import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import './dashboard.css'

class Dashboard extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:'City'
  }
  handleChange(e) {
    console.log("City Selected!!",e.target.value);
    let lable_index = this.state.chartData.labels.indexOf(e.target.value)
    
    let new_state = {
      labels:[],
      datasets:[{ 
        label:"",
        data:[],
        backgroundColor:[],
      }]
    }
    new_state.labels.push(this.state.chartData.labels[lable_index]);
    new_state.datasets[0].label = this.state.chartData.labels[lable_index];
    new_state.datasets[0].data.push(this.state.chartData.datasets[0].data[lable_index]);
    new_state.datasets[0].backgroundColor.push(this.state.chartData.datasets[0].backgroundColor[lable_index]);
   
    console.log("lable_index => ",new_state)
    
    this.setState({ chartData: new_state });
  }
  render(){
    return (
      <div>
        <div className="topnav">
          <a href="href-no-hash">Welcome, Pramod</a>
          <a href="/dashboard">Home</a>
          <div className="topnav-right">
            <a href="/">Logout</a>
          </div>
        </div>
        <div className="container">
            <div className="row">
              <h3>{`Corona vaccination data from ${this.props.location}`}</h3>
            </div>
            <div className="row">
              <div className="col">
                <Pie
                  data={this.state.chartData}
                  options={{
                    title:{
                      display:this.props.displayTitle,
                      /* text:'Corona vaccination data from '+this.props.location, */
                      fontSize:25
                    },
                    legend:{
                      display:this.props.displayLegend,
                      position:this.props.legendPosition
                    }
                  }}
                />
              </div>
              <div className="col">
                <Bar
                  data={this.state.chartData}
                  options={{
                    title:{
                      display:this.props.displayTitle,
                      /* text:'Corona vaccination data from '+this.props.location, */
                      fontSize:25
                    },
                    legend:{
                      display:this.props.displayLegend,
                      position:this.props.legendPosition
                    }
                  }}
                />
              </div>
              <div className="col">
                <Line
                  data={this.state.chartData}
                  options={{
                    title:{
                      display:this.props.displayTitle,
                      /* text:'Corona vaccination data from '+this.props.location, */
                      fontSize:25
                    },
                    legend:{
                      display:this.props.displayLegend,
                      position:this.props.legendPosition
                    }
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="tabular_data">
                <table className="table">
                  <thead>
                    <tr>
                      {
                        this.state.chartData.labels.map((d,index)=>{
                          return <th key={index} >{d}</th>;    
                        })
                      }                  
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                      {
                        this.state.chartData.datasets[0].data.map( (d,index)=>{
                          return <td key= { index } >{d}</td>;    
                        })
                      }                  
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row">
              <div className="mb-3">
                <select className="form-select" aria-label="Default select example" onChange={(e) => {this.handleChange(e)}}>
                  <option>Select City</option>
                  {
                    this.state.chartData.labels.map( (data,index)=>{
                      return <option value={data} key={index}>{data}</option>;    
                    })
                  }
                </select>
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Manual Search" />
              </div>
              <button type="button" className="btn btn-primary">Search</button>
            </div>   
        </div>
      </div>
    )
  }
}
export default Dashboard;