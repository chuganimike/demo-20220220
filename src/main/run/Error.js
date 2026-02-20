import React from 'react';

export default class Error extends React.Component{

    render() {
        document.getElementById('end-footer').classList.add('hidden');
        document.getElementById('end-footer').classList.remove('show');
        return(
           <h1>ERRORRRRRRRRRRRRRRRR</h1>
        )
    }


}
