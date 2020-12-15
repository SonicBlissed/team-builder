import './App.css';
import Member from './Member';
import MemberForm from './MemberForm';
import React, {useState, useEffect} from 'react'

const memberList = [
 { username: 'Pickle Rick', email:'pickles@pickle.com', role:'Dieting'},
];

const initialFormValues = {
  username: '',
  email: '',
  role: '',
};

export default function App() {
  const [members, setMembers] = useState(memberList);
  const [formValues, setFormValues] = useState(initialFormValues);
  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue});
  };
  const submitForm = evt => {
    const newMember = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };
    // if(!newMember.username) return console.log('Please enter a username!');
    // if(!newMember.email) return console.log('Please enter your email!');
    // if(newMember.role == '---Select Role---') return console.log('Enter a valid role please!');
    setMembers(members.concat(newMember));
    setFormValues(initialFormValues);
  };
  return (
    <div className='container'>
      <h1> Member List </h1>
      {members.map((member) => {
        return (
          <Member key={member.id} details={member}/>
        )
      })}
      <MemberForm 
      values={formValues}
      update={updateForm}
      submit={submitForm} />

    </div>
  )
}









