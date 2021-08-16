const Agencies = ({ agencies, handleChange }) => {

    const handleAgenciesChange = e => {
        handleChange(e.target.value);
    }

    return (
        <div className="form-agencies case-form">
            <label>Agencies</label>
            <input 
                placeholder="FBI" 
                htmlFor="agencies" 
                id="agencies"
                onChange={handleAgenciesChange}
                value={agencies}
            />
        </div>
    )
}

export default Agencies;