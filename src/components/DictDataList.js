import React from 'react';
import DictWithMeaning from './DictWithMeaning';
import DictWithoutMeaning from './DictWithoutMeaning';

const DictDataList = ({meanings, onSelectWord}) => {
    const meaningRes = meanings.map(meaning => {
        if(typeof(meaning) == "string") {
            return(
                <DictWithoutMeaning onSelectWord={onSelectWord} key={meaning} meanin={meaning}/>
            )
        } else {
            return (
                <DictWithMeaning onSelectWord={onSelectWord}  key={meaning.meta.id} meanin={meaning}/>
            )
        }
    });

    return (
        <div className="ui divided selection list">
            {meaningRes}
        </div>
    )
}
export default DictDataList;
