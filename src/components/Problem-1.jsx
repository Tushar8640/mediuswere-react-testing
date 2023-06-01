import React, { useEffect, useState } from "react";

const Problem1 = () => {
  const [show, setShow] = useState("all");
  const [tasks, setTasks] = useState([
    {
      name: "Design UI",
      status: "In progress",
    },
    {
      name: "Implement backend logic",
      status: "Completed",
    },
    {
      name: "Write documentation",
      status: "Pending",
    },
    {
      name: "Write documentation",
      status: "Active",
    },
  ]);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [filteredTasks, setFilteredTasks] = useState([...tasks]);

  const handleClick = (val) => {
    setShow(val);
  };

  useEffect(() => {
    if (show == "all") {
      setFilteredTasks(tasks.sort(sortByStatus));
    }
    if (show == "active") {
      setFilteredTasks(tasks.filter((task) => task.status == "Active"));
    }
    if (show == "completed") {
      setFilteredTasks(tasks.filter((task) => task.status == "Completed"));
    }
  }, [show]);
  const handleAddTask = (e) => {
    e.preventDefault();
    setTasks([...tasks, { name, status }]);
  };
  console.log(show);

  // Custom sorting function
  const sortByStatus = (itemA, itemB) => {
    const statusOrder = ["Completed", "Active"];
    const statusA = statusOrder.indexOf(itemA.status);
    const statusB = statusOrder.indexOf(itemB.status);

    return statusB - statusA;
  };

  // Sorting employees and tasks

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            onSubmit={handleAddTask}
            className="row gy-2 gx-3 align-items-center mb-4"
          >
            <div className="col-auto">
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="col-auto">
              <input
                value={status}
                name="status"
                onChange={(e) => setStatus(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Status"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks?.map((task, i) => (
                <tr key={i}>
                  <td>{task?.name}</td>
                  <td>{task?.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
