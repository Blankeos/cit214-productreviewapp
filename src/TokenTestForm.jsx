import React, {useState} from 'react'
import { useAuth } from './contexts/AuthContext';
import  { addToPhonebook } from './services/restServices';

const TokenTestForm = () => {

    const { createToken } = useAuth();
    const [state, setState] = useState({
        name: '',
        number: '',
    });

    function handleSubmit(e) {
        e.preventDefault();

        if (state.name && state.number) {
            addToPhonebook(createToken, state.name, state.number)
        } else {
            console.log("Enter a name and number")
        }
    }

    const handleChange = (event, fieldName) => {
        setState((prevState) => {
          return { ...prevState, [fieldName]: event.target.value };
        });
      };

    return (
        <form onSubmit={(e) => {handleSubmit(e)}} className="bg-blue-300 p-10 flex flex-col">
            <label>Name:</label>
            <input onChange={(e) => {handleChange(e, 'name')}} />
            <label>Number:</label>
            <input onChange={(e) => {handleChange(e, 'number')}} />
            <button class="bg-blue-500"type="submit">Submit</button>
        </form>
    )
}

export default TokenTestForm

