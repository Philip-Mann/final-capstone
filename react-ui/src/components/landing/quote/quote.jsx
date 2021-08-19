import './quote.css';

const Quote = () => {

    return (
        <div className="wiki-quote">
            <em><h3>"There are approximately 40,000 unidentified decedents in the United States at any given time." - </h3></em>
            <a 
                href="https://en.wikipedia.org/wiki/List_of_unidentified_decedents_in_the_United_States"
                target="_blank"
                rel="noreferrer"
            > Wikipedia, List of unidentified decedents in the US</a>
        </div>
    )
}

export default Quote;