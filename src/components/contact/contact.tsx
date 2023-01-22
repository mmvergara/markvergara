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
      const res = await fetch("https://markvergara-api.vercel.app/api/dev-website/contact", {
        method: "put",
        body: JSON.stringify({ fullName, email, message }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log({ res });
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
  );
};

export default ContactPage;
