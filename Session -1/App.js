// ---------------------------------- Create Hello World --------------------------------------------------------------------------

// const heading = React.createElement("h1",{id:"heading"},"Hello world from React !!"); // Creates Object

// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); // Converts object into heading tag

// -------------------------------------------- Create Nested HTML tag using React ------------------------------------------

// const parent = React.createElement("div", {id : "parent"},React.createElement("div", {id : "child"},React.createElement("h1", {},"This is Heading Tag")));

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

// --------------------------------------- Create Siblings using React --------------------------------------------------------

// Use array of elements to create Siblings ----------------------------

// const parent = React.createElement("div", {id : "parent"},React.createElement("div", {id : "child"},[React.createElement("h1", {},"This is Heading Tag"),React.createElement("h2", {},"This is Heading2 Tag")]));

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

