import React, { useState } from "react";
import usePasswordGenerator from "../Hook/usePasswordGenerator";
import { SavePassword } from "../Server/SavePassword";
import { useSelector } from "react-redux";

import { GetPassword } from "../Server/GetPasswords";


const PasswordGenerator = () => {
    const { password, error, generatePassword } = usePasswordGenerator();
    const { access } = useSelector(state => state.usertoken)
    const [passwords, setPasswords] = useState([])

    const [checkboxData, setCheckboxData] = useState([
        { title: "uppercase", state: true },
        { title: "lowercase", state: true },
        { title: "numbers", state: true },
        { title: "symbols", state: true }
    ]);
    const [passLength, setPassLength] = useState(12);

    const [field, setField] = useState("");

    const handleGenerate = () => {
        generatePassword(checkboxData, passLength);
    };

    const handleCheckboxChange = (index) => {
        const newData = [...checkboxData];
        newData[index].state = !newData[index].state;
        setCheckboxData(newData);
    };




    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("field is ", field);
        console.log("password ", password);
        console.log("access ", access);

        if (field, password, access) {
            SavePassword(field, password, access).then((res) => {
                console.log(res.data)
                setField('')
            
                

            })

        }

    };



    const handleAllPasswordView = async () => {
        GetPassword(access).then((res) => {
            console.log(res, 'asas')
            console.log(access)
            setPasswords(res)
        })
    }


    return (
        <div className="bg-blue-100 px-8 py-3 flex justify-between">
            <div>
                <div className="text-black gap-3 flex">
                    {checkboxData.map((checkbox, index) => (
                        <label key={index}>
                            <input
                                type="checkbox"
                                checked={checkbox.state}
                                onChange={() => handleCheckboxChange(index)}
                            />
                            {checkbox.title}
                        </label>
                    ))}
                </div>
                <div className="text-black my-2">
                    <label>Password Length:</label>
                    <input className="text-black rounded-md px-2 py-1 ml-1"
                        type="number"
                        value={passLength}
                        onChange={(e) => setPassLength(parseInt(e.target.value))}
                    />
                </div>
                <button className="mt-2 p-2 bg-orange-500 text-white rounded-lg px-3" onClick={handleGenerate}>Generate Password</button>
                {error && <div className="text-red-500">{error}</div>}
                {password && <div className="text-green-700 border p-3 w-max my-2 border-green-900 font-bold">{password}</div>}
                <form onSubmit={handleSubmit}>
                    <label className="block text-black text-sm font-bold mb-2 mt-6">
                        Enter platform name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline items-center my-2"
                        id="username"
                        type="text"
                        placeholder="Enter platform name"
                        value={field}
                        onChange={(e) => setField(e.target.value)}
                    />
                    <br />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
                        Submit
                    </button>

                </form>
            </div>
            <div className=" ">
                <button className="mt-2 p-2 bg-yellow-500 text-white rounded-lg px-3" onClick={handleAllPasswordView}>View all passwords</button>
                <ul className="bg-gray-400 border p-3 my-3">
                    {passwords && passwords.map((password) => {
                        return (
                            <li key={password.id}>
                                <strong>Password:</strong> {password.password} - <strong>Platform:</strong> {password.platform}
                            </li>
                        );
                    })}
                </ul>

            </div>
        </div>

    );
};

export default PasswordGenerator;
