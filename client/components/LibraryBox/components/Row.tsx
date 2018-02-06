import * as React from 'react'
import { IBook, IGlobalState } from '../model/model';

interface IProps {
    data: IBook,
    selectBook: any,
    deleteBook: any,
    key: number,
    index: number
}

class Row extends React.Component <IProps, any> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        const { data } = this.props;
        return (
            <tr>
                <td>{data.title}</td>
                <td>{data.author}</td>
                <td>{data.year}</td>
                <td>
                    <button onClick={this.props.selectBook}>
                        Edit
                    </button>
                </td>
                <td>
                    <button onClick={this.props.deleteBook}>
                        Delete
                    </button>
                </td>
            </tr>
        );
    }
}

export default Row;