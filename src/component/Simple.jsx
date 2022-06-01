import { useState } from "react";

const Simple = (props) => {
  const date = new Date();
  const [timeStamp, setTimeStamp] = useState(date[Symbol.toPrimitive]("string"));
  return (
    <div className={props.display}>
      <div className="mt-3 card-body border-2 border-blue-300">
        <div className="text-blue-500">
          <div className="float-left">
            {props.names.map((m, i) => (
              <p key={i}>{m}</p>
            ))}
          </div>
          <span className="ml-3 text-gray-400">@{props.id}</span>
        </div>
        <p>{props.context}</p>
        <div>投稿時刻: {timeStamp}</div>
      </div>
    </div>
  );
};

export default Simple;
