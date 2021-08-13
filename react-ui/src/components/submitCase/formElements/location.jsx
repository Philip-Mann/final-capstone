const Location = ({ handleChange, location }) => {

    const handleLocationChange = e => {
        handleChange(e.target.value);
    }

    return (
        <div className="form-location case-form">
            <label>Location</label>
            <input 
                placeholder="Location"
                htmlFor="location" 
                id="location" 
                value={location}
                onChange={handleLocationChange}
            />
        </div>
    )
}

export default Location;