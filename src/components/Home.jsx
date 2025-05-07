import React, { useEffect, useState } from "react";

function Home() {
  const [add, setadd] = useState(() => {
    const save = localStorage.getItem('add');
    return save ? JSON.parse(save) : [];
  });

  const [value, setvalue] = useState("");

  useEffect(() => {
    localStorage.setItem("add", JSON.stringify(add));
  }, [add]);

  
  
  const handleadd = () => {
    if (value.trim()) {
      setadd((prev) => [...prev, value]);
      setvalue("");
    }
  };

  const handlechange = (e) => {
    setvalue(e.target.value);
  };

  const handkedelete = (id) => {
    setadd((prev) => prev.filter((_, index) => index !== id));
  };

  return (
    <div className="">
      <div className="text-xl border-2  h-20 justify-between flex w-full  md:w-screen">
        <div className="flex justify-center gap-11  w-full">
          <h1 className="text-3xl ">Task Manager</h1>
        </div>
      </div>

      <div className="  flex  justify-center   border-2 bg-amber-300 p-10  space-x-3  md:w-screen">
        <div className=" ">
          <div className="    space-x-3">
            <input
              type="text"
              value={value}
              className="border text-center  rounded-lg"
              placeholder="Ente a task"
              onChange={handlechange}
            />
            <button
              className="border-2 p-1 bg-black text-white w-20"
              onClick={handleadd}
            >
              add
            </button>
          </div>
        </div>
        <div>
          {add.map((item, id) => (
            <div className="text-amber-950 font-extrabold  ">
              <ul style={{ listStyle: "inside" }}>
                <li key={id}>
                  {item}
                  {""}
                  <button
                    className="border-2 p-1 bg-red-700 ml-4 text-white  font-normal"
                    onClick={() => handkedelete(id)}
                  >
                    delete
                  </button>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
