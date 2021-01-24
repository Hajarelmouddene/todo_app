import { useState } from "react";

export default function Form (props) {
    const [name, setName] = useState("");
    
    function handleChange(e) {
        setName(e.target.value);
    }

    function handleSubmit (e) {
        e.preventDefault();
        if (name === "") {
            return
        } else {
            props.onSubmit(name)
        };
        setName("");
    }
    return(
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <div className="input-group">
                    <div className="circle">
                    </div>
                    <div>
                        <input type="text" id="new-todo-input" name="text" autoComplete="off" placeholder="Create a new todo..."  value={name} onChange={handleChange}/> 
                    </div>
                </div>
            </div>
        </form>

    );
}