import "./AddCat.css"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import UpperBorder from "../../components/upper_border/UpperBorder";
import Rectangle from "../../components/rectangle/Rectangle";
import InputField from "../../components/input_field/InputField";
import Button from "../../components/button/Button";
import InputFileButton from "../../components/input_file_button/InputFileButton";

const AddCat = ( { addCat } ) => {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [weight, setWeight] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const validateInputs = () => {
        if (!name.trim()) return "Name must be a string and cannot be empty.";
        if (!["F", "M"].includes(gender.toUpperCase())) return "Gender must be 'F' or 'M'.";
        if (!/^\d+$/.test(age)) return "Age must be a whole number.";
        if (!/^\d+(\.\d+)?$/.test(weight)) return "Weight must be a number (e.g., 4.5).";
        if (!description.trim()) return "Description cannot be empty.";
        if (!image.trim()) return "You must upload an image.";
        return null;
    };

    const handleAddCat = () => {
        const validationError = validateInputs();
        if (validationError) {
            setError(validationError);
            return;
        }

        const newCat = { name, gender, age, weight, description, image };
        addCat(newCat);
        navigate("/cats");
    };

    return (
        <div>
            <UpperBorder content="Add a New Cat!"></UpperBorder>
            <div className="add-container">
                <Rectangle type="list">
                    <div className="add-rectangle">
                        {error && <div className="error-box">{error}</div>}
                        <InputField placeHolder="Name" value={name} onChange={(e) => setName(e.target.value)}></InputField>
                        <InputField placeHolder="Gender (F/M)" value={gender} onChange={(e) => setGender(e.target.value)}></InputField>
                        <InputField placeHolder="Age" value={age} onChange={(e) => setAge(e.target.value)}></InputField>
                        <InputField placeHolder="Weight" value={weight} onChange={(e) => setWeight(e.target.value)}></InputField>
                        <InputField placeHolder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></InputField>
                        <InputFileButton onFileSelect={(url) => setImage(url)} />
                        <Button content="Add Cat" onClick={handleAddCat}></Button>
                    </div>
                </Rectangle>
            </div>

        </div>
    );
};

export default AddCat;