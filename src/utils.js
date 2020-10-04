import React from 'react';

const inject = obj => Comp => props=> {    
    return <Comp {...obj}  {...props}/>
};

function parse_qs(search){
    var re = /(\w+)=([^&]+)/;
    if (search[0]==='?'){
        search = search.substr(1)
    }
    let ret = {};
    search.split('&').forEach(
        element =>{
            let match = re.exec(element)
            if (match){
                ret[match[1]] = match[2]
            }
        }
    )
    return ret
}

export {inject, parse_qs};