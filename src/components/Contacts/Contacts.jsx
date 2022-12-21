
import  PropTypes  from "prop-types";
export default function Contacts ({cont, delete, add}) {
    return <div>
                    <ul>
                        {cont.map(m=>(
                            <li key={m.id}>
                                <p>{m.name}: {m.number}</p>
                                <button type="button" onClick={()=> delete(m.id)} >delete</button>
                            </li>
                        ))}
                    </ul>
                    <h2>Find firs name</h2>
                   <input type="text" 
                    name="firstName"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    onChange={add}/>
                </div>
                
     
}

Contacts.propTypes = {
  cont: PropTypes.array,
  delete: PropTypes.func,
  add: PropTypes.func
}