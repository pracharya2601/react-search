import React from 'react';

const DictWithoutMeaning = ({meanin, onSelectWord}) => {
    return(
        <p 
            onClick={() => onSelectWord(meanin)}
            className="ui label" 
            style={{margin: '1vh', cursor:'pointer'}}
        >
            {meanin}
        </p>
    )
}
export default DictWithoutMeaning;