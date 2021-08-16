const BodyCondition = ({ body_condition, handleChange }) => {

    const handleBodyConditionChange = e => {
        handleChange(e.target.value);
    }

    return (
        <div className="form-body-condition case-form">
            <label>Body Condition</label>
            <input 
                placeholder="Body Condition" 
                htmlFor="body_condition" 
                id="body_condition"
                onChange={handleBodyConditionChange}
                value={body_condition}
            />
        </div>
    )
}

export default BodyCondition;