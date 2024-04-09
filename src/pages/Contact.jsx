import { useState } from "react";
import { Helmet } from "react-helmet-async";
import 'animate.css';

const Contact = () => {
    const [informetion,setinformetion]=useState([])
    const onSubmit = e =>{
        e.preventDefault();
        const fullname = e.target.fullname.value;
		const email = e.target.email.value;
		const Message = e.target.Message.value
		console.log(email, fullname, Message)
        setinformetion(email,fullname,Message)
    }
    console.log(informetion)
    return (
        <div>
            <Helmet>
             <title>Luxury Properties | Contact </title>
             </Helmet>
             <section className="py-6  text-gray-600">
	<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
		<div className="animate__animated animate__fadeInLeft py-6 md:py-0 md:px-6">
			<h1 className="text-4xl font-bold">Get in touch</h1>
			<p className="pt-2 pb-4">Fill in the form to start a conversation</p>
			<div className="space-y-4">
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
					</svg>
					<span>Fake address, 9999 City</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
					</svg>
					<span>123456789</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
					<span>contact@business.com</span>
				</p>
			</div>
		</div>
		<form onSubmit={onSubmit} className="animate__animated animate__fadeInRight flex flex-col py-6 space-y-6 md:py-0 md:px-6">
			<label className="block" htmlFor="fullname">
				<span className="mb-1">Full name</span>
				<input type="text" name="fullname" required  placeholder="Leroy Jenkins" className="block w-full rounded-md shadow-sm py-2 px-8 mt-3 bg-gray-100"  />
			</label>
			<label className="block" htmlFor="email">
				<span className="mb-1">Email address</span>
				<input type="email" name="email" required placeholder="leroy@jenkins.com" className="block w-full rounded-md shadow-sm py-2 px-8 mt-3 bg-gray-100" />
			</label>
			<label className="block" htmlFor="Message">
				<span className="mb-1">Message</span>
				<textarea rows="3" name="Message" required className="block w-full rounded-md mt-3 bg-gray-100 px-8 py-3" placeholder="type your Message here"></textarea>
			</label>
			<button type="submit" className="self-center px-8 py-3 text-lg rounded    bg-orange-500 text-white border-none">Submit</button>
		</form>
	</div>
</section>
            
        </div>
    );
};

export default Contact;