import { useFormik } from "formik";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="flex h-screen items-center justify-center">
      <form onSubmit={formik.handleSubmit} className="flex flex-col">
        <label htmlFor="email">Email</label>
        <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-mist-400">
          <input
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="text-gray-900 block min-w-0 grow py-1.5 pr-3 pl-1 text-base placeholder:text-gray-400 sm:text-sm/6 outline-none"
          />
        </div>

        <label htmlFor="password">Password</label>
        <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-mist-400">
          <input
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="text-gray-900 block min-w-0 grow py-1.5 pr-3 pl-1 text-base placeholder:text-gray-400 sm:text-sm/6 outline-none"
          />
        </div>
        <button
          type="submit"
          className="rounded-full bg-blue-600 text-white m-2.5 p-2 hover:bg-blue-700 cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
