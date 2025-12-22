import React, { useEffect, useRef } from 'react';
import {
	Renderer,
	Camera,
	Transform,
	Triangle,
	Program,
	Mesh,
	Color,
} from 'ogl';
import { useTheme } from '../Context/ThemeContext';

const Particles = ({
	particleColorsLight = ['#ffffff', '#ffffff'],
	particleColorsDark = ['#fff220', '#a78bfa'],
	particleCount = 100,
	particleSpread = 10,
	speed = 0.1,
	particleBaseSize = 10,
	sizeRandomness = 1,
	moveParticlesOnHover = true,
	alphaParticles = true,
	disableRotation = false,
	children,
	cameraDistance = 20,
}) => {
	const canvasRef = useRef();
	const mouseRef = useRef({ x: 0, y: 0 });
	const { theme } = useTheme();

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const renderer = new Renderer({ canvas, alpha: true });
		const gl = renderer.gl;
		gl.clearColor(0, 0, 0, 0);

		const camera = new Camera(gl, { fov: 35 });
		camera.position.set(0, 0, 5);

		const scene = new Transform();

		// Vertex shader
		const vertex = `
      attribute vec3 position;
      attribute vec3 color;
      uniform mat4 modelViewMatrix;
      uniform mat4 projectionMatrix;
      uniform float uTime;
      varying vec3 vColor;
      
      void main() {
        vColor = color;
        vec3 pos = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        gl_PointSize = ${particleBaseSize.toFixed(1)} / gl_Position.w;
      }
    `;

		// Fragment shader
		const fragment = `
      precision highp float;
      varying vec3 vColor;
      
      void main() {
        vec2 uv = gl_PointCoord.xy;
        float dist = length(uv - 0.5);
        float alpha = ${
					alphaParticles ? '1.0 - smoothstep(0.0, 0.5, dist)' : '1.0'
				};
        if (dist > 0.5) discard;
        gl_FragColor = vec4(vColor, alpha);
      }
    `;

		// Create particles
		const particleColors =
			theme === 'dark' ? particleColorsDark : particleColorsLight;
		const colors = particleColors.map((color) => {
			const c = new Color(color);
			return [c.r, c.g, c.b];
		});
		const particles = [];
		for (let i = 0; i < particleCount; i++) {
			const colorIndex = Math.floor(Math.random() * colors.length);
			particles.push({
				position: [
					(Math.random() - 0.5) * particleSpread,
					(Math.random() - 0.5) * particleSpread,
					(Math.random() - 0.5) * particleSpread,
				],
				color: colors[colorIndex],
				velocity: [
					(Math.random() - 0.5) * speed,
					(Math.random() - 0.5) * speed,
					(Math.random() - 0.5) * speed,
				],
			});
		}

		const positions = new Float32Array(particles.flatMap((p) => p.position));
		const colorsArray = new Float32Array(particles.flatMap((p) => p.color));

		const geometry = new Triangle(gl);
		geometry.addAttribute('position', {
			size: 3,
			data: positions,
		});
		geometry.addAttribute('color', {
			size: 3,
			data: colorsArray,
		});

		const program = new Program(gl, {
			vertex,
			fragment,
			uniforms: {
				uTime: { value: 0 },
			},
			transparent: true,
			depthTest: false,
		});

		const mesh = new Mesh(gl, { geometry, program, mode: gl.POINTS });
		mesh.setParent(scene);

		// Mouse move handler
		const handleMouseMove = (e) => {
			if (moveParticlesOnHover) {
				mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
				mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
			}
		};

		window.addEventListener('mousemove', handleMouseMove);

		// Resize handler
		const resize = () => {
			renderer.setSize(window.innerWidth, window.innerHeight);
			camera.perspective({ aspect: window.innerWidth / window.innerHeight });
		};
		window.addEventListener('resize', resize);
		resize();

		// Animation loop
		let frame;
		const animate = (time) => {
			frame = requestAnimationFrame(animate);

			if (!disableRotation) {
				mesh.rotation.y += 0.001;
			}

			program.uniforms.uTime.value = time * 0.001;

			renderer.render({ scene, camera });
		};
		animate(0);

		// Cleanup
		return () => {
			cancelAnimationFrame(frame);
			window.removeEventListener('resize', resize);
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, [
		theme,
		particleColorsLight,
		particleColorsDark,
		particleCount,
		particleSpread,
		speed,
		particleBaseSize,
		moveParticlesOnHover,
		alphaParticles,
		disableRotation,
		sizeRandomness,
		cameraDistance,
	]);

	return (
		<div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
			<canvas
				ref={canvasRef}
				style={{
					position: 'fixed',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					zIndex: -1,
					pointerEvents: 'none',
				}}
			/>
			{children}
		</div>
	);
};

export default Particles;
