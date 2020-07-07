import React from "react";
import styles from "../stylesheets/time.module.css";
import AnalogClock, { Themes } from "react-analog-clock";

export default class Time extends React.Component {
  state = { curTime: null, curDate: null };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        curTime: new Date().toLocaleString().split(",")[1],
        curDate: new Date().toLocaleString().split(",")[0],
      });
    }, 1000);
  }
  render() {
    return (
      <div>
        <AnalogClock theme={Themes.Light} width={300} />{" "}
        <div className={styles.Time}>{this.state.curTime}</div>
        <div className={styles.Time}> {this.state.curDate}</div>
      </div>
    );
  }
}
