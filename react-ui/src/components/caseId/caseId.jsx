import './caseId.css'
import { useParams } from 'react-router-dom';
import { useGetCaseQuery } from '../../redux/services/cases';
import { caseData } from "../../redux/reducers/case";
import { useSelector } from 'react-redux';


const CaseId = () => {

    const { id } = useParams();

    const fetchData = useSelector(caseData);
    const { data } = useGetCaseQuery(id, fetchData);

    return (
        <>
        {data?.map(caseData => 
        <div className="case-container" key={caseData.id}>
            <div className="case-image-list">
                <div className="case-image">
                    <img src={caseData.images} alt={caseData.name} />
                </div>
                <div className="case-list-container">
                    <div className="case-list">
                        <ul>
                            <li><b>Race:</b> {caseData.race}</li>
                            <li><b>Sex:</b> {caseData.sex}</li>
                            <li><b>Estimated Age:</b> {caseData.age}</li>
                            <li><b>Year Found:</b> {caseData.year}</li>
                            <li><b>Cause of Death:</b> {caseData.cod}</li>
                            <li><b>Location Found:</b> {caseData.location}</li>
                            <li><b>Height:</b> {caseData.height}</li>
                            <li><b>Condition of Remains:</b> {caseData.body_condition}</li>
                            <li><b>Characteristics:</b> {caseData.characteristics}</li>
                            <li><b>Agencies:</b> {caseData.agencies}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="case-description">
                <p>{caseData.description}</p>
            </div>
        </div>
        )}
        </>
    )
}

export default CaseId;