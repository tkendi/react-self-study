import React, { Component } from "react";
import { connect } from "react-redux";
import InserForm from "../components/notes/InsertForm";
import NoteWrapper from "../components/notes/NoteWrapper";

import * as noteActions from "../store/modules/notes";
import InsertForm from "../components/notes/InsertForm";

export class NoteContainer extends Component {
  handleChange = ({ value }) => {
    const { changeNoteInput } = this.props;
    changeNoteInput({ value });
  };

  render() {
    const { noteInput } = this.props;
    const { handleChange } = this;
    return (
      <div>
        <NoteWrapper>
          <InsertForm noteInput={noteInput} onChangeInput={handleChange} />
        </NoteWrapper>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  noteInput: state.notes.noteInput,
});

const mapDispatchToProps = (dispatch) => {
  return {
    changeNoteInput: ({ value }) => {
      dispatch(noteActions.changeNoteInput({ value }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteContainer);
