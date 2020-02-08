import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

describe('Card Test Suite', () => {

    const STORE = {list: 
        {
        id: '1',
        header: 'First list',
        cardIds: [ 'a', 'b' ]
        },
        allCards: {
            'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
            'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' }
        }
    };

    describe('Card Test Suite', () => {
        //Smoke Test
        it('renders without crashing', () => {
            // start by creating an element to render the component into
            const div = document.createElement('div');
            ReactDOM.render(<List 
                key={STORE.list.id}
                header={STORE.list.header}
                cards={STORE.list.cardIds}
                />,  
                div); 
            ReactDOM.unmountComponentAtNode(div);
        });

        //Snapshot Test
        it('renders the UI as expected', () => {
            const tree = renderer
                .create(<List 
                    key={STORE.list.id}
                    header={STORE.list.header}
                    cards={STORE.list.cardIds}
                />) 
                .toJSON();
            expect(tree).toMatchSnapshot();

        });
    });

});