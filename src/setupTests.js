import Enzyme from 'enzyme';
import EnzymeAapter from 'enzyme-adapter-react-16';

import '@testing-library/jest-dom';

Enzyme.configure({
	adapter: new EnzymeAapter(),
	disableLifecycleMethods: true,
});
