const Name = ({ handleChange, name }) => {

    const handleNameChange = e => {
        handleChange(e.target.value);
    }

    return (
        <div className="form-name case-form">
            <label>Doe Name</label>
            <input 
                htmlFor="name" 
                id="name" 
                onChange={handleNameChange}
                placeholder="Name"
                value={name}
            />
        </div>
    )
}

export default Name;