import * as React from 'react'
import Row from './Row'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import {SELECT_ITEM, DELETE_ITEM} from '../actions'
import { IBook, IGlobalState } from '../model/model';

interface IProps {
    data: IBook[],
    deleteBook: (item: IBook) => void,
    selectBook: (item: IBook) => void,
}

interface IState {
    item: IBook|null,
    listItems: IBook[]|null,
}

class Table extends React.Component <IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        const { data, deleteBook, selectBook } = this.props;

        const items = data.map(function(item: IBook, index: number) { //state
            return <Row 
                key={index} 
                index={index} 
                data={item} 
                deleteBook={ deleteBook.bind(this, item) }  //deleteBook={deleteBook} 
                selectBook={ selectBook.bind(this, item) } />;
        });
        

        return (
            <table>
                <tbody>
                    {items}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state: IGlobalState) {
    return { 
        data: state.listItems
    };
}

function mapDispatchToProps(dispatch: Dispatch<any>) {

    return { 
        selectBook: (item: IBook) => {

            const action = {
                type: SELECT_ITEM,
                payload: item
            };
            dispatch(action);
        },
        deleteBook: (item: IBook) => {
            
            const action = {
                type: DELETE_ITEM,
                payload: item
            };
            dispatch(action);
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);