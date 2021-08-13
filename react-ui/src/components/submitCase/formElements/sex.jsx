const Sex = ({ handleChange , sex }) => {

    const handleSexChange = e => {
        handleChange(e.target.value);
    }

    return (
    <div className="form-sex case-form">    
        <label>Sex</label>
        <select name="sex" id="sex" value={sex} onChange={handleSexChange}>
            <option value ="Male">Male</option>
            <option value ="Female">Female</option>
            <option value="Unknown">Unknown</option>
        </select>
    </div>
    )
}

export default Sex;