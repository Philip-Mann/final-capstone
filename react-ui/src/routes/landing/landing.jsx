import './landing.css'
import Greeting from '../../components/landing/greeting/greeting';
import News from '../../components/landing/news/news';
import Mission from '../../components/landing/mission/mission'
import Quote from '../../components/landing/quote/quote';

const Landing = () => {

    return (
        <>
            <Greeting />
            <Mission />
            <Quote />
            <News />
        </>
    )
}

export default Landing;