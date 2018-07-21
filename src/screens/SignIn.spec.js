import React from 'react';
import renderer from 'react-test-renderer';

import { SignIn } from './SignIn';

describe('sign-in screen', () => {
    it('renders without crashing.', () => {
        const rendered = renderer.create(<SignIn />).toJSON();
        expect(rendered).toBeTruthy();
    });
});
