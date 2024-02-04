import { useState } from "react";

const usePasswordGenerator = () => {
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");

  const generatePassword = (checkboxData, passLength) => {
    let charset = "",
      generatedPassword = "";

    // Define the types of characters based on checkboxData
    checkboxData.forEach((option) => {
      if (option.state) {
        switch (option.title) {
          case "uppercase":
            charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            break;
          case "lowercase":
            charset += "abcdefghijklmnopqrstuvwxyz";
            break;
          case "numbers":
            charset += "0123456789";
            break;
          case "symbols":
            charset += "!@#$%^&*()_-+?/{}[]";
            break;
          default:
            break;
        }
      }
    });

    // Check if at least one character type is selected
    if (charset === "") {
      setError("Select at least one character type");
      setPassword("");
      return;
    }

    // Generate password
    for (let index = 0; index < passLength; index++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }

    setPassword(generatedPassword);
    setError("");
  };

  return { password, error, generatePassword };
};

export default usePasswordGenerator;
