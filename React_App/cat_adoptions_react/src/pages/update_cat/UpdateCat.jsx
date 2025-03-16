import "./UpdateCat.css";
// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

const UpdateCat = () => {
    // const navigate = useNavigate();
    // const location = useLocation();
    // const { selectedCat } = location.state || {};  // Access the selected cat passed from CatList
    //
    // const [catData, setCatData] = useState({
    //     name: "",
    //     breed: "",
    //     age: "",
    // });
    //
    // // Pre-fill the form with the selected cat's data if available
    // useEffect(() => {
    //     if (selectedCat) {
    //         setCatData({
    //             name: selectedCat.name,
    //             breed: selectedCat.breed,
    //             age: selectedCat.age,
    //         });
    //     }
    // }, [selectedCat]);
    //
    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setCatData({
    //         ...catData,
    //         [name]: value,
    //     });
    // };
    //
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Handle form submission logic
    //     // You could update the cat list here, for example:
    //     console.log("Updated Cat Data:", catData);
    //     // Navigate back to the list page
    //     navigate("/");
    // };
    //
    // if (!selectedCat) {
    //     return <div>Cat not found!</div>;
    // }
    //
    // return (
    //     <div>
    //         <h2>Update Cat</h2>
    //         <form onSubmit={handleSubmit}>
    //             <div>
    //                 <label>Name:</label>
    //                 <input
    //                     type="text"
    //                     name="name"
    //                     value={catData.name}
    //                     onChange={handleChange}
    //                 />
    //             </div>
    //             <div>
    //                 <label>Breed:</label>
    //                 <input
    //                     type="text"
    //                     name="breed"
    //                     value={catData.breed}
    //                     onChange={handleChange}
    //                 />
    //             </div>
    //             <div>
    //                 <label>Age:</label>
    //                 <input
    //                     type="text"
    //                     name="age"
    //                     value={catData.age}
    //                     onChange={handleChange}
    //                 />
    //             </div>
    //             <button type="submit">Update</button>
    //         </form>
    //     </div>
    // );
};

export default UpdateCat;