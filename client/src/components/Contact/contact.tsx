import { useState } from "react";

const ContactPage = () => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState<string | null>(null);

  const submitMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!fullName || !email || !message) {
      alert("Make sure to fill out all of the fields");
      return;
    }
    setStatus("Submitting");
    try {
      const res = await fetch("https://mmvergara-dev-website-api.vercel.app/api/dev-website/contact", {
        method: "put",
        body: JSON.stringify({ fullName, email, message }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log({res})
      resetForm();
      setStatus("Message sent successfully!");
    } catch (error) {
      setStatus("Something wen't wrong | unable to send message");
    }
  };

  const resetForm = () => {
    setEmail("");
    setFullName("");
    setMessage("");
  };
  return (
    <>
      <h1 className='font-Poppins text-center text-white text-3xl sm:text-5xl md:text-7xl' style={{ color: "#eab308" }}>
        Contact Me
      </h1>

      <section className='text-white text-sm font-medium bg-skillCardBg p-4 flex flex-col w-[350px] rounded-lg border-b-4 border-cardBg mx-auto mt-8'>
        <p>
          Email
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='inline mx-1'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
            fill='none'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
            <rect x='3' y='5' width='18' height='14' rx='2'></rect>
            <polyline points='3 7 12 13 21 7'></polyline>
          </svg>
          :{" "}
          <a href='mailto:mark.jesusmanabat@gmail.com' aria-label='Email Address' className='text-typescript'>
            Mark.jesusmanabat@gmail.com
          </a>
        </p>
        <p>
          Github
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='inline mx-1'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='currentColor'
            fill='none'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
            <path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5'></path>
          </svg>
          :{" "}
          <a href='https://github.com/mmvergara' aria-label='Github Profile' className='text-typescript'>
            @mmvergara
          </a>
        </p>
        <p>
          LinkedIn
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='inline mx-1'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='currentColor'
            strokeLinecap='round'
            fill='none'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
            <rect x='4' y='4' width='16' height='16' rx='2'></rect>
            <line x1='8' y1='11' x2='8' y2='16'></line>
            <line x1='8' y1='8' x2='8' y2='8.01'></line>
            <line x1='12' y1='16' x2='12' y2='11'></line>
            <path d='M16 16v-3a2 2 0 0 0 -4 0'></path>
          </svg>
          :{" "}
          <a
            href='https://www.linkedin.com/in/mark-vergara-8436b0243/'
            aria-label='LinkedIn Profile'
            className='text-typescript'
          >
            Mark Vergara
          </a>
        </p>
      </section>

      <form
        onSubmit={submitMessage}
        className='p-2 mt-8 flex w-[300px] gap- mx-auto items-center justify-items-center flex-col text-white'
      >
        <input
          onChange={(e) => {
            setFullName(e.target.value!);
          }}
          value={fullName}
          className='bg-skillCardBg p-2 rounded-md w-[300px]'
          placeholder='Full Name'
          type='text'
        />
        <input
          onChange={(e) => {
            setEmail(e.target.value!);
          }}
          value={email}
          className='bg-skillCardBg p-2 rounded-md mt-4 w-[300px]'
          placeholder='Email'
          type='email'
        />
        <textarea
          onChange={(e) => {
            setMessage(e.target.value!);
          }}
          value={message}
          className='bg-skillCardBg p-2 rounded-md mt-4 resize-none w-[300px]'
          name='messageContent'
          placeholder='Send me a message :)'
        ></textarea>
        <button type='submit' className='p-2 bg-purple-800 mt-4 rounded-md hover:bg-purple-600'>
          Send Message
        </button>
        {status && <p className='mt-4'>{status}</p>}
      </form>
    </>
  );
};

export default ContactPage;
