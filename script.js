gsap.from('.animate-stagger' , {
	opacity: 0,
	duration: 1.4,
	y: -50,
	ease: 'Power2.easeInOut',
	stagger: 0.6
});

gsap.from('.art' , {
	opacity: 1,
	duration: .8,
	y: -650,
	delay: 1
});

gsap.from('.color' , {
	duration: .8,
	y: -50,
	delay: 1.3
});