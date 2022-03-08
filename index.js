const element = (
  <div className="backgroundContainer" id="bgElement">
    <div className="acturalEl">
      <div>
        <h1 className="heading"> Super Over League </h1>
      </div>
      <div className="container2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/rcb-img.png"
          className="image"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/csk-img.png"
          className="image"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
