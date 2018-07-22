import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import ConnectedCheckIdentity, { CheckIdentity } from './check-identity.screen';

const mockStore = configureStore([  ]);
const navigation = { navigate: jest.fn() };

describe('check identity screen', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it('should render without crashing.', () => {
        const wrapper = shallow(
            <CheckIdentity getAuthenticatedUser={ jest.fn() } navigation={ navigation } />
        );

        expect(wrapper).toBeDefined();
    });

    it('should render correctly.', () => {
        const wrapper = shallow(
            <CheckIdentity getAuthenticatedUser={ jest.fn() } navigation={ navigation } />
        );
        
        expect(wrapper).toMatchSnapshot();
    });

    it('should dispatch the getCurrentUser action when component is mounting.', () => {
        const store = mockStore({
            currentUser: { data: null }
        });

        const container = shallow(<ConnectedCheckIdentity navigation={ navigation } store={ store } />).dive();

        expect(container).toBeDefined();
        expect(store.getActions()).toMatchSnapshot();
    });

    it('should redirect to authentication stack when the user is not logged in.', () => {
        const store = mockStore({
            currentUser: { data: null }
        });

        const container = shallow(<ConnectedCheckIdentity navigation={ navigation } store={ store } />).dive();

        expect(container).toBeDefined();
        expect(navigation.navigate).toHaveBeenCalled();
        expect(navigation.navigate).toHaveBeenCalledWith('Auth');
    });

    it('should redirect to application stack when the user is logged in.', () => {
        const store = mockStore({
            currentUser: { data: {  } }
        });

        const container = shallow(<ConnectedCheckIdentity navigation={ navigation } store={ store } />).dive();

        expect(container).toBeDefined();
        expect(navigation.navigate).toHaveBeenCalled();
        expect(navigation.navigate).toHaveBeenCalledWith('App');
    });
});
