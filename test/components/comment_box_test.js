//It has a text area
// I has a button
// Entering text into the text area updates the text
import {renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';


describe('CommentBox',()=>{
	let component;
	
	beforeEach(()=>{
		 component=renderComponent(CommentBox);
	});
	
	it('has correct class',()=>{
		expect(component).to.have.class("comment-box");
	});


	it('has a <textarea>', () => {
		expect(component.find('textarea')).to.exist;
	});

	it('has a <button>',() => {
		expect(component.find('button')).to.exist; 
	});

	//When user inpust a text we can nest describe to group 
	// cases for a prticular aspect;

	describe('entering some text',()=>{
		//afditional before each for the cases inside this describe
		beforeEach(()=>{
			component.find('textarea').simulate('change','new comment');
		});	

		it('shows the text in the textarea',()=>{
			expect(component.find('textarea')).to.have.value('new comment');
		});

		it('when submited clears the input',()=>{
			component.simulate('submit');
			expect(component.find("textarea")).to.have.value('');
		});
	});
	

});