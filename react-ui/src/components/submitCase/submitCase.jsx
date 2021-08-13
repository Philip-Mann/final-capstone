import './submitCase.css'
import Age from './formElements/age';
import BodyCondition from './formElements/bodyCondition';
import Characteristics from './formElements/charcteristics';
import Cod from './formElements/cod';
import Description from './formElements/description';
import Height from './formElements/height';
import Name from './formElements/name';
import Location from './formElements/height'
import Sex from './formElements/sex';
import Submit from './formElements/submit';
import Race from './formElements/race';
import { useState } from 'react';

const SubmitForm = () => {
    
    const [name, setName] = useState('');
    const handleNameChange = name => {
        setName(name);
    }
    
    const [age, setAge] = useState('');
    const handleAgeChange = age => {
        setAge(age);
    }
    
    const [sex, setSex] = useState('');
    const handleSexChange = sex => {
        setSex(sex);
    }

    const [race, setRace] = useState('');
    const handleRaceChange = race => {
        setRace(race);
    }
    
    const [height, setHeight] = useState('');
    const handleHeightChange = height => {
        setHeight(height);
    }
    
    const [characteristics, setCharacteristics] = useState('');
    const handleCharacteristicsChange = characteristics => {
        setCharacteristics(characteristics);
    }
    
    const [cod, setCod] = useState('');
    const handleCodChange = cod => {
        setCod(cod);
    }
    
    const [bodyCondition, setBodyCondition] = useState('');
    const handleBodyConditionChange = bodyCondition => {
        setBodyCondition(bodyCondition)
    }
    
    const [descrtiption, setDescription] = useState('');
    const handleDescriptionChange = descrtiption => {
        setDescription(descrtiption)
    }
    
    const [location, setLocation] = useState('');
    const handleLocationChange = location => {
        setLocation(location);
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(name, age, sex, race, height, characteristics, cod, bodyCondition, descrtiption, location)
    }

    return (
        <>
        <h1>Submit Case</h1>
        <div className="submit-case-form-container">
            <form >
                <Name 
                    handleChange={handleNameChange}
                    name={name}
                />
                <Age 
                    age={age}
                    handleChange={handleAgeChange}
                />
                <Sex 
                    handleChange={handleSexChange}
                    sex={sex}
                />
                <Race 
                    handleChange={handleRaceChange}
                    race={race}
                />
                <Height 
                    handleChange={handleHeightChange}
                    height={height}
                />
                <Characteristics 
                    characteristics={characteristics}
                    handleChange={handleCharacteristicsChange}
                />
                <Cod 
                    cod={cod}
                    handleChange={handleCodChange}
                />
                <BodyCondition 
                    bodyCondition={bodyCondition}
                    handleChange={handleBodyConditionChange}
                />
                <Description 
                    descrtiption={descrtiption}
                    handleChange={handleDescriptionChange}
                />
                <Location 
                    handleChange={handleLocationChange}
                    location={location}
                />
                <Submit 
                    onClick={handleSubmit}
                />
            </form>
        </div>
        </>
    )
}

export default SubmitForm;