import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

describe('Card Test Suite', () => {

    //Smoke Test
    it('renders without crashing', () => {
        // start by creating an element to render the component into
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div); 
        // Render the component -- Line 9 is the actual test
        // If something is wrong it will fail here.
        ReactDOM.unmountComponentAtNode(div);
    });

    //Snapshot Test
    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<Card />)
            .toJSON();
        expect(tree).toMatchSnapshot();

    });

});
