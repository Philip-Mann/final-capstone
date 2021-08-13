const Age = ({ handleChange, age}) => {

    const handleAgeChange = e => {
        handleChange(e.target.value);
    }

    return (
        <div className="form-age case-form">
            <label>Estimated Age</label>
            <input 
                htmlFor="age" 
                id="age"
                onChange={handleAgeChange} 
                placeholder="Age" 
                value={age}
            />
        </div>
    )
}

export default Age;