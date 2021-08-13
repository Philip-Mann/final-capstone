const Characteristics = ({ characteristics, handleChange }) => {

    const handleCharacteristicsChange = e => {
        handleChange(e.target.value);
    }

    return (
        <div className="form-characteristics case-form">
            <label>Characteristics</label>
            <input 
                placeholder="Characteristics" 
                htmlFor="charcateristics" 
                id="charcateristics" 
                onChange={handleCharacteristicsChange}
                value={characteristics}    
            />
        </div>
    )
}

export default Characteristics;