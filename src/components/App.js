import React, { Component } from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';
import Note from './Note';
import {bake_cookie, read_cookie, delete_cookie} from 'sfcookies';

const cookie_key = 'NOTES';

class App extends Component {
  constructor(){
    super();
    this.state = {
      text: '',
      notes: []
    }
  }

  componentDidMount(){    
    this.setState({ notes: read_cookie(cookie_key) });
  }

  onhandleSubmit(){
    const localNotes = this.state.notes;
    const newNote = {text: this.state.text};
    localNotes.push(newNote);
    this.setState({notes: localNotes});
    bake_cookie(cookie_key, this.state.notes);
  }

  onclearNote(){
    delete_cookie(cookie_key);
    this.setState({ notes: [] });
  }
  
  render() {
    return (
      <div className="container">
        <h2>Note to Self</h2>
        <Form inline={true}>
          <FormControl onChange ={event => {this.setState({text: event.target.value})}} />
          {' '}
          <Button onClick={() => this.onhandleSubmit()}>Submit</Button>
        </Form>
        {
          this.state.notes.map((iterNote, index) => {
            return(
              <Note key={index} note={iterNote} />
            )
          })
        }
        <hr/>
        <Button onClick={() => this.onclearNote()}>Clear Note</Button>
      </div>
    );
  }
}

export default App;
