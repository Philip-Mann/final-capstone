import './submitCase.css';
import Age from './formElements/age';
import BodyCondition from './formElements/bodyCondition';
import Characteristics from './formElements/charcteristics';
import Cod from './formElements/cod';
import Description from './formElements/description';
import Height from './formElements/height';
import Name from './formElements/name';
import Location from './formElements/location';
import Sex from './formElements/sex';
import Race from './formElements/race';
import { useState } from 'react';
import Year from './formElements/year';
import Agencies from './formElements/agencies';
import Images from './formElements/images';

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
    
    const [body_condition, setBody_Condition] = useState('');
    const handleBodyConditionChange = body_condition => {
        setBody_Condition(body_condition)
    }
    
    const [description, setDescription] = useState('');
    const handleDescriptionChange = description => {
        setDescription(description);
    }
    
    const [location, setLocation] = useState('');
    const handleLocationChange = location => {
        setLocation(location);
    }

    const [year, setYear] = useState('');
    const handleYearChange = year => {
        setYear(year)
    }

    const [agencies, setAgencies] = useState('');
    const handleAgenciesChange = agencies => {
        setAgencies(agencies)
    }

    const [images, setImages] = useState('');
    const handleImagesChange = (images) => {
        setImages(images);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await fetch('/api/cases', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, age, sex, race, height, year, characteristics, cod, body_condition, description, location, images, agencies })
        });
        console.log(await result.json());
        setName('');
        setAge('');
        setSex('');
        setRace('');
        setHeight('');
        setCharacteristics('');
        setCod('');
        setBody_Condition('');
        setDescription('');
        setLocation('');
        setImages('');
        setYear('');
        setAgencies('');
    }

    return (
        <>
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
                <Images 
                    handleChange={handleImagesChange}
                />
                <Year 
                    handleChange={handleYearChange}
                    year={year}
                />
                <Height 
                    handleChange={handleHeightChange}
                    height={height}
                />
                <Characteristics 
                    characteristics={characteristics}
                    handleChange={handleCharacteristicsChange}
                />
                <Agencies 
                    agencies={agencies}
                    handleChange={handleAgenciesChange}
                />
                <Cod 
                    cod={cod}
                    handleChange={handleCodChange}
                />
                <BodyCondition 
                    body_condition={body_condition}
                    handleChange={handleBodyConditionChange}
                />
                <Location 
                    handleChange={handleLocationChange}
                    location={location}
                />
                <Description 
                    description={description}
                    handleChange={handleDescriptionChange}
                />
                <div className="form-submit case-form">
                    <button 
                        type="submit"
                        onClick={handleSubmit}    
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
        </>
    )
}

export default SubmitForm;