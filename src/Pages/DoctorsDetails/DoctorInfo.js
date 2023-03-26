// import React, { useEffect } from "react";
// import { useState } from "react";

// const DoctorInfo = ({ doctor }) => {
//   console.log(doctor);

//   const imgData = [
//     {
//       _id: 30,
//       title: "Wedding Events",
//       tag: "Wedding",
//     },
//     {
//       _id: 31,
//       title: "Social Meetings",
//       tag: "Social",
//     },
//     {
//       _id: 32,
//       title: "Wedding Events",
//       tag: "Wedding",
//     },
//     {
//       _id: 33,
//       title: "Birthday Parties",
//       tag: "Birthday",
//     },
//     {
//       _id: 34,
//       title: "Wedding Events",
//       tag: "Wedding",
//     },
//     {
//       _id: 35,
//       title: "Social Meetings",
//       tag: "Social",
//     },
//     {
//       _id: 35,
//       title: "Wedding Events",
//       tag: "Wedding",
//     },
//     {
//       _id: 37,
//       title: "Birthday Parties",
//       tag: "Birthday",
//     },
//   ];
//   const [tag, setTag] = useState("all");
//   const [allimgData, setAllimgData] = useState(imgData);
//   useEffect(() => {
//     console.log(allimgData);
//     if (tag === "Birthday") {
//       const filterimgData = imgData.filter((item) => item.tag === "Birthday");
//       setAllimgData(filterimgData);
//     }
//     if (tag === "Wedding") {
//       const filterimgData = imgData.filter((item) => item.tag === "Wedding");
//       setAllimgData(filterimgData);
//     }
//     if (tag === "Social") {
//       const filterimgData = imgData.filter((item) => item.tag === "Social");
//       setAllimgData(filterimgData);
//     }
//   }, [tag]);

//   return (
//     <div className="my-20 lg:mx-32 mx-5">
//       <div className="flex mb-5 gap-4">
//         <button
//           className={`button text-[18px] pb-2 text-primary ${
//             tag === "Wedding" ? "border-b-2 border-primary" : ""
//           }`}
//           onClick={() => setTag("Wedding")}
//         >
//           Wedding Events
//         </button>
//         <button
//           className={`button text-[18px] pb-2 text-primary ${
//             tag === "Birthday" ? "border-b-2 border-primary" : ""
//           }`}
//           onClick={() => setTag("Birthday")}
//         >
//           Birthday Events
//         </button>
//         <button
//           className={`button text-[18px] pb-2 text-primary ${
//             tag === "Social" ? "border-b-2 border-primary" : ""
//           }`}
//           onClick={() => setTag("Social")}
//         >
//           Social Events
//         </button>
//       </div>
//       <div className=" grid gap-[1px] lg:grid-cols-4 grid-cols-2">
//         {allimgData.map((item) => (
//           <div key={item._id} className="relative">
//             <div className="absolute top-0">
//               <div
//                 className={`hover:bg-gray-900/80 transition-all hover:block lg:w-[315px] w-[100%] h-[210px]  text-black/0 hover:text-white bg-center bg-cover`}
//               >
//                 <h2 className="lg:w-[315px] absolute top-10 left-10 text-[18px] font-bold">
//                   {item.title}
//                 </h2>
//                 <p className="absolute top-16 left-10 ">
//                   Lorem ipsum dolor sit amet.
//                 </p>
//                 <span></span>
//               </div>
//               <div></div>
//             </div>
//             <img className="" src={item.img} alt="" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DoctorInfo;
