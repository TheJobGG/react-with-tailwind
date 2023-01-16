export default function Form() {
  return (
    <form className="bg-white max-w-xs mx-auto rounded-xl">
      <h3 className="text-2xl uppercase text-center pt-5">Login</h3>
      <div className="mx-auto px-10 py-5">
        <label htmlFor="form-username" className="block">
          Username
        </label>
        <input
          type="text"
          id="form-username"
          placeholder="some-name-123"
          className="w-full text-sm px-2 py-2 outline-none border rounded-md focus:border-blue-500 invalid:border-red-500"
        />

        <label htmlFor="form-email" className="block">
          Email
        </label>
        <input
          type="email"
          id="form-email"
          placeholder="my-email@example.com"
          className="w-full text-sm px-2 py-2 outline-none border rounded-md focus:border-blue-500 invalid:border-red-500"
        />

        <label htmlFor="form-password" className="block">
          Password
        </label>
        <input
          type="password"
          id="form-password"
          placeholder="*********"
          className="w-full text-sm px-2 py-2 outline-none border rounded-md focus:border-blue-500 invalid:border-red-500"
        />
      </div>
    </form>
  );
}
