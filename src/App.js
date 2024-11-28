// import logo from "./logo.svg";
// import "./App.css";
// import Navbar from "./Navbar.js";
// import Home from "./Home.js";
// import { useState } from "react";

// function App() {
//   const [Display, setDisplay] = useState("");
//   const [Expression, setExpression] = useState([]);
//   const handleclick = (value) => {
//     setDisplay(value);
//     setExpression([...Expression, value]);
//   };
//   const handleResult = () => {
//     const result = Expression.join("")
//       .split(/(\D)/g)
//       .map((value) => (value.match(/\d/g) ? parseInt(value, 0) : value));

//     reduce((acc, value, index, Array) => {
//       switch (value) {
//         case "+":
//           return (acc = acc + Array[index + 1]);
//         case "-":
//           return (acc = acc - Array[index + 1]);
//         case "*":
//           return (acc = acc * Array[index + 1]);
//         case "/":
//           return (acc = acc / Array[index + 1]);
//         default:
//           return acc;
//       }
//     });
//   };
// return (
//   <div className="App">
//     <Navbar />
//     <div className="content">
//     <Home />
//     </div>
//   </div>
// );

// const [Name, setName] = useState("Mahdi");
// const [Events, setEvents] = useState([
//   { title: "The City of god (2002)", id: 1 },
//   { title: "Schindler List(1996)", id: 2 },
//   { title: "Taste of cherry (1997)", id: 3 },
//   { title: "The Forrest gump (2000)", id: 4 },
//   { title: "fight club (2001)", id: 5 },
//   { title: "The shining (1999)", id: 6 },
// ]);

// const [showEvents, setShowEvents] = useState(true);

// const handleclick = (id) => {
//   setName("it's Ok");
//   setEvents((prevEvent) => {
//     return prevEvent.filter((event) => {
//       return id !== event.id;
//     });
//   });
// };

//   return (
//     <div className="App">
//       <h3 className="Display">{Display}</h3>
//       <span className="Expression">{Expression}</span>
//       <section className="panel">
//         <section className="numbers">
//           <button onClick={() => handleclick("1")}>1</button>
//           <button onClick={() => handleclick("2")}>2</button>
//           <button onClick={() => handleclick("3")}>3</button>
//           <button onClick={() => handleclick("+")}>+</button>

//           <button onClick={() => handleclick("4")}>4</button>
//           <button onClick={() => handleclick("5")}>5</button>
//           <button onClick={() => handleclick("6")}>6</button>
//           <button onClick={() => handleclick("-")}>-</button>

//           <button onClick={() => handleclick("7")}>7</button>
//           <button onClick={() => handleclick("8")}>8</button>
//           <button onClick={() => handleclick("9")}>9</button>
//           <button onClick={() => handleclick("*")}>*</button>
//         </section>
//         <section className="operateor">
//           <button onClick={clearInput}>C</button>
//           <button onClick={() => handleclick("0")}>0</button>
//           <button onClick={() => handleResult()}>=</button>
//           <button onClick={() => handleclick("/")}>/</button>
//         </section>
//       </section>
//       <h1>{Name}</h1>

// export default App;

// import logo from "./logo.svg";
// import "./App.css";
// import { useState } from "react";

// function App() {
//   const [Display, setDisplay] = useState("");
//   const [Expression, setExpression] = useState([]);
//   const [Name, setName] = useState("Mahdi");

//   const handleclick = (value) => {
//     setDisplay(value);
//     setExpression((prev) => [...prev, value]);
//   };

//   const handleResult = () => {
//     const result = Expression.join("")
//       .split(/(\D)/g)
//       .map((value) => (value.match(/\d/g) ? parseInt(value, 10) : value));

//     const calculatedResult = result.reduce((acc, value, index, array) => {
//       if (typeof value === 'number') return acc; // برای اعداد فقط برگردانید
//       switch (value) {
//         case "+":
//           return acc + array[index + 1];
//         case "-":
//           return acc - array[index + 1];
//         case "*":
//           return acc * array[index + 1];
//         case "/":
//           return acc / array[index + 1];
//         default:
//           return acc;
//       }
//     }, result[0]);

//     setDisplay(calculatedResult);
//     setExpression([]); // پاک کردن عبارت بعد از محاسبه
//   };

//   const clearInput = () => {
//     setDisplay("");
//     setExpression([]);
//   };

