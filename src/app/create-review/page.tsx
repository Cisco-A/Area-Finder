// "use client";
// import { useState } from "react";

// export default function CreateReview() {
//   const [selectedOption, setSelectedOption] = useState("Select Amenities");
//   const [rating, setRating] = useState(1);
//   const [reviewText, setReviewText] = useState("");

//   const handleChange = (event: any) => {
//     const { name, value } = event.target;
//     if (name === "selectMenu") setSelectedOption(value);
//     if (name === "rating") setRating(parseInt(value));
//     if (name === "reviewText") setReviewText(value);
//   };

//   const handleSubmit = (event: any) => {
//     event.preventDefault();

//     if (reviewText.trim() === "") return alert("Please enter a review");

//     const reviewData = {
//       selectedOption,
//       rating,
//       reviewText,
//     };

//     // Since there is no server to send the data to, we will log it to the console
//     console.log(reviewData);

//     // Clear the form
//     setSelectedOption("Select Amenities");
//     setRating(1);
//     setReviewText("");
//   };

//   return (
//     <div className="m-auto w-[90%]">
//       <h2 className="mb-3 text-center text-md font-medium leading-6">
//         Review Location
//       </h2>
//       <h1 className="mb-8 text-center text-xl font-medium leading-6 md:text-left">
//         Bonny and Clyde Street, Lagos
//       </h1>

//       <div>
//         <form
//           action=""
//           className="form-control gap-y-4"
//           onSubmit={handleSubmit}
//         >
//           <select
//             name="selectMenu"
//             onChange={handleChange}
//             defaultValue="Select Amenities"
//             value={selectedOption}
//             required
//             className="select w-full bg-[#F3F7FE] text-neutral"
//           >
//             <option disabled value="Select Amenities">
//               Select Amenities
//             </option>
//             <option value="electricity">Electricity</option>
//           </select>
//           <div>
//             <h3 className="mb-4 text-sm font-medium leading-[16.94px]">
//               Rate location
//             </h3>
//             <div className="rating">
//               <input
//                 value="1"
//                 type="radio"
//                 name="rating"
//                 className="mask mask-star-2 bg-orange-400"
//                 onChange={handleChange}
//                 defaultChecked
//               />
//               <input
//                 value="2"
//                 type="radio"
//                 name="rating"
//                 className="mask mask-star-2 bg-orange-400"
//                 onChange={handleChange}
//               />
//               <input
//                 value="3"
//                 type="radio"
//                 name="rating"
//                 className="mask mask-star-2 bg-orange-400"
//                 onChange={handleChange}
//               />
//               <input
//                 value="4"
//                 type="radio"
//                 name="rating"
//                 className="mask mask-star-2 bg-orange-400"
//                 onChange={handleChange}
//               />
//               <input
//                 value="5"
//                 type="radio"
//                 name="rating"
//                 className="mask mask-star-2 bg-orange-400"
//                 onChange={handleChange}
//               />
//             </div>
//           </div>
//           <label
//             htmlFor="reviewText"
//             className="text-sm font-normal leading-[16.94px]"
//           >
//             Write Review
//           </label>
//           <textarea
//             required
//             name="reviewText"
//             id="reviewText"
//             value={reviewText}
//             cols={30}
//             rows={5}
//             placeholder="Enter your review here"
//             className="textarea textarea-bordered textarea-primary textarea-md w-full"
//             onChange={handleChange}
//           />

//           <label
//             htmlFor=""
//             className="label cursor-pointer justify-normal gap-x-3"
//           >
//             <input
//               type="checkbox"
//               className="checkbox h-[14px] w-[14px] rounded-[4px]"
//               name=""
//               id=""
//             />
//             <span className="label-text font-normal leading-[16.94px] text-[#484851]">
//               Post as Anonymous
//             </span>
//           </label>

//           <div className="mb-4 flex justify-between space-x-2">
//             <button
//               type="submit"
//               className="h-[45px] flex-grow rounded-md border-[0.5px] border-primary bg-primary text-white hover:bg-secondary md:h-[50px]"
//             >
//               SUBMIT
//             </button>
//             <button
//               type="submit"
//               className="h-[45px] flex-grow rounded-md border-[0.5px] border-primary bg-transparent text-primary hover:border-[1.5px] focus:outline-0 focus:bg-[#F1F5FF] md:h-[50px]"
//             >
//               CANCEL
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
