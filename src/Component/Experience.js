// import React, { useState } from 'react';
// import {
// 	MdWork,
// 	MdLocationOn,
// 	MdDateRange,
// 	MdCheckCircle,
// 	MdStar,
// } from 'react-icons/md';
// import matt from '../assets/images/Matt.png'
// import srishti from '../assets/images/srishti.png';
// import py from '../assets/images/py.png';
// import gtc from '../assets/images/gtc.png';
// import Skill from './Skill';

// const Experience = () => {
// 	const [experiences, setExperiences] = useState([
// 		{
// 			id: 1,
// 			company: 'GreenTop Information Technology',
// 			logo: gtc,
// 			position: 'Full Stack Developer',
// 			duration: 'Feb 2025 - Present (10 m)',
// 			location: 'Nithiravilai, Kk Dist, India',
// 			type: 'Full-Time',
// 			verified: true,
// 			featured: true,
// 		},
// 		{
// 			id: 2,
// 			company: 'PySPiders',
// 			logo: py,
// 			position: 'Full Stack Developer Learner',
// 			duration: 'July 2024 - Feb 2025 (8 m)',
// 			location: 'Bengaluru, India',
// 			type: 'Full-Time',
// 			verified: true,
// 			featured: false,
// 		},
// 		{
// 			id: 3,
// 			company: 'Srishti Innovative',
// 			logo: srishti,
// 			position: 'Pthon Learner',
// 			duration: 'Jul 2019 - Apr 2021 (1 m)',
// 			location: 'Thiruvanathapuram, India',
// 			type: 'Internship',
// 			verified: true,
// 			featured: false,
// 		},
// 		{
// 			id: 4,
// 			company: 'MATT Engineering Solutions',
// 			logo: matt,
// 			position: 'Learner',
// 			duration: 'Dec 2018 - Jun 2019 (1 m)',
// 			location: 'Nagercoil, India',
// 			type: 'Internship',
// 			verified: true,
// 			featured: false,
// 		},
// 	]);

// 	return (
// 		<div className="w-full flex flex-col lg:flex-row items-start justify-between px-8 mt-20 gap-10">

// 			<div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
// 					<Skill/>
// 				</div>
// 			{/* Experience Content */}
// 			<div className="max-w-xl flex flex-col gap-5">
// 				<h1 className="font-bold text-4xl font-serif tracking-wider">
// 					Skills & Expertise
// 				</h1>
// 				<div className="space-y-6">
// 					{experiences.map((exp, index) => (
// 						<div
// 							key={exp.id}
// 							className="relative">
// 							{index < experiences.length - 1 && (
// 								<div className="absolute left-6 top-16 w-0.5 h-24 bg-gray-200"></div>
// 							)}

// 							<div className="flex gap-4 group">
// 								<div className="flex-shrink-0">
// 									<img
// 										className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl shadow-md"
// 										src={exp.logo}
// 									/>
// 								</div>

// 								<div className="flex-1 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100">
// 									<div className="flex  items-start justify-between">
// 										<div className="flex-1 bg-white">
// 											<h3 className="text-xl bg-white font-bold text-gray-900 mb-1">
// 												{exp.company}
// 											</h3>
// 											<div className="flex items-center gap-2 mb-2 bg-white">
// 												<h4 className="text-lg bg-white font-semibold text-gray-700">
// 													{exp.position}
// 												</h4>
// 												{exp.verified && (
// 													<MdCheckCircle className="w-5 h-5 text-green-500 bg-white" />
// 												)}
// 												{exp.featured && (
// 													<MdStar className="w-5 h-5 text-yellow-500 bg-white" />
// 												)}
// 											</div>
// 											<div className="flex flex-wrap gap-4 text-sm text-gray-600 bg-white">
// 												<div className="flex items-center gap-1">
// 													<MdDateRange className="w-4 h-4 bg-white" />
// 													<span className="bg-white">{exp.duration}</span>
// 												</div>
// 												<div className="flex items-center gap-1">
// 													<MdLocationOn className="w-4 h-4 bg-white" />
// 													<span className="bg-white">{exp.location}</span>
// 												</div>
// 												<div className="flex items-center gap-1">
// 													<MdWork className="w-4 h-4 bg-white" />
// 													<span className="bg-white">{exp.type}</span>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					))}
// 				</div>
// 			</div>