//   return (
//     <div className="App">
//       <h3 className="Display">{Display}</h3>
//       <span className="Expression">{Expression.join(" ")}</span>
//       <section className="panel">
//         <section className="numbers">
//           <button onClick={() => handleclick("1")}>1</button>
//           <button onClick={() => handleclick("2")}>2</button>
//           <button onClick={() => handleclick("3")}>3</button>
//           <button onClick={() => handleclick("+")}>+</button>

//           <button onClick={() => handleclick("4")}>4</button>
//           <button onClick={() => handleclick("5")}>5</button>
//           <button onClick={() => handleclick("6")}>6</button>
//           <button onClick={() => handleclick("-")}>-</button>

//           <button onClick={() => handleclick("7")}>7</button>
//           <button onClick={() => handleclick("8")}>8</button>
//           <button onClick={() => handleclick("9")}>9</button>
//           <button onClick={() => handleclick("*")}>*</button>
//         </section>
//         <section className="operator">
//           <button onClick={clearInput}>C</button>
//           <button onClick={() => handleclick("0")}>0</button>
//           <button onClick={handleResult}>=</button>
//           <button onClick={() => handleclick("/")}>/</button>
//         </section>
//       </section>
//     </div>
//   );
// }

// export default App;

// import "./App.css";
// import { useState } from "react";
// import Title from "./components/Title";
// function App() {
//   const [showEvents, setShowEvents] = useState(true);
//   const [events, setevents] = useState([
//     { title: "The City of god (2002)", id: 1 },
//     { title: "Schindler List(1996)", id: 2 },
//     { title: "Taste of cherry (1997)", id: 3 },
//     { title: "The Forrest gump (2000)", id: 4 },
//     { title: "fight club (2001)", id: 5 },
//     { title: "The shining (1999)", id: 6 },
//   ]);

//   const handleClick = (id) => {
//     setevents((prevEvent) => {
//       return prevEvent.filter((kaka) => {
//         return id !== kaka.id;
//       });
//     });
//   };

//   );
// }
// export default App;
import "./App.css";
import { useState} from "react";
import Title from "./components/Title";
import Model from "./components/Model";

function App() {
  const [Showmodal, setShowmodal] = useState(true);

  const [newTitle, setNewTitle] = useState("");

  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: "The City of God (2002)", id: 1 },
    { title: "Schindler's List (1996)", id: 2 },
    { title: "Taste of Cherry (1997)", id: 3 },
    { title: "Forrest Gump (2000)", id: 4 },
    { title: "Fight Club (2001)", id: 5 },
    { title: "The Shining (1999)", id: 6 }, ]);



  const handleOpen = () => {
    setShowmodal(true);
  };

  const handleClose = () => {
    setShowmodal(false);
  };

  const handleClick = (id) => {
    setEvents((prevEvent) => {
      return prevEvent.filter((kaka) => {
        return id !== kaka.id;
      });
    });
  };

  const handleAddTitle = () => {
    if (newTitle) {
      const newEvent = { title: newTitle, id: Date.now() }; // استفاده از Date.now() به عنوان ID
      setEvents((prevEvents) => [...prevEvents, newEvent]);
      setNewTitle(""); // پاک کردن ورودی بعد از افزودن
    }
  };

  const subtitle = "lather movies";
  return (
    <div className="App">
      <div className="title-container">
        <Title title="my favorite Movies" subtitle={subtitle} />
        </div>
      {
        <div>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Enter the new title"
            className="input-title"
          ></input>
          <button onClick={handleAddTitle}>New add title</button>
        </div>
      }
 
      {/* <div  className= "Newadd" style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="عنوان جدید را وارد کنید"
          style={{
            padding: "10px",
            width: "300px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <button onClick={handleAddTitle}>افزودن عنوان</button>
      </div> */}

      {showEvents &&
        events.map((event) => (
          <div key={event.id} className="event-item">
            <h3>{event.title}</h3>
            <button onClick={() => handleClick(event.id)}>Delete</button>
          </div>
        ))}
        
      <button onClick={() => setShowEvents(!showEvents)}>
        {showEvents ? "Hide" : "Show"}
      </button>
      <button className="open-modal-button" onClick={handleOpen}>
        Open Modal
      </button>
      {/* <Title title="my favorite Books" subtitle="latest Books" /> */}
      {/* <Model /> */}
      {Showmodal && (
        <Model handleClose={handleClose}>
          <h1>10% oof coupon modal</h1>
          <p>use the code opencode</p>
          <br></br>
        </Model>
      )}
    </div>
  );
}

export default App;
