import React from "react";
import "./Suggestions.scss";
import { dashboardItems } from "../../data/dashboardItems";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Button from "@mui/material/Button";

const Suggestions = () => {
  //const [count, setCount] = React.useState(0);
  const [items, setItems] = React.useState([...dashboardItems.slice(0, 8)]);
  //const components = [...dashboardItems.slice(0, 5)];

  const nextItem = () => {
    setItems([...items, dashboardItems.slice(8, 11)]);
    console.log("Next Items");
  };

  const prevItem = () => {
    console.log("Prev Items");
  };

  return (
    <div className="suggestions">
      <Button className="suggestions--ItemsNavLeft" onClick={prevItem}>
        <ChevronLeftIcon />
      </Button>

      {/* <Button
          className="suggestions--ItemsNavLeft"
          onClick={() => setCount(count - 1)}
          disabled
        >
          <ChevronLeftIcon />
        </Button> */}

      <div className="suggestions--ItemsDiv">
        {items.map((name) => (
          <span className="suggestions--ItemsDiv--Item" key={name}>
            {name}
          </span>
        ))}
      </div>
      {/* {items.map((item, index) => {
        return (
          <div className="suggestions--ItemsDiv">
            <span className="suggestions--ItemsDiv--Item">{item}</span>
          </div>
        );
      })} */}

      <Button className="suggestions--ItemsNavRight" onClick={nextItem}>
        <ChevronRightIcon />
      </Button>

      {/* <Button
          className="suggestions--ItemsNavRight"
          onClick={() => setCount(count + 1)}
          disabled
        >
          <ChevronRightIcon />
        </Button> */}
    </div>
  );
};

export default Suggestions;
