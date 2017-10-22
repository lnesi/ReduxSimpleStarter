import {renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';


describe('App',()=>{

	let component;
	beforeEach(()=>{
		component= renderComponent(App);
	});

	it('shows a comment box',  () =>{	
		expect(component.find(".comment-box")).to.exist;
	}); 

	it('shows a comment list',  () =>{	
		expect(component.find(".comment-list")).to.exist;
	});

});



// mocha
// Use 'describe' to group together similar tests
// String of the name of the component to report. Name of report in console
// describe('App',()=>{
	
	// Use 'it' to test a single attribute of a target. Single test (base)
	// Example: make sure that the text React simple starter is on the page.
	// First string is the name of the test to report.
	//it('shows the correct text',()=>{
		//create an instance of app
	//	const component = renderComponent(App);
		// Use 'expect' to make an 'assertion' about the target
		// The text does display React simple starte
	//	expect(component).to.contain('React simple starter');
 

	//});
// });

