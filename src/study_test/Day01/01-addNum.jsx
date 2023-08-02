import React from "react";
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

class Count extends React.Component {
  state = { num: 0 };
  render() {
    let num = this.state;
    return (
      <>
        <span>{num}</span>
        <br />
        <button
          onClick={() => {
            num++;
            this.setState({
              num,
            });
          }}
        >
          累加
        </button>
      </>
    );
  }
}
root.render(<Count />);
