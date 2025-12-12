import { useState } from 'react';
import contactAnimation from '../assets/lottieAnimationImg/Contact Us.json';
import { Player } from '@lottiefiles/react-lottie-player';


function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form submitted:', formData);
		// Add your form submission logic here
		alert('Thank you for your message! I will get back to you soon.');
		setFormData({ name: '', email: '', subject: '', message: '' });
	};

	return (
		<div className="w-full min-h-screen px-4 sm:px-8 lg:px-16 py-20">
			<h1 className="font-bold text-4xl font-serif tracking-wider mb-12 text-center">
				Contact
			</h1>

			<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
				{/* Image Section */}
				<div className="order-1 lg:order-1 h-full w-full">
					<div className="h-full min-h-[500px] lg:min-h-[600px] flex items-center">
						<Player
							loop
							autoplay
							src={contactAnimation}
							style={{}}
						/>
					</div>
				</div>

				{/* Contact Form Section */}
				<div className="order-2 lg:order-2 h-full flex items-center">
					<div className="w-[500px] shadow-lg p-8">
						<h2 className="text-2xl font-semibold mb-6 text-gray-800">
							Get In Touch
						</h2>

						<form
							onSubmit={handleSubmit}
							className="space-y-5">
							{/* Name Field */}
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium text-gray-700 mb-2">
									Your Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
									required
								/>
							</div>

							{/* Email Field */}
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700 mb-2">
									Email Address
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
									required
								/>
							</div>

							{/* Subject Field */}
							<div>
								<label
									htmlFor="subject"
									className="block text-sm font-medium text-gray-700 mb-2">
									Subject
								</label>
								<input
									type="text"
									id="subject"
									name="subject"
									value={formData.subject}
									onChange={handleChange}
									className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
									placeholder="Project Inquiry"
									required
								/>
							</div>

							{/* Message Field */}
							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium text-gray-700 mb-2">
									Message
								</label>
								<textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									rows="5"
									className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none"
									placeholder="Tell me about your project..."
									required></textarea>
							</div>

							{/* Submit Button */}
							<button
								type="submit"
								className="w-full bg-yellow-500 text-black py-3 px-6 rounded-md hover:bg-yellow-500 transition-colors duration-300 font-medium">
								Send Message
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
