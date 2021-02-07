import React from 'react';
import {useGlobalContext} from '../context';
import {buttons} from '../assets/languages/buttonsLang';

const Pagination = () => {
    const {englishLang, loading, smoothies, page, showPage, nextPage, prevPage} = useGlobalContext();

    const langObj = englishLang ? buttons.en : buttons.sr;

    return (
        <React.Fragment>
            {!loading && smoothies.length > 0 && (
                <div className="btn-container">
                    <button className="btn btn-prev"  onClick={prevPage}>{langObj.prev}</button>

                    {smoothies.map((arrItem, index) => {
                        return <button key={index} className={index === page ? 'btn btn-page btn-page-active' : 'btn btn-page'} onClick={() => showPage(index)}>{index + 1}</button>;
                        })
                    }
            
                    <button className="btn btn-next" onClick={nextPage}>{langObj.next}</button>
                </div>
            )}
        </React.Fragment>
    );   
}

export default Pagination;