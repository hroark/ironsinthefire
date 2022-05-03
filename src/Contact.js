import { useState } from 'react';
import { send } from 'emailjs-com';

function Contact() {
    return (
      <div className="App">
        ...
      </div>
    );
  }
  

<form onSubmit={onSubmit}>
<input
  type='text'
  name='from_name'
  placeholder='from name'
  value={toSend.from_name}
  onChange={handleChange}
/>
<input
  type='text'
  name='message'
  placeholder='Your message'
  value={toSend.message}
  onChange={handleChange}
/>
<input
  type='text'
  name='email'
  placeholder='Your email'
  value={toSend.reply_to}
  onChange={handleChange}
/>
<button type='submit'>Submit</button>
</form>

const [toSend, setToSend] = useState(
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  );

const onSubmit = (e) => {
  e.preventDefault()};
  send(
    'service_7n9eyad',
    'template_qxxc3jo',
    toSend,
    'rigamonk@gmail.com'
  )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    })
    .catch((err) => {
        console.log('FAILED...', err);
      });


const handleChange = (e) => {
  setToSend({ ...toSend, [e.target.name]: e.target.value })};


