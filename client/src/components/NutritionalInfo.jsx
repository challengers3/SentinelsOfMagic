import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class NutritionalInfo extends React.Component {
  constructor (props) {
    super (props);

    this.state = { 
      open: false,
    }; 
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.props.clickFoodName();
  }

  render() {
    const toggle = this.props.toggle;
    const actions = [
      <FlatButton
        label="Okay"
        primary={true}
        onTouchTap={this.props.clickFoodName}
      />
    ];

    return (
      <div>
        <Dialog
          title="Nutritional Info"
          actions={actions}
          open={toggle}
          onRequestClose={this.handleClose}
        >

          <div>
            <h2>Contributors, aka the awesome people that make this thing</h2>
            <p><a href="mailto:phongtlam@gmail.com">Phong Lam</a>: Awesome</p>
            <p><a href="mailto:alana.turangan@gmail.com">Alana Turangan</a>: Awesome</p>
            <p><a href="mailto:jonathan.lavin.bradshaw@gmail.com">Jonathan Bradshaw</a>: Awesome</p>
          </div>
        </Dialog>
      </div>
    );
  }
}

export default NutritionalInfo;