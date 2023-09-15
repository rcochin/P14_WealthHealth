import { Modal } from '@r.cochin/modal-react';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useDispatch } from "react-redux";
import Select from 'react-select';
import { USStates, department } from '../../selectOptions';
import { addEmployee } from '../../store/employeeSlice';
import './CreateEmployee.css';



function CreateEmployee() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState(null);
    const [zipCode, setZipCode] = useState('');
    const [dept, setDept] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch();

    const handleSubmit = () => {
        const newEmployee = {
            firstName,
            lastName,
            birthDate: birthDate.toISOString(),
            startDate: startDate.toISOString(),
            address: { street, city, state, zipCode },
            department: dept,
        };

        dispatch(addEmployee(newEmployee));
        setIsOpen(true);
    };

  return (
    <div className="container">
        <form>
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" value={firstName} onChange={e => setFirstName(e.target.value)} />

            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" value={lastName} onChange={e => setLastName(e.target.value)} />

            <label htmlFor="date-of-birth">Date of Birth</label>
            <DatePicker selected={birthDate} onChange={date => setBirthDate(date)} dateFormat="d/MM/y" />

            <label htmlFor="start-date">Start Date</label>
            <DatePicker selected={startDate} onChange={date => setStartDate(date)} dateFormat="d/MM/y" />

            <fieldset className="address">
                <legend>Address</legend>

                <label htmlFor="street">Street</label>
                <input id="street" type="text" value={street} onChange={e => setStreet(e.target.value)} />

                <label htmlFor="city">City</label>
                <input id="city" type="text" value={city} onChange={e => setCity(e.target.value)} />

                <label htmlFor="state">State</label>
                <Select options={USStates} value={state} onChange={selected => setState(selected)} />

                <label htmlFor="zip-code">Zip Code</label>
                <input id="zip-code" type="number" value={zipCode} onChange={e => setZipCode(e.target.value)} />
            </fieldset>

            <label htmlFor="department">Department</label>
            <Select options={department} value={dept} onChange={selected => setDept(selected)} />
        </form>
        <button onClick={handleSubmit}>Save</button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} autoClose={false}>
            Employee created!
        </Modal>
    </div>
  );
}

export default CreateEmployee;
