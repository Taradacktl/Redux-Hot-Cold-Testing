import React from 'react';
import {shallow, mount} from 'enzyme';

import { AuralStatus } from './aural-status';

describe('<AuralStatus />', () => {
    it('Renders without crashing', () => {
        shallow(<AuralStatus />);
    });
    it('Renders feedback', () => {
    let AURAL_FEEDBACK = 'Keep trying';
    let wrapper = shallow(<AuralStatus auralStatus={AURAL_FEEDBACK} />);
    expect(wrapper.contains(AURAL_FEEDBACK)).toEqual(true);
    })
});