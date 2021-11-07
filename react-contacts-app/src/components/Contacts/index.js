import {useState, useEffect} from 'react'
import List from './List'
import Form from './Form'
import './styles.css'

function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullname: 'Can',
            phone_number:'90123456789'
        },
        {
            fullname: 'Gulay',
            phone_number:'90987654321'
        }
    ])

    useEffect(() => {
        console.log(contacts)
    }, [contacts])

    return (
        <div id="container">
            <h2>Contacts</h2>
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts = {contacts}/>
        </div>
    )
}

export default Contacts
