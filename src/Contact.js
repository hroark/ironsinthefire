import { useState } from 'react';
import { send } from 'emailjs-com';

function Contact() {
  const [send, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });
  
  
  const onSubmit = (e) => {
    e.preventDefault()};
    send(
      'service_7n9eyad',
      'template_qxxc3jo',
      send,
      'rigamonk@gmail.com'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
          console.log('FAILED...', err);
        });
  
  
        const handleChange = (e) => {
          setToSend({ ...send, [e.target.name]: e.target.value });
        };



const Message =() =>{
const [send, setToSend] = useState({
  from_name: '',
  to_name: '',
  message: '',
  reply_to: '',
});
return (
      <div>
        <div align="center">
        <form onSubmit={onSubmit}>
<input
  type='text'
  name='from_name'
  placeholder='from name'
  value={send.from_name}
  onChange={handleChange}
/>
<input
  type='text'
  name='message'
  placeholder='Your message'
  value={send.message}
  onChange={handleChange}
/>
<input
  type='text'
  name='email'
  placeholder='Your email'
  value={send.reply_to}
  onChange={handleChange}
/>
<button type='submit'>Submit</button>
</form>
        </div>
      </div>
);
}
}
export default Contact;