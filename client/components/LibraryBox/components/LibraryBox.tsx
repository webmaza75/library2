import * as React from 'react'
import Form from './Form'
import Table from './Table'

class LibraryBox extends React.Component <any, any> {

    render() {
        return (
            <div>
                <Form />
                <Table /> 
            </div>
        );
    }
}

export default LibraryBox;