import React from 'react';
import { shallow } from 'enzyme';

import Headline from './headline.component';

import { findByTestAttr } from '../../Utils/data-test';

const setUp = (props = {}) => {
	const component = shallow(<Headline {...props} />);
	return component;
};

describe('Headline Component', () => {
	describe('Have props', () => {
		let wrapper;
		beforeEach(() => {
			const props = {
				header: 'Test header',
				desc: 'Test Desc',
			};
			wrapper = setUp(props);
		});

		test('Should render without errors', () => {
			const component = findByTestAttr(wrapper, 'HeadlineComponent');
			expect(component.length).toBe(1);
		});
		test('Should render a h1', () => {
			const h1 = findByTestAttr(wrapper, 'header');
			expect(h1.length).toBe(1);
		});
		test('Should render a desc', () => {
			const desc = findByTestAttr(wrapper, 'descWrapper');
			expect(desc.length).toBe(1);
		});
	});

	describe('Have no props', () => {
		let wrapper;

		beforeEach(() => {
			wrapper = setUp();
		});
		test('Should not render', () => {
			const component = findByTestAttr(wrapper, 'HeadlineComponent');
			expect(component.length).toBe(0);
		});
	});
});
