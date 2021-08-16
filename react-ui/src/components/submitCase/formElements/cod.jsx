const Cod = ({ cod, handleChange }) => {

    const handleCodChange = e => {
        handleChange(e.target.value);
    }

    return (
        <div className="form-body-cod case-form">
            <label>Cause of Death</label>
            <input 
                placeholder="Cause of Death"
                htmlFor="cod" 
                id="cod" 
                value={cod}
                onChange={handleCodChange}
            />
        </div>
    )
}

export default Cod;