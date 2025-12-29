import { useState } from 'react';
import contactAnimation from '../assets/lottieAnimationImg/Contact Us.json';
import { Player } from '@lottiefiles/react-lottie-player';
import emailjs from '@emailjs/browser';
import ConfirmationModal from './ConfirmationModal';
import { FaExclamation, FaCheckCircle } from 'react-icons/fa';

function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const [showModal, setShowModal] = useState(false);
	const [modalMessage, setModalMessage] = useState('');
	const [isSuccess, setIsSuccess] = useState(false);
	const [buttonLoading, setButtonLoading] = useState(false);

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setButtonLoading(true);
		emailjs
			.send(
				'service_d79sxgg',
				'template_0brfwwj',
				{
					name: formData.name,
					email: formData.email,
					subject: formData.subject,
					message: formData.message,
				},
				'rdSU7gD0f6w2fLFt0'
			)
			.then(() => {
				setIsSuccess(true);
				setModalMessage(
					'Message sent successfully! We will get back to you soon.'
				);
				setButtonLoading(false);
				setShowModal(true);

				setFormData({ name: '', email: '', subject: '', message: '' });
			})
			.catch((error) => {
				console.error('EmailJS Error:', error);

				setIsSuccess(false);
				setModalMessage('Failed to send message. Please try again later.');
				setButtonLoading(false);
				setShowModal(true);
			});
	};

	return (
		<section className="w-full px-4 sm:px-6 lg:px-12">
			<h1 className="font-bold text-3xl sm:text-4xl font-serif tracking-wider text-center mb-12">
				Contact
			</h1>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
				<div className="flex justify-center">
					<Player
						loop
						autoplay
						src={contactAnimation}
						className="w-full max-w-sm sm:max-w-md lg:max-w-lg"
					/>
				</div>

				<div className="flex justify-center">
					<div className="w-full max-w-md sm:max-w-lg shadow-lg rounded-lg p-6 sm:p-8 bg-white">
						<h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800 text-center sm:text-left">
							Get In Touch
						</h2>

						<form
							onSubmit={handleSubmit}
							className="space-y-5">
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Your Name
								</label>
								<input
									type="text"
									name="name"
									value={formData.name}
									onChange={handleChange}
									className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500"
									required
								/>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Email Address
								</label>
								<input
									type="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500"
									required
								/>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Subject
								</label>
								<input
									type="text"
									name="subject"
									value={formData.subject}
									onChange={handleChange}
									placeholder="Project Inquiry"
									className="w-full px-4 py-2 border border-ring-yellow-500 rounded-md focus:ring-2 focus:ring-yellow-500"
									required
								/>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Message
								</label>
								<textarea
									name="message"
									value={formData.message}
									onChange={handleChange}
									rows="4"
									placeholder="Tell me about your project..."
									className="w-full px-4 py-2 border rounded-md resize-none focus:ring-2 focus:ring-yellow-500"
									required
								/>
							</div>

							<button
								type="submit"
								disabled={buttonLoading}
								className="w-full bg-yellow-500 text-black py-3 rounded-md font-medium hover:bg-yellow-400 transition">
								Send Message
							</button>
						</form>
					</div>
				</div>
			</div>

			{showModal && (
				<ConfirmationModal
					message={modalMessage}
					success={isSuccess}
					logo={
						isSuccess ? (
							<FaCheckCircle className="text-green-500" />
						) : (
							<FaExclamation className="text-red-500" />
						)
					}
					onClose={() => setShowModal(false)}
				/>
			)}
		</section>
	);
}

export default Contact;