// 		</div>
// 	);
// };

// export default Experience;

import React, { useState } from 'react';
import {
	MdWork,
	MdLocationOn,
	MdDateRange,
	MdCheckCircle,
	MdStar,
} from 'react-icons/md';
import matt from '../assets/images/Matt.png';
import srishti from '../assets/images/srishti.png';
import py from '../assets/images/py.png';
import gtc from '../assets/images/gtc.png';
import Skill from './Skill';

const Experience = () => {
	const [experiences] = useState([
		{
			id: 1,
			company: 'GreenTop Information Technology',
			logo: gtc,
			position: 'Full Stack Developer',
			duration: 'Feb 2025 - Present (10 m)',
			location: 'Nithiravilai, Kk Dist, India',
			type: 'Full-Time',
			verified: true,
			featured: true,
		},
		{
			id: 2,
			company: 'PySPiders',
			logo: py,
			position: 'Full Stack Developer Learner',
			duration: 'July 2024 - Feb 2025 (8 m)',
			location: 'Bengaluru, India',
			type: 'Full-Time',
			verified: true,
			featured: false,
		},
		{
			id: 3,
			company: 'Srishti Innovative',
			logo: srishti,
			position: 'Python Learner',
			duration: 'Jul 2019 - Apr 2021 (1 m)',
			location: 'Thiruvanathapuram, India',
			type: 'Internship',
			verified: true,
			featured: false,
		},
		{
			id: 4,
			company: 'MATT Engineering Solutions',
			logo: matt,
			position: 'Learner',
			duration: 'Dec 2018 - Jun 2019 (1 m)',
			location: 'Nagercoil, India',
			type: 'Internship',
			verified: true,
			featured: false,
		},
	]);

	return (
		<div className="w-full px-4 sm:px-8 lg:px-16 py-20">
			<div className="max-w-7xl mx-auto">
				<h1 className="font-bold text-4xl font-serif tracking-wider mb-12 text-center">
					Skills & Experience
				</h1>

				<div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
					<div className="lg:col-span-1 order-2 lg:order-1">
						<div className="sticky top-20">
							<Skill />
						</div>
					</div>

					<div className="lg:col-span-2 order-1 lg:order-2">
						<div className="space-y-6">
							{experiences.map((exp, index) => (
								<div
									key={exp.id}
									className="relative">
									{/* Timeline connector line */}
									{index < experiences.length - 1 && (
										<div className="absolute left-6 top-16 w-0.5 h-24 bg-gradient-to-b from-yellow-100 to-yellow-400"></div>
									)}

									<div className="flex gap-4 group">
										{/* Company Logo */}
										<div className="flex-shrink-0">
											<div className="w-12 h-12 rounded-lg overflow-hidden shadow-md ring-2 ring-white">
												<img
													className="w-full h-full object-cover"
													src={exp.logo}
													alt={exp.company}
												/>
											</div>
										</div>

										{/* Experience Card */}
										<div className="flex-1 bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group-hover:border-yellow-100">
											<div className="flex items-start justify-between">
												<div className="flex-1">
													<h3 className="text-xl font-bold text-gray-900 mb-1">
														{exp.company}
													</h3>

													<div className="flex items-center gap-2 mb-3 flex-wrap">
														<h4 className="text-lg font-semibold text-gray-700">
															{exp.position}
														</h4>
														{exp.verified && (
															<MdCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
														)}
														{exp.featured && (
															<MdStar className="w-5 h-5 text-yellow-500 flex-shrink-0" />
														)}
													</div>

													<div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 text-sm text-gray-600">
														<div className="flex items-center gap-1">
															<MdDateRange className="w-4 h-4 flex-shrink-0" />
															<span>{exp.duration}</span>
														</div>
														<div className="flex items-center gap-1">
															<MdLocationOn className="w-4 h-4 flex-shrink-0" />
															<span>{exp.location}</span>
														</div>
														<div className="flex items-center gap-1">
															<MdWork className="w-4 h-4 flex-shrink-0" />
															<span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
																{exp.type}
															</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
