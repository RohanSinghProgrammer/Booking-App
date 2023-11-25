const SendMail = () => {
  return (
    <div className="p-6 bg-[#000033] text-white grid place-items-center">
      <h2 className="font-semibold text-2xl">Save time, save money!</h2>
      <p className="text-sm tracking-widest text-gray-200">Sign up and we'll send the best deals to you</p>
      <div className="my-4">
      <form onSubmit={(e) => e.preventDefault()} className="flex space-x-2 items-center w-96">
        <input type="email" placeholder="Your email" required className="flex-1 p-2 text-gray-900" />
        <button type="submit" className="h-full p-2 bg-blue-700">Subscribe</button>
      </form>
      <div className="flex items-center mt-2 space-x-1">
        <input type="checkbox" id="ch" />
        <label htmlFor="ch" className="text-sm">Send me a link to get FREE Travel.in app!</label>
      </div>
      </div>
    </div>
  );
};

export default SendMail;
