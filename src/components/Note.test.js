import React from 'react';
import {mount} from 'enzyme';
import Note from './Note'; 

//https://www.youtube.com/watch?v=aSQ8v9JH5C8&t=161s

const props = {note: {text: 'test note'}}

describe('Note', () => {
    let note = mount(<Note {...props} />);
    
    it('renders the note text', () =>{       
       expect(note.find('p').text()).toEqual(props.note.text);
    });      
});