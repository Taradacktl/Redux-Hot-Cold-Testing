import React from 'react';
import {shallow, mount} from 'enzyme';

import { GuessCount } from './guess-count';

describe('<GuessCount />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessCount />);
  });
    it('Renders your guess count', () => {
        let GUESS_COUNT = '9';

        let wrapper = shallow(<GuessCount guessCount={GUESS_COUNT} />);
        expect(wrapper.text()).toEqual(`You've made ${GUESS_COUNT} guesses!`);
    });
});