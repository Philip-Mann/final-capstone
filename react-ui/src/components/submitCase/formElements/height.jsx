const Height = ({ handleChange, height }) => {

    const handleHeightChange = e => {
        handleChange(e.target.value);
    }

    return (
        <div className="form-height case-form">
            <label>Estimated Height</label>
            <input 
                htmlFor="height"
                id="height"
                onChange={handleHeightChange}
                placeholder="Height"
                value={height}
            />
        </div>
    )
}

export default Height;