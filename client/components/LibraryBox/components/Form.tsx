import * as React from 'react'
import { connect } from 'react-redux'
import {emptyItem} from '../consts'
import {ADD_ITEM, EDIT_ITEM} from '../actions'
import { IBook, IGlobalState } from '../model/model';
import { addItemBook, editItemBook } from '../actions'

// let counter = (function() {
// 	var count: number = 2;
// 	return  function () {
// 		return ++count;
// 	}
// })();

interface IProps {
    addBook?: (item: IBook) => void,
    editBook?: (item: IBook) => void,
    item?: IBook,
    listItems?: IBook[],
}

interface IState {
    form: any,
    item?: IBook,
    listItems?: IBook[]
}

class Form extends React.Component <IProps, IState> {

    constructor (props: IProps) {
        super(props);
        this.state = {
            form: emptyItem
        }
    }

    isValidForm (form) {
        if (!form.title.trim() || !form.author.trim() || !form.year.trim()) {
            alert('Please fill all form fields.');
            return false;
        }
        return true;
    }
    
    componentWillReceiveProps (nextProps) {
        if( nextProps) console.log(nextProps);
        if( nextProps.item ) {
            this.setState({form: nextProps.item});
        }
    }

    changeField = (event) => {
        const { form } = this.state;

        this.setState({
            form: { ...form, [event.target.name]: event.target.value }
        });
    }

    addBookEvent = () => {
        const { form } = this.state;

        if (this.isValidForm(form) ) {

            this.props.addBook(form);
            this.setState({ 
                form: emptyItem, 
                item: null
            });
        }
    }

    editBookEvent = () => {
        const { form } = this.state;

        if (this.isValidForm(form) ) {
            this.props.editBook(form);
            this.setState({ form: emptyItem });
        }
    }

    render() {
        let { form } = this.state;

        return (
            <form>
                <div className='input__group'>
                    <label className='input__label' htmlFor='title' >Название книги:</label>
                    <input
                        name='title'
                        placeholder='Название книги'
                        value = {form.title}
                        onChange={this.changeField} />
                </div>
                <div className='input__group'>
                    <label className='input__label' htmlFor='author' >Автор:</label>
                    <input
                        name='author'
                        placeholder='Автор'
                        value = {form.author}                        
                        onChange={this.changeField} />
                </div>
                <div className='input__group'>
                    <label className='input__label' htmlFor='year' >Год издания:</label>
                    <input
                        name='year'
                        placeholder='Год издания'
                        value = {form.year}   
                        onChange={this.changeField} />
                </div>
                {form.id ?
                    <input type='button' value='Редактировать' onClick={this.editBookEvent} /> :
                    <input type='button' value='Добавить' onClick={this.addBookEvent} />
                }
            </form>
        );
    }
}

function mapStateToProps(state: IGlobalState) {
    return {
        item: state.selectItem,
        listItems: state.listItems,
    }
}

function mapDispatchToProps(dispatch) : any {
    return {
        addBook: function (item) {
            addItemBook (item)(dispatch);
        },
        editBook: function (item) {
            editItemBook(item)(dispatch);
        }    
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
