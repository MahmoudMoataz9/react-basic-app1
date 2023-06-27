import React from "react";
import { Button, Grid, IconButton, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export class Old extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //the reset array and initial array part i didn't understand
      value: "",
      list: ["a", "b", "c"],
    };
  }
  onChangeValue = (event) => {
    this.setState({ value: event.target.value });
  };

  onAddItem = () => {
    // if item included, don't add cuz weird error (will find a way later to add to counter)
    if (this.state.list.includes(this.state.value)) {
      this.setState({
        value: "",
      });
    } else {
      this.setState({
        list: [this.state.value].concat(this.state.list),
        value: "",
      });
    }
  };

  onUpdateItem = (i) => {
    this.setState({
      list: this.state.list.map((item, j) => {
        if (j === i) {
          return this.state.value;
        } else {
          return item;
        }
      }),
    });
  };

  onRemoveItem = (i) => {
    this.setState({
      list: this.state.list.filter((item, j) => i !== j),
    });
  };

  render() {
    return (
      <Grid container display="flex" background="blue">
        <Grid xs={12} item container>
          Here is a list of old services!
        </Grid>
        <Grid xs={12} item>
          <TextField
            variant="standard"
            value={this.state.value}
            onChange={this.onChangeValue}
          />
          <Button
            type="button"
            onClick={this.onAddItem}
            disabled={!this.state.value}
          >
            Add
          </Button>
        </Grid>
        {this.state.list.map((item, index) => {
          return (
            <Grid item xs={2}>
              {item}
              <Button
                onClick={() => this.onUpdateItem(index)}
                type="button"
                disabled={!this.state.value}
              >
                Update
              </Button>
              <IconButton
                onClick={() => {
                  this.onRemoveItem(index);
                }}
                aria-label="delete"
              >
                <DeleteIcon />
              </IconButton>
            </Grid>
          );
        })}
      </Grid>
    );
  }
}
