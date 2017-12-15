import React from 'react';
import Config from './testConfig';
import {shallow} from 'enzyme';
import GuessList from './guess-list';

describe('<GuessList/>', () => {
    
        it('Renders without crashing', () => {
            shallow(<GuessList guesses={[ ]} />);
        })
        
        it('Renders a list of guesses', () => {
            const guessess = [1, 2, 3, 4];
            const wrapper = shallow(<GuessList guesses={guessess} />);
            const items = wrapper.find('li');
            expect(items.length).toEqual(guessess.length);
            guessess.forEach((value, index) => {
                expect(items.at(index).text()).toEqual(value.toString());
            });             
        });
});
