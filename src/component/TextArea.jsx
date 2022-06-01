import { useState } from "react";
import { Simple, Detail } from "./index";

const TextArea = () => {
  const [display, setDisplay] = useState("hidden");
  const [names, setNames] = useState([]);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [context, setContext] = useState("");

  const toggle = () => {
    setDisplay("");
    setNames([...names, name]);
    console.log(names);
  };
  return (
    <div className="py-10 px-10 border-2 rounded-lg border-blue-300">
      <div>
        <span className="mx-3 text-blue-300">Name</span>
        <input className="border-2 border-blue-300 pl-3 text-blue-300" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="enter your name" />
        <span className="mx-3 text-blue-300">ID</span>
        <input className="border-2 border-blue-300 pl-3 text-blue-300" value={id} onChange={(e) => setId(e.target.value)} type="number" placeholder="enter your ID" />
        <div className="flex justify-center my-10">
          <textarea className="px-2 py-2 border-2 border-blue-300" name="" id="" cols="30" rows="10" placeholder="今何してる？" value={context} onChange={(e) => setContext(e.target.value)}></textarea>
        </div>
        <div className="flex justify-end">
          <button onClick={toggle} className="btn btn-primary">
            Create Tweet
          </button>
        </div>
      </div>
      <div>
        <Simple display={display} names={names} id={id} context={context} />
        {/* <Detail display={display} name={name} id={id} context={context} /> */}
      </div>
    </div>
  );
};

export default TextArea;
