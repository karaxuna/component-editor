Handling events

1. Use arrow functions, it will preserve context (this);
2. Start event handler name with `handle`;
3. Separate handler code with function that does main action;

jsx:

    <button type="button" onClick={this.handleCreateTaskButtonClick}>Create task</button>

component:

    handleCreateTaskButtonClick = () => {
        this.createTask();
    }

    createTask() {
        // ...
    }