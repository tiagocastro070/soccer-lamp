import React from "react";

export default function ListItem(props) {
  return (
    <li className="list-group-item" key={props.listKey}>
      <div className="row">
        <div className="col">{props.todoName}</div>
        <div className="col">
          <button>✔️</button>
          <button>❌</button>
        </div>
      </div>
    </li>
  );
}
