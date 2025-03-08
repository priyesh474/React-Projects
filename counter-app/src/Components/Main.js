import React from 'react'
import { NavLink } from 'react-router-dom';


const Index = () => {

  return (
    <div className='container'>
      <table>
        <tbody>
            <tr>
                <td>
                    <NavLink to="/counter" className={ ({isActive}) => isActive ? "active-link" : "" }> Counter </NavLink>
                </td>
                <td>
                    <NavLink to="/calculator" className={ ({isActive}) => isActive ? "active-link" : "" }> Calculator </NavLink>
                </td>
                <td>
                    <NavLink to="/todoapp" className={ ({isActive}) => isActive ? "active-link" : "" }> Todoapp </NavLink>
                </td>
                <td>
                    <NavLink to="/imageapp" className={ ({isActive}) => isActive ? "active-link" : "" }> Imageapp </NavLink>
                </td>
                <td>
                    <NavLink to="/dictionaryapp" className={ ({isActive}) => isActive ? "active-link" : "" }> DictionaryApp </NavLink>
                </td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Index
