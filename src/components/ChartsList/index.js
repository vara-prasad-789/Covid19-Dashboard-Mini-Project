import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  BarChart,
  Bar,
  Cell,
} from 'recharts'

class ChartsList extends Component {
  state = {
    barChart: [],
    lineChart: [],
    lineChart2: [],
    lineChart3: [],
    lineChart4: [],
    lineChart5: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getChartData()
  }

  getChartData = async () => {
    const timelineData = await fetch(
      'https://apis.ccbp.in/covid19-timelines-data/AP',
    )
    const time = await timelineData.json()
    const state1 = time.AP
    const {dates} = state1
    const datesArray = Object.entries(dates)
    const barChartData1 = datesArray.slice(0, 10)
    const barChartData = barChartData1.map(item => {
      const date1 = item[0]
      const confirmed1 = item[1].delta.confirmed
      return {date: date1, count: confirmed1}
    })
    const barChartData2 = datesArray.map(item => {
      const date1 = item[0]
      const confirmed1 = item[1].delta.confirmed
      return {date: date1, count: confirmed1}
    })
    const barChartData4 = datesArray.map(item => {
      const date1 = item[0]
      const confirmed1 = item[1].delta.recovered
      return {date: date1, count: confirmed1}
    })
    const barChartData5 = datesArray.map(item => {
      const date1 = item[0]
      const confirmed1 = item[1].delta.deceased
      return {date: date1, count: confirmed1}
    })
    const barChartData6 = datesArray.map(item => {
      const date1 = item[0]
      const confirmed1 = item[1].delta.tested
      return {date: date1, count: confirmed1}
    })
    const barChartData7 = datesArray.map(item => {
      const date1 = item[0]
      const data3 = item[1].delta
      const {recovered, confirmed, deceased} = data3
      const active = confirmed - (recovered + deceased)
      const confirmed1 = active
      return {date: date1, count: confirmed1}
    })

    this.setState({
      isLoading: false,
      barChart: barChartData,
      lineChart: barChartData2,
      lineChart2: barChartData4,
      lineChart3: barChartData5,
      lineChart4: barChartData6,
      lineChart5: barChartData7,
    })
  }

  renderLoadingView = () => (
    <div
      className="products-loader-container"
      // testid="timelinesDataLoader"
    >
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderChartsView = () => {
    const {
      barChart,
      lineChart,
      lineChart2,
      lineChart3,
      lineChart5,
      lineChart4,
    } = this.state

    return (
      <div>
        <div>
          <div className="bar-chart">
            <BarChart
              width={1100}
              height={450}
              data={barChart}
              margin={{bottom: 15}}
            >
              <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                padding={{bottom: 20}}
                tick={{stroke: '#FF073A', strokeWidth: 1}}
              />
              <YAxis hide />
              <Tooltip />
              <Bar
                dataKey="count"
                fill="#9A0E31"
                className="bar"
                label={{
                  position: 'top',
                  color: '#9A0E31',
                  margin: '15',
                }}
              >
                <Cell fill="#9A0E31" />
                <Cell fill="#9A0E31" />
                <Cell fill="#9A0E31" />
                <Cell fill="#9A0E31" />
                <Cell fill="#9A0E31" />
                <Cell fill="#9A0E31" />
                <Cell fill="#9A0E31" />
                <Cell fill="#9A0E31" />
                <Cell fill="#9A0E31" />
                <Cell fill="#9A0E31" />
              </Bar>
            </BarChart>
          </div>
        </div>
        <h2 className="display-trends">Display Spread Trends</h2>
        <div className="confirmed-chart">
          <div className="App">
            <h2>Confirmed</h2>
            <LineChart
              width={1130}
              height={250}
              data={lineChart}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}
            >
              <XAxis
                dataKey="date"
                tickLine={{color: '#FF073A'}}
                tick={{stroke: '#FF073A', strokeWidth: 1}}
                strokeWidth={2}
              />
              <YAxis
                tickLine={{color: '#FF073A'}}
                tick={{stroke: '#FF073A', strokeWidth: 1}}
                strokeWidth={2}
              />
              <Tooltip />
              <Line
                dataKey="count"
                stroke="#FF073A"
                dot={{strokeWidth: 2, fill: '#FF073A'}}
              />
            </LineChart>
          </div>
        </div>
        <div className="active-chart">
          <div className="App">
            <h2>ACTIVE</h2>
            <LineChart
              width={1130}
              height={250}
              data={lineChart5}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}
            >
              <XAxis
                dataKey="date"
                tickLine={{color: '#007BFF'}}
                tick={{stroke: '#007BFF', strokeWidth: 1}}
                strokeWidth={2}
              />
              <YAxis
                tickLine={{color: '#007BFF'}}
                tick={{stroke: '#007BFF', strokeWidth: 1}}
                strokeWidth={2}
              />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="count"
                stroke="#007BFF"
                dot={{strokeWidth: 2, fill: '#007BFF'}}
              />
            </LineChart>
          </div>
        </div>

        <div className="recovered-chart">
          <div className="App">
            <h2>Recovered</h2>
            <LineChart
              width={1130}
              height={250}
              data={lineChart2}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}
            >
              <XAxis
                dataKey="date"
                tickLine={{color: '#27A243'}}
                tick={{stroke: '#27A243', strokeWidth: 1}}
                strokeWidth={2}
              />
              <YAxis
                tickLine={{color: '#27A243'}}
                tick={{stroke: '#27A243', strokeWidth: 1}}
                strokeWidth={2}
              />
              <Tooltip />
              <Line
                dataKey="count"
                stroke="#27A243"
                dot={{strokeWidth: 2, fill: '#27A243'}}
              />
            </LineChart>
          </div>
        </div>
        <div className="deceased-chart">
          <div className="App">
            <h2>Deceased</h2>
            <LineChart
              width={1130}
              height={250}
              data={lineChart3}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}
            >
              <XAxis
                dataKey="date"
                tickLine={{color: '#6C757D'}}
                tick={{stroke: '#6C757D', strokeWidth: 1}}
                strokeWidth={2}
              />
              <YAxis
                tickLine={{color: '#6C757D'}}
                tick={{stroke: '#6C757D', strokeWidth: 1}}
                strokeWidth={2}
              />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="count"
                stroke="#6C757D"
                dot={{strokeWidth: 2, fill: '#6C757D'}}
              />
            </LineChart>
          </div>
        </div>
        <div className="tested-chart">
          <div className="App">
            <h2>Tested</h2>
            <LineChart
              width={1130}
              height={250}
              data={lineChart4}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}
            >
              <XAxis
                dataKey="date"
                tickLine={{color: '#9673B9'}}
                tick={{stroke: '#9673B9', strokeWidth: 1}}
                strokeWidth={2}
              />
              <YAxis
                tickLine={{color: '#9673B9'}}
                tick={{stroke: '#9673B9', strokeWidth: 1}}
                strokeWidth={2}
              />
              <Tooltip />
              <Line type="monotone" dataKey="count" stroke="#9673B9" />
            </LineChart>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? this.renderLoadingView() : this.renderChartsView()}
      </div>
    )
  }
}
export default ChartsList
