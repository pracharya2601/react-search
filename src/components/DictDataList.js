import React from 'react';

const DictDataList = props => {

    const meanings = props.meanings.map((meaning) => {
        if(typeof(meaning) == "string") {
            return(
                <p key={meaning} className="ui label" style={{margin: '1vh'}}>{meaning}</p>
            )
        } else {
            return (
                <div className="ui divided selection list" key={meaning.meta.id}>
                    <div className="item">
                        <div className="ui horizontal label">{meaning.meta.id}</div>
                        <div className="ui red horizontal label">{meaning.fl}</div>{meaning.shortdef}
                    </div>
                </div>
            )
        }
    });

    return (
        <div>{meanings}</div>
    )
}
export default DictDataList;
