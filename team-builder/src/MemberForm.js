import React from 'react';

export default function MemberForm(props) {
    const {values, update, submit } = props;

    const updateForm = evt => {
        const {name, value} = evt.target;
        update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form inputs'>
                <label>
                    Username
                    <input
                    name='username' 
                    type='username' 
                    value={values.username} 
                    onChange={updateForm}
                    placeholder='Username...'
                    maxLength='36'>
                    </input>
                </label>
                <label>
                    Email
                    <input
                    name='email'
                    type='email'
                    value={values.email}
                    onChange={updateForm}
                    placeholder='Email...'
                    maxLength='36'>
                    </input>
                </label>
                <label>
                    Role
                    <select 
                    name='role'
                    value={values.role} 
                    onChange={updateForm}>
                        <option value=''>---Select Role---</option>
                        <option value='banana man'>Banana Man</option>
                        <option value='pancake dealer'>Pancake Dealer</option>
                        <option value='koolaid barista'>Kool-Aid Barista</option>
                        <option value='dieting'>Dieting</option>
                    </select>
                </label>
                <div className='submit'>
                    <button >Submit</button>
                </div>
            </div>
        </form>

    )


}