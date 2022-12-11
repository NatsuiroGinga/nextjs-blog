import React, { FormEventHandler, useEffect, useState } from 'react';
import classes from './index.module.css';
import sendMessage from "pages/api/contact";
import Notification from "@/components/ui/Notification";

async function sendContactData(contactDetails: any) {
  const result = await sendMessage(contactDetails);

  if (!result.success) {
    throw new Error(result.error?.msg || 'Something went wrong!');
  }
}

function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');
  const [requestStatus, setRequestStatus] = useState<string | null>(); // 'pending', 'success', 'error'
  const [requestError, setRequestError] = useState<string | null>();

  const sendMessageHandler: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    // optional: add client-side validation

    setRequestStatus('pending');

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setRequestStatus('success');
      setEnteredMessage('');
      setEnteredEmail('');
      setEnteredName('');
    } catch (error: any) {
      setRequestError(error.message);
      setRequestStatus('error');
    }
  };

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  let notification;

  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on its way!',
    };
  }

  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success!',
      message: 'Message sent successfully!',
    };
  }

  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error!',
      message: requestError,
    };
  }

  return (
    <section className={ classes.contact }>
      <h1>How can I help you?</h1>
      <form className={ classes.form }
            onSubmit={ sendMessageHandler }>
        <div className={ classes.controls }>
          <div className={ classes.control }>
            <label htmlFor='email'>Your Email</label>
            <input
              type='email'
              id='email'
              required
              value={ enteredEmail }
              onChange={ (event) => setEnteredEmail(event.target.value) }
            />
          </div>
          <div className={ classes.control }>
            <label htmlFor='name'>Your Name</label>
            <input
              type='text'
              id='name'
              required
              value={ enteredName }
              onChange={ (event) => setEnteredName(event.target.value) }
            />
          </div>
        </div>
        <div className={ classes.control }>
          <label htmlFor='message'>Your Message</label>
          <textarea
            id='message'
            rows={ 5 }
            required
            value={ enteredMessage }
            onChange={ (event) => setEnteredMessage(event.target.value) }
          ></textarea>
        </div>

        <div className={ classes.actions }>
          <button>Send Message</button>
        </div>
      </form>
      { notification &&
        <Notification status={ notification.status }
                      title={ notification.title }
                      message={ notification.message }/> }
    </section>
  );
}

export default ContactForm;