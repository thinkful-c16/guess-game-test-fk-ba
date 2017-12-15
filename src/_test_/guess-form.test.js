import React from 'react';
import {shallow} from 'enzyme';
import Config from './test-config';
import GuessForm from './components/guess-form.test';
import {mount} from 'enzyme';

describe('<GuessForm/>', () => {

    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    })

    //this test is testing onSubmit event is working
    it('Guess is being submitted', () => {
        const callback = jest.fn();
        const value = 10
        const component = mount(<GuessForm onMakeGuess={callback} />);
        component.find('input[type="number"]').instance().value = value;
        component.find('form').simulate('submit');
        expect(callback).toHaveBeenCalledWith(value);
    })
});