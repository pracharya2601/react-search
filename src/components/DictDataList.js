import React from 'react';


const DictDataList = props => {

    const meanings = props.meanings.map((meaning) => {
        var fl = meaning.fl;
        var meta = meaning.meta.id;
        var shortDef = meaning.shortdef;
        if(!fl && !meta && !shortDef) {
            return <h2></h2>
        } else {
            return (
                    <div className="ui divided selection list" key={meta}>
                        <div className="item">
                          <div className="ui horizontal label">{meta}</div>
                          <div className="ui red horizontal label">{fl}</div>{shortDef}
                        </div>
                    </div>
            )
        }

    });

    return (
        <div>
            {meanings}
        </div>
        
    )
}

export default DictDataList;
