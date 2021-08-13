const Race = ({ handleChange, race }) => {

    const handleRaceChange = e => {
        handleChange(e.target.value);
    }

    return (
        <div className="form-race case-form">
            <label>Race</label>
            <input 
                htmlFor="race"
                id="race"
                onChange={handleRaceChange}
                placeholder="Race"
                value={race}
            />
        </div>
    )
}

export default Race;