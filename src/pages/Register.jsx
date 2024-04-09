import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Register = () => {
	// const {createUser,setloader} = useContext(AuthContext)
	const { createUser,updateUserProfile, setloader } = useContext(AuthContext)
	// const [Error, setError] = useState('')
	// const [emailError, setEmailError] = useState('')



	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	// navigation systems
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
		// 	if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/.test(password)) {
		// 	toast.error('GGGGGGGGGGGGGG')
		// 	return
		// }
		
		//create user and update profile
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


	// const handleRegister = e => {
	// 	e.preventDefault();
	// 	const email = e.target.email.value;
	// 	const password = e.target.password.value;
	// 	const confirmpassword = e.target.confirmpassword.value
	// 	console.log(email, password, confirmpassword)



	// 	if (!/@gmail\.com$/.test(email)) {
	// 		setEmailError('email must end with @gmail.com')
	// 		toast.error('email must end with @gmail.com')
	// 		return
	// 	}

	// 	if (password.length < 6) {
	// 		setError('password must be 6 characters')
	// 		toast.error('error.message')
	// 		return
	// 	}
	// 	if (password !== confirmpassword) {
	// 		setError("passwords didn't match")
	// 		toast.error("passwords didn't match")
	// 		return
	// 	}

	// 	if (!/[@#%^*]/.test(password)) {
	// 		toast.error('please add a apecial character like @ ,#,%,^,&,*')
	// 		return
	// 	}
	// 	if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/.test(email)) {
	// 		toast.error('GGGGGGGGGGGGGG')
	// 		return
	// 	}



	// 	createUser(email, password)
	// 		.then(result => {
	// 			console.log(result.user)
	// 			toast.success('user create successfully')
	// 			e.target.reset()


	// 		})
	// 		.catch(error => {
	// 			setloader(false)
	// 			toast.error(error.message)
	// 			console.log(error.message.split('/')[1])

	// 		});

	// }


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

					{/* <div>
						<div className="flex justify-between mb-2">
							<label htmlFor="confirmpassword" className="text-sm">confirm password</label>
						</div>
						<input type="password" name="confirmpassword" id="confirmpassword" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
					</div> */}
				</div>
				<div className="space-y-2">
					<div>
						<button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Sign in</button>
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