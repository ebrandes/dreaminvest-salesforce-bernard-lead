import React from 'react';
import InputMask from "react-input-mask";
import '../index.css';

const LeadFormPage = () => {

return (
    <div className="container">
    
    <header>Bernard Web Lead</header>

    <form action="https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST" >

    <input type="hidden" name="oid" value="00D2F00000020Up" />
    <input type="hidden" name="retURL" value="http://localhost:3000/leadsuccess" required/>


    <label>Nome:</label>
    <input  id="first_name" maxLength="40" name="first_name" size="20" type="text"  required/>

    <label>Sobrenome:</label>
    <input  id="last_name" maxLength="80" name="last_name" size="20" type="text"  required/>

    <label>CPF:</label>
    <InputMask  id="00N2F000006hL46" name="00N2F000006hL46" type="text" required mask="999.999.999-99" />

    <label>Data de nascimento:</label>
    <InputMask mask="99/99/9999" id="00N2F000006hL4B" name="00N2F000006hL4B" type="text" required />

    <label>Sexo:</label>
    <select  id="00N2F000006hL8O" name="00N2F000006hL8O" title="Sexo" required>
        <option value="">-- Nenhum --</option>
        <option value="Feminino">Feminino</option>
        <option value="Masculino">Masculino</option>
    </select>

    <label>Email:</label>
    <input  id="email" maxLength="80" name="email" size="20" type="email" required/>

    <label>Telefone:</label>
    <InputMask  id="phone" maxLength="40" name="phone" size="20" type="text" required mask="(99) 99999-9999"/>

    <input type="submit" name="submit"/>

    </form>
    </div>
    );
}

export default LeadFormPage;