// import React, { useState } from "react";

// export default function AllTodo({ title, status, priority, description, id , key }) {
//   const URL = `/todos/${id}`;

//   const [isEditing, setIsEditing] = useState(false);
//   const [editedData, setEditedData] = useState({
//     title: title || "",
//     status: status || "",
//     priority: priority || "",
//     description: description || "",
//   });
//   console.log(title,);
//   const handleDelete = async () => {
//     fetch(URL, {
//       method: "DELETE",
//       headers: { "Content-Type": "application/json" },
//     });
//   };

//   const handleEdit = async () => {
//     setIsEditing(true);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     fetch(URL, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(editedData),
//     });
//     setIsEditing(false);
//   };

//   const handleChange = (e) => {
//     setEditedData({
//       ...editedData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <div>
//       <table
//         className="table table-success table-striped"
//         style={{ width: "90%", margin: "auto" }}
//         key ={key}
//       >
//         <thead>
//           <tr>
//             <th scope="col">TITLE</th>
//             <th scope="col">DESCRIPTION</th>
//             <th scope="col">PRIORITY</th>
//             <th scope="col">STATUS</th>
//             <th scope="col">EDIT</th>
//             <th scope="col">DELETE</th>
//           </tr>
//         </thead>
//         <tbody className="bg-warning">
//           {isEditing ? (
//             <tr>
//               <td>
//                 <input
//                   type="text"
//                   name="title"
//                   value={editedData.title}
//                   onChange={handleChange}
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   name="description"
//                   value={editedData.description}
//                   onChange={handleChange}
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   name="priority"
//                   value={editedData.priority}
//                   onChange={handleChange}
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   name="status"
//                   value={editedData.status}
//                   onChange={handleChange}
//                 />
//               </td>
//               <td>
//                 <button onClick={handleSubmit}>Save</button>
//               </td>
//               <td>
//                 <button onClick={() => setIsEditing(false)}>Cancel</button>
//               </td>
//             </tr>
//           ) : (
//             <tr>
//               <td>{title}</td>
//               <td>{description}</td>
//               <td>{priority}</td>
//               <td>{status}</td>
//               <td>
//                 <button onClick={handleEdit}>Edit</button>
//               </td>
//               <td>
//                 <button onClick={handleDelete}>Delete</button>
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }
