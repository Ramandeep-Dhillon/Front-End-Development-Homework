import {useState} from 'react';
function TodoForm(props)
{
    const [userInput, setuserInput] = useState ("");
    function handleChange(e)
    {
        setuserInput(e.currentTarget.value);
    }
    function handleSubmit(e)
    {
        e.preventDefault();
        props.addTask(userInput);
        setUserInput('');

    }
    

}