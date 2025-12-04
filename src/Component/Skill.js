import React, { useState, useEffect } from 'react';
import { Code, Database, Layout, Server, Zap, GitBranch } from 'lucide-react';

const Skill = () => {
	const [animated, setAnimated] = useState(false);

	const skills = [
		{
			name: 'React',
			level: 90,
			icon: Layout,
			color: 'from-blue-500 to-cyan-500',
		},
		{
			name: 'JavaScript/TypeScript',
			level: 85,
			icon: Code,
			color: 'from-yellow-500 to-orange-500',
		},
		{
			name: '.NET/EF Core/SP/Web API/DAL',
			level: 80,
			icon: Server,
			color: 'from-green-600 to-lime-600',
		},

		{
			name: 'SQL/MS SQL',
			level: 75,
			icon: Database,
			color: 'from-purple-500 to-pink-500',
		},

		{
			name: 'Git/SourceSafe',
			level: 70,
			icon: GitBranch,
			color: 'from-green-500 to-emerald-500',
		},
		{
			name: 'Python/Django',
			level: 60,
			icon: Zap,
			color: 'from-orange-500 to-red-500',
		},
	];

	useEffect(() => {
		const timer = setTimeout(() => setAnimated(true), 100);
		return () => clearTimeout(timer);
	}, []);

	return (
			<div className="max-w-6xl w-full">
				<div className="grid md:grid-cols-1 gap-8">
					{/* Left Side - Skill Progress Panel */}
					<div className="bg-white/10 backdrop-blur-lg bg-gradient-to-br from-slate-900 via-yellow-900 to-slate-700 rounded-2xl p-8 border border-white/20 shadow-2xl">
						<h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
							<Zap className="text-yellow-400" />
							Core Skills
						</h2>

						<div className="space-y-6">
							{skills.map((skill, idx) => {
								const Icon = skill.icon;
								return (
									<div
										key={idx}
										className="group">
										<div className="flex items-center justify-between mb-2">
											<div className="flex items-center gap-2">
												<Icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
												<span className="text-white font-medium">
													{skill.name}
												</span>
											</div>
											<span className="text-gray-300 font-semibold">
												{skill.level}%
											</span>
										</div>

										{/* Progress Bar Background */}
										<div className="h-3 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
											{/* Progress Bar Fill */}
											<div
												className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative`}
												style={{
													width: animated ? `${skill.level}%` : '0%',
													transitionDelay: `${idx * 100}ms`,
												}}>
												{/* Shine effect */}
												<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
											</div>
										</div>
									</div>
								);
							})}
						</div>

						{/* Summary Stats */}
						<div className="mt-8 pt-6 border-t border-white/20">
							<div className="grid grid-cols-3 gap-4 text-center">
								<div>
									<div className="text-3xl font-bold text-white">
										{skills.length}+
									</div>
									<div className="text-xs text-gray-300">Technologies</div>
								</div>
								<div>
									<div className="text-3xl font-bold text-white">1+</div>
									<div className="text-xs text-gray-300">Years Exp</div>
								</div>
								<div>
									<div className="text-3xl font-bold text-white">5+</div>
									<div className="text-xs text-gray-300">Projects</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
	);
};

export default Skill;
