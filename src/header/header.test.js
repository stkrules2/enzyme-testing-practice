import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../Utils/data-test';

import Header from './header.componenet';

const setUp = (props = {}) => {
	const component = shallow(<Header {...props} />);
	return component;
};

describe('Header Component', () => {
	let component;
	beforeEach(() => {
		component = setUp();
	});

	test('It should render without errors', () => {
		const wrapper = findByTestAttr(component, 'headerComponent');
		expect(wrapper.length).toBe(1);
	});
	test('It should render a logo', () => {
		const logo = findByTestAttr(component, 'logoImg');
		expect(logo.length).toBe(1);
	});
});
