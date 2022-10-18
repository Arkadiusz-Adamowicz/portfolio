const Contact = () => {
  return (
    <div
      name='contact'
      className='w-full h-screen bg-[#0a192f] text-gray-300 flex justify-center items-center p-4'
    >
      <form
        method='POST'
        action='https://getform.io/f/3ad23b89-44f1-441d-88fd-5a5e90056bf3'
        className='flex flex-col max-w-[1000px] w-full p-4'
      >
        <div className='pb-6 mt-[-2rem] md:mt-6'>
          <p className='text-4xl font-bold inline border-b-4 border-red-600 text-[#ccd6f6]'>
            Contact
          </p>
          <div className='py-4 text-gray-300'>
            <p>
              {'// Fill the form below to contact me or send me an email:'}
              <span className='font-bold'> arek.adamowicz81@gmail.com</span>
            </p>
          </div>
        </div>
        <div className='max-w-[600px] w-full text-center mx-auto'>
          <input
            className='w-full bg-[#ccd6f6] outline-none rounded text-[#0a192f] font-bold py-2 px-2 mb-6'
            type='text'
            placeholder='Name'
            name='name'
          />
          <input
            className='w-full bg-[#ccd6f6] outline-none rounded text-[#0a192f] font-bold py-2 px-2 mb-6'
            type='email'
            placeholder='Email'
            email='email'
            name='email'
          />
          <textarea
            className='w-full bg-[#ccd6f6] outline-none rounded text-[#0a192f] font-bold py-2 px-2'
            type='text'
            placeholder='Message'
            message='message'
            name='message'
            rows='10'
          ></textarea>
          <button className='border-[1px] border-[#ccd6f6] hover:bg-red-600 hover:border-red-600 px-4 py-3 mt-4 mx-auto rounded text-[#ccd6f6]'>
            Send message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
