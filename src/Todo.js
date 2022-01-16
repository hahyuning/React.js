import { 
    Checkbox, 
    InputBase, 
    ListItem, 
    ListItemSecondaryAction, 
    ListItemText,
    IconButton 
} from "@material-ui/core";
import React from "react";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { item: props.item, readOnly: true };
        this.delete = props.delete;
    }

    deleteEventHandler = () => {
        this.delete(this.state.item);
    }

    offReadOnlyMode = () => {
        console.log("Event", this.state.readOnly);
        this.setState({ readOnly: false }, () => {
            console.log("ReadOnly?", this.state.readOnly)
        })
    }

    enterKeyEventHandler = (evt) => {
        if (evt.key === "Enter") {
            this.setState({ readOnly: true });
        }
    }

    editEventHandler = (evt) => {
        const thisItem = this.state.item;
        thisItem.title = evt.target.value;
        this.setState({ item: thisItem });
    }

    checkboxEventHandler = () => {
        const thisItem = this.state.item;
        thisItem.done = !thisItem.done;
        this.setState({ item: thisItem });
    }

    render() {
        const item = this.state.item;
        return (
            <ListItem>
                <Checkbox checked={item.done} onChange={this.checkboxEventHandler} />
                <ListItemText>
                    <InputBase
                        inputProps={{ 
                            "aria-label": "naked",
                            readOnly: this.state.readOnly,
                        }}
                        onClick={this.offReadOnlyMode}
                        onKeyPress={this.enterKeyEventHandler}
                        onChange={this.editEventHandler}
                        type="text"
                        id={item.id}
                        name={item.id}
                        value={item.title}
                        multiline={true}
                        fullWidth={true}
                    />
                </ListItemText>

                <ListItemSecondaryAction>
                    <IconButton 
                        aria-label="Delete Todo"
                        onClick={this.deleteEventHandler}>
                        <DeleteOutlined />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}

export default Todo;