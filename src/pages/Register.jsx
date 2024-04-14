import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Register = () => {
	
	const { createUser,updateUserProfile, setloader } = useContext(AuthContext)
	



	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	
	const navigate = useNavigate();
	const from = "/";

	const onSubmit = (data) => {
		const { email, password, image, fullName } = data;
		if (password.length < 6) {
			toast.error('error.message')
			return
		}
		if (!/[A-Z]/.test(password)) {
			toast.error("password must have a  uppercase  letter")
			return
		}
	
		if (!/[a-z]/.test(password)) {
			toast.error('password must have a capital letter')
			return
		}
		
		createUser(email, password)
			.then(() => {
				updateUserProfile(fullName, image)
					.then(() => {
						navigate(from);
						toast.success('user register successfully')
		});
	})
	.catch(error => {
		setloader(false)
		toast.error(error.message)
		console.log('error', error.message)
	});

	
	
};



	return (
		<div className="flex mt-8 flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-50 text-gray-800 mx-auto">
			<Helmet>
             <title>Luxury Properties | Register </title>
             </Helmet>
			<div className="mb-8 text-center">
				<h1 className="my-3 text-4xl font-bold">Sign up</h1>
				<p className="text-sm text-gray-600">Sign in to access your account</p>
			</div>
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
				<div className="space-y-4">
					<div>
						<label htmlFor="text" className="block mb-2 text-sm">Full Name</label>
						<input type="text" name="text" id="text" placeholder="Full name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
						{...register("fullName", { required: true })}
						/>
						{errors.fullName && (
                  <span className="text-red-500">This field is required</span>
                )}
					</div>
					<div>
						<label htmlFor="email" className="block mb-2 text-sm">Email address</label>
						<input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" 
						{...register("email", { required: true })}
						/>
						{errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
					</div>
					<div>
						<label htmlFor="image" className="block mb-2 text-sm">Image Url</label>
						<input type="text" name="image" id="image" placeholder="image url" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" 
						{...register("image")}
						/>
					</div>
					<div>
						<div className="flex justify-between mb-2">
							<label htmlFor="password" className="text-sm">Password</label>
						</div>
						<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" 
						{...register("password", { required: true })}
						/>
						{errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
					</div>

					
				</div>
				<div className="space-y-2">
					<div>
						<button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Sign up</button>
					</div>
					<p className="px-6 text-sm text-center text-gray-600">Don{`'`}t have an account yet?
						<Link to='/login' rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-600">Sign in</Link>.
					</p>
				</div>
			</form>
			<ToastContainer />
		</div>
	);
};

export default Register;