import React, { Component } from 'react';
import Contact from "./Contact";
import SearchContacts from "./SearchContacts"

const CONTACTS = [{
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
}, {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
}, {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666"
}, {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
}, {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
}, {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
}];

class Contacts extends Component {
    state = {
        contactsResult: [...CONTACTS]
    }

    setFilter = async (resContacts) => {
        await this.setState({ contactsResult: [...resContacts] })
    }

    render() {
        return (
            <div className="contacts">
                <SearchContacts setFilter={this.setFilter} contacts={CONTACTS} ></SearchContacts>
                { this.state.contactsResult.map((contact, id) => <Contact {...contact} key={id}></Contact>)}
            </div>
        )
    }
}

export default Contacts;