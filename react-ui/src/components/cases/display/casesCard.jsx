import '../cases.css'
import { useGetCasesQuery } from "../../../redux/services/cases";
import { casesData } from "../../../redux/reducers/cases";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CasesCard = ({ searchQuery }) => {

    const fetchData = useSelector(casesData);
    const { data, isLoading } = useGetCasesQuery(fetchData);

    return (
        <>
        <div className="case-card-container">
        {isLoading ? <h1>Loading...</h1> : data?.map(caseData => 
            <div className="case-card" key={caseData.id}>
                <div className="case-images">
                    <img src={caseData.images} alt={caseData.name} />
                </div>
                <div className="cases-info">
                    <Link 
                        to={`/cases/${caseData.id}`}>
                        {caseData.name}
                    </Link>
                    <p>{caseData.year}</p>
                </div>
            </div>
        )}
        </div>
        </>
    )
}

export default CasesCard;