const NewsLetterbox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="text-center mx-10">
      <p className="text-2xl font-medium text-gray-700">
        Subscribe now and get 205 off
      </p>
      <p className="text-gray-400 mt-3">
        klaskdl; assfdl;kal;sd dsfkjds skdfjkl kledsjf kledsjfkl
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          type="email"
          placeholder="enter email"
          className="w-full sm:flex-1 outline-none"
        ></input>
        <button
          type="submit"
          className="bg-black text-white text-xs py-4 px-10 "
        >
          {" "}
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetterbox;
