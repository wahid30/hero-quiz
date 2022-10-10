// import React from "react";
// import { PureComponent } from "react";
// import {
//   Area,
//   Bar,
//   CartesianGrid,
//   ComposedChart,
//   Legend,
//   Line,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from "recharts";
// const StatisticsDetails = ({ data }) => {
//   // const { total } = data;
//   const myArray = [];
//   myArray.push(data);
//   console.log(myArray);
//   return (
//     <div style={{ width: "100%", height: 300 }}>
//       <ResponsiveContainer>
//         <ComposedChart
//           width={500}
//           height={400}
//           data={data}
//           margin={{
//             top: 20,
//             right: 20,
//             bottom: 20,
//             left: 20,
//           }}
//         >
//           <CartesianGrid stroke="#f5f5f5" />
//           <XAxis dataKey="total" scale="band" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Area
//             type="monotone"
//             dataKey="total"
//             fill="#8884d8"
//             stroke="#8884d8"
//           />
//           <Bar dataKey="srf" barSize={20} fill="#413ea0" />
//           <Line type="monotone" dataKey="total" stroke="#ff7300" />
//         </ComposedChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default StatisticsDetails;
