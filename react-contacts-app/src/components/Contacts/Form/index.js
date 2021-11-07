import {useState, useEffect} from 'react'

const initialFormValues = { fullname:"",phone_number:""}
function Form({addContact, contacts}) {
   
    const [form, setForm]= useState(initialFormValues)

    useEffect(() => {
        setForm(initialFormValues)
    },[contacts]) //contacts değiştikten sonra input'un içini boşalt

    const onChangeInput = (e) => {
        setForm({ ...form,[e.target.name]:e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const phonePattern = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)
        if(form.fullname === '' || form.phone_number ==='' || !phonePattern.test(form.phone_number) )
        {
            console.log('The phone number must contain 10-12 digits.')
            return false;
        }

        addContact([...contacts,form])
    }
    return (
       
        <form>
            <div>
            <input name="fullname" 
            placeholder="Full Name" 
            value={form.fullname}
            onChange={onChangeInput}/>
        </div>

        <div>  
            <input name="phone_number" placeholder="Phone Number"
            value={form.phone_number}
            onChange={onChangeInput} />
        </div>
        <div className="btn">
            <button  onClick={onSubmit}>Add</button>
        </div>
        </form>
    )
}
export default Form
