import React from "react";
import "./Calculator.css";
function Calculator() {
  let firstVal;
  const myArray = [1, 2, 3, "C", 4, 5, 6, "+", 7, 8, 9, "-", 0, "/", "*"];

  return (
    <>
      <div className="First_Class">
        <h1>Calculator</h1>
        <div className="button">
          {myArray.map((value) => {
            return (
              <div
                className="span"
                onClick={(value) => {
                  firstVal = value;
                  console.log(firstVal);
                }}
              >
                {value}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Calculator;

// import React from "react";
// import "./Calculator.css";
// function Calculator() {
//   let firstVal;
//   const myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "/", "+", "-", "*"];

//   return (
//     <>
//       <div className="First_Class">
//         <h1>Calculator</h1>
//         <div className="button">
//           {myArray.map((value) => {
//             return (
//               <div
//                 className="span" onClick={(value) => {
//                   firstVal = value;
//                   console.log(firstVal);
//                 }}>{value}</div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Calculator;
