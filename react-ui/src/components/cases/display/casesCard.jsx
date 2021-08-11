import '../cases.css'
import { useGetCasesQuery } from "../../../redux/services/cases";
import { casesData } from "../../../redux/reducers/cases";
import { useSelector } from 'react-redux';

const CasesCard = ({ searchQuery }) => {

    const fetchData = useSelector(casesData);

    const { data, isLoading } = useGetCasesQuery(fetchData);

    // const searchIncludes = () => {
    //     if(searchQuery === '') {
    //         return data?.map
    //     } else {
    //         return data?.filter(singleCase => singleCase.name.toLowerCase().includes(searchQuery.toLowerCase()));
    //     }
    // }

    return (
        <>
        <div className="case-card-container">
        {isLoading ? <h1>Loading...</h1> : data?.map(caseData => 
            <div className="case-card" key={caseData.id}>
                <div className="case-image">
                    <img src={caseData.images} alt={caseData.name} />
                </div>
                <div className="case-info">
                    <a href="www.ksat.com" target="_blank">{caseData.name}</a>
                    <p>{caseData.year}</p>
                </div>
            </div>
        )}
        </div>
        </>
    )
}

export default CasesCard;