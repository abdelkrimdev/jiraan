import React from 'react';
import renderer from 'react-test-renderer';

import { CheckIdentity } from './check-identity.screen';

describe('check identity screen', () => {
    it('renders without crashing.', () => {
        const rendered = renderer.create(
            <CheckIdentity getAuthenticatedUser={ ()=> true } />
        ).toJSON();
        expect(rendered).toBeTruthy();
    });
});
