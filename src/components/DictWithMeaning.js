import React from 'react';

const DictWithMeaning = (meaning) => {
    return(
        <div className="item">
            <div className="ui horizontal label">{meaning.meanin.meta.id}</div>
            <div className="ui red horizontal label">{meaning.meanin.fl}</div>{meaning.meanin.shortdef}
        </div>

    )
}
export default DictWithMeaning;