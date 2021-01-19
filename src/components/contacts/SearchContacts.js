import React, { Component } from 'react';
import './contacts.css';

class SearchContacts extends Component {
    state = {
        searchStr: '',
        male: true,
        female: true,
        notSpecified: true
    }

    //Метод обработки события с CheckBox и строкой поиска
    setChange = async (e) => {
        switch (e.target.name) {
            case "male":
                await this.setState({ male: !this.state.male })
                break;
            case "female":
                await this.setState({ female: !this.state.female })
                break;
            case "notSpecified":
                await this.setState({ notSpecified: !this.state.notSpecified })
                break;
            default:
                await this.setState({ searchStr: e.target.value })
        }

        this.setFilter();
    }

    // вызов метода Родительского компонентаЮ применения фильтров и передача отфильтрованных данных
    setFilter = () => {
        const allDataContacts = [...this.props.contacts];
        console.log(allDataContacts);
        this.props.setFilter(
            allDataContacts.filter(contact => {
                return this.checkGender(contact.gender) && this.FilterOnText(contact);
            })
        )
    }

    // Проверка полов согласно отмеченных checkbox
    checkGender(aGenderName) {
        switch (aGenderName) {
            case "male":
                return this.state.male;
            case "female":
                return this.state.female;
            default:
                return this.state.notSpecified;
        }
    }

    // Проверка на вхождение строки введенную в поиске
    FilterOnText(aContact) {
        if (aContact.firstName.toLowerCase().includes(this.state.searchStr.toLowerCase()) ||
            aContact.lastName.toLowerCase().includes(this.state.searchStr.toLowerCase()) ||
            aContact.phone.toLowerCase().includes(this.state.searchStr.toLowerCase())) {
            return true;
        }
        return false;
    }

    render() {
        return (
            <div className="search-contacts">
                <div className="checkbox-search">
                    <input className="input-search" type="search" placeholder="Search..." value={this.state.searchStr} onChange={this.setChange}></input>
                </div>
                <div className="checkbox-search">
                    <input className="input-checkbox" type="checkbox" name="male" checked={this.state.male} onChange={this.setChange}></input>
                    <img className="contact-img-gender" src="../img/male.png" alt="male"></img>
                </div>
                <div className="checkbox-search">
                    <input className="input-checkbox" type="checkbox" name="female" checked={this.state.female} onChange={this.setChange}></input>
                    <img className="contact-img-gender" src="../img/female.png" alt="female"></img>
                </div>
                <div className="checkbox-search">
                    <input className="input-checkbox" type="checkbox" name="notSpecified" checked={this.state.notSpecified} onChange={this.setChange}></input>
                    <img className="contact-img-gender" src="../img/notSpecified.png" alt="not specified"></img>
                </div>
            </div>
        )
    }
}

export default SearchContacts;

