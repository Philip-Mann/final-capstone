const Year = ({ handleChange, year }) => {

    const handleYearChange = e => {
        handleChange(e.target.value);
    }

    return (
        <div className="form-year case-form">
            <label>Year</label>
            <input 
                placeholder="Year" 
                htmlFor="year" 
                id="year"
                onChange={handleYearChange}
                value={year}
            />
        </div>
    )
}

export default Year;