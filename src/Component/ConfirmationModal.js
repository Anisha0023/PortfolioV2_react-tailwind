function ConfirmationModal({ message, success, logo, onClose }) {
	if (!message) return null;

	return (
		<>
			<div
				className="fixed inset-0 bg-black bg-opacity-50 z-40"
				onClick={onClose}
			/>

			<div className="fixed inset-0 flex items-center justify-center z-50 p-4">
				<div
					className={`bg-white rounded-lg shadow-xl max-w-md w-full p-6 border-2 ${
						success ? 'border-green-500' : 'border-red-500'
					}`}>
					<div className="flex justify-center mb-4">
						{success ? (
							<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
								<svg
									className="w-8 h-8 text-green-500"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M5 13l4 4L19 7"
									/>
								</svg>
							</div>
						) : (
							<div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
								<svg
									className="w-8 h-8 text-red-500"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</div>
						)}
					</div>

					<div className="text-center">
						<h3
							className={`text-xl font-semibold mb-2 ${
								success ? 'text-green-700' : 'text-red-700'
							}`}>
							{success ? 'Success!' : 'Error'}
						</h3>
						<p className="text-gray-700 mb-4">{message}</p>
						{success && logo && (
							<div className="flex justify-center items-center">{logo}</div>
						)}
					</div>

					<button
						onClick={onClose}
						className={`w-full mt-6 px-4 py-2 rounded-lg font-medium transition-colors ${
							success
								? 'bg-green-500 hover:bg-green-600 text-white'
								: 'bg-red-500 hover:bg-red-600 text-white'
						}`}>
						Close
					</button>
				</div>
			</div>
		</>
	);
}

export default ConfirmationModal;
