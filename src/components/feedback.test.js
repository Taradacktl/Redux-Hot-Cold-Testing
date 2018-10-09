import React from 'react';
import {shallow, mount} from 'enzyme';

import { Feedback } from './feedback';

describe('<Feedback />', () => {
    it('Renders without crashing', () => {
        shallow(<Feedback />);
  });
    it('Renders feedback', () => {
        let GUESS_FEEDBACK = 'Keep trying';
        let wrapper = shallow(<Feedback feedback={GUESS_FEEDBACK} />);
        expect(wrapper.contains(GUESS_FEEDBACK)).toEqual(true);
    })
});