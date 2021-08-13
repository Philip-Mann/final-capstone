const Description = ({ description, handleChange }) => {

    const handleDescriptionChange = e => {
        handleChange(e.target.value);
    }

    return (
        <div className="form-description case-form">
            <label>Description</label>
            <textarea 
                htmlFor="description"
                id="description" 
                value={description}
                onChange={handleDescriptionChange}
            />
        </div>
    )
}

export default Description;