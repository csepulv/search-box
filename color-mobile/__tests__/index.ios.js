import 'react-native';
import React from 'react';


// need following to fix
// Invariant Violation: ReactUpdates: must inject a reconcile transaction class and batching strategy
// https://wietse.loves.engineering/using-jest-with-react-native-and-mobx-34949ea7d2cf#.719t4c63f
jest.mock('mobx-react/native', () => require('mobx-react/custom'));


import Index from '../index.ios.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(
        <Index />
    );
});
