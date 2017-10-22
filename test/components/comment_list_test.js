//it shows a comment in a li
// given a list of comments it shows all of them on screen

import {renderComponent, expect} from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList',()=>{
	let component;
	beforeEach(()=>{
		const initialState={comments:['test comment 1','test comment 2']};
		component=renderComponent(CommentList,null,initialState);
	});

	it('shows an <li> for each comment',()=>{
		expect(component.find("li").length).to.equal(2);
	});

	it('shows each comment that is provided',()=>{
		expect(component).to.contain("test comment 1");
		expect(component).to.contain("test comment 2");
	});
});