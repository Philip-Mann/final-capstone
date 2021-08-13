const Cod = ({ cod, handleChange }) => {

    const handleCodChange = e => {
        handleChange(e.target.value);
    }

    return (
        <div className="form-body-cod case-form">
            <label>Cause of Death</label>
            <input 
                htmlFor="cod" 
                placeholder="Cause of Death" 
                id="cod" 
                value={cod}
                onChange={handleCodChange}
            />
        </div>
    )
}

export default Cod;