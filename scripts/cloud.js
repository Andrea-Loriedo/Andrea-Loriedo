// Define colour palette
let lightGreen = '#22f2ce';
let medGreen = '#00d0ac';
let darkGreen = '#0ba389';
let darkerGreen = '#108570';

$(document).ready(function()
{
		var skills = [
				{text: 'VR', weight: 50, color: darkGreen},
				{text: 'Azure Kinect', weight: 40, color: darkGreen},
				{text: 'OOP', weight: 50, color: medGreen},
				{text: 'GIT', weight: 27, color: darkGreen},
				{text: 'Unity VFX Graph', weight: 18, color: lightGreen},
				{text: 'HTML', weight: 12, color: darkGreen},
        {text: 'CSS', weight: 12, color: darkGreen},
        {text: 'JavaScript', weight: 12, color: medGreen},
				{text: 'Game Dev', weight: 39, color: lightGreen},
				{text: 'C', weight: 50, color: darkGreen},
				{text: 'C++', weight: 50, color: darkGreen},
				{text: 'Python', weight: 30, color: medGreen},
				{text: 'C#', weight: 75, color: medGreen},
				{text: 'SolidWorks', weight: 12, color: lightGreen},
				{text: 'SoC', weight: 27, color: medGreen},
				{text: 'Unity', weight: 80, color: darkerGreen},
				{text: 'PCB Design', weight: 22, color: medGreen},
        {text: 'Virtual Production', weight: 20, color: medGreen},
        {text: 'React Native', weight: 20, color: lightGreen},
        {text: 'Swift', weight: 12, color: darkGreen},
        {text: 'Ableton Live 10', weight: 15, color: medGreen},
        {text: 'Embedded Systems', weight: 15, color: darkerGreen},
        {text: 'Oculus', weight: 20, color: medGreen},
        {text: 'HTC Vive', weight: 20, color: darkGreen},
        {text: 'Firebase', weight: 30, color: darkGreen},
		];

		$('#skillcloud').jQCloud(skills, {
  		autoResize: true,
			fontSize: {
				from: 0.08,
				to: 0.03
			},
			afterCloudRender : function(){
				$("#skillcloud").on('mouseenter', 'span', function() {
				    $(this).css("transform", "scale(1.1)");
						$(this).css("cursor", "pointer");
				});
				$("#skillcloud").on('mouseout', 'span', function() {
						$(this).css("transform", "scale(1)");
				});
    	}
		});
});
