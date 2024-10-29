import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	carrent,
	jobit,
	tripguide,
	threejs,
	delphi,
	sanerio,
	ken,
	cast,
	sunday
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "Delphi Developer",
		icon: mobile,
	},
	{
		title: "Backend Developer",
		icon: backend,
	},
	{
		title: "React Developer",
		icon: creator,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "mongodb",
		icon: mongodb,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},

	{
		name: "docker",
		icon: docker,
	},
	{
		name: "Delphi",
		icon: delphi,
	},
];

const experiences = [
	{
		title: "Junior Full Stack Developer",
		company_name: "Sunday Market Media",
		 icon: sunday,
		iconBg: "#383E56",
		date: "Dec 2023 - Aug 2024",
		points: [
			"We built, tested, and deployed scalable, highly available, and modular software products using Facebook's and Google's ad APIs.",
			"Maintain existing modules and create new features and improvements on these modules.",
			"Maintained apps in React and Vue.js, created new features, and fixed bugs.",
		],
	},
	{
		title: "Software Developer",
		company_name: "Cast Informatica",
		 icon: cast,
		iconBg: "#E6DEDD",
		date: "June 2015 - Dec 2017",
		points: [
			"They are built, tested and deployed scalable, highly available and modular software products.",
			"Maintained existing modules and created new features and improvements on these modules.",
			"Strengthened developmental methodologies by introducing a code-quality document.",
		],
	},
	{
		title: "Software Developer",
		company_name: "Sanerio Engenharia",
		 icon: sanerio,
		iconBg: "#383E56",
		date: "Jun 2013 - May 2015",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "Programmer",
		company_name: "K&N Comércio e Serviços em Informática",
	    icon: ken,
		iconBg: "#E6DEDD",
		date: "Sep 2010 - Jun 2013",
		points: [
			"Modified existing software to correct errors, adapt to new hardware and improve performance.",
			"Drafted comprehensive reports to document bugs and design flaws.",
			"Designed and created eCommerce websites.",
		],
	},
	{
		title: "Intern",
		company_name: "K&N Comércio e Serviços em Informática",
		icon: ken,
		iconBg: "#E6DEDD",
		date: "Mar 2009 - Sep 2010",
		points: [
			"Modified existing software to correct errors, adapt to new hardware and improve performance.",
			"Drafted comprehensive reports to document bugs and design flaws.",
			"Designed and created eCommerce websites.",
			"Drafted comprehensive reports to document bugs and design flaws.",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

const projects = [
	{
		name: "Whatsapp Clone",
		description:
			"Web-based platform that allows users to talk to other users that create an account on the platform.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "Firebase",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
			{
				name: "Node.Js",
				color: "yellow-text-gradient",
			},
		],
		image: carrent,
		source_code_link: "https://github.com/GuiBarros21/whatsapp-2.0",
	},
	{
		name: "Money Manager",
		description:
			"Web application helps people to manage they monthly expenses.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
			{
				name: "firebase",
				color: "pink-text-gradient",
			},
			{
				name: "sass",
				color: "yellow-text-gradient",
			},
		],
		image: jobit,
		source_code_link:
			"https://github.com/GuiBarros21/Money-Manager-App-ReactJs-main",
	},
	{
		name: "Hulu Clone",
		description:
			"Hulu home page with a updated movies and some information about the movies.",
		tags: [
			{
				name: "React",
				color: "blue-text-gradient",
			},
			{
				name: "API",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: tripguide,
		source_code_link: "https://github.com/GuiBarros21/hulu-clone",
	},
	{
		name: "Employee Management",
		description:
			"A comprehensive web application for employee management. Provides access to employee information.",
		tags: [
			{
				name: "Java",
				color: "blue-text-gradient",
			},
			{
				name: "Spring",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: tripguide,
		source_code_link: "https://github.com/GuiBarros21/employeemanager",
	},
];
export { services, technologies, experiences, projects, testimonials };


