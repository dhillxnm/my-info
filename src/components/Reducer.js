export const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        if (!action.payload) return state;
        return [...state, { id: Date.now(), text: action.payload, completed: false, createdAt: new Date() }];
      case 'DELETE_TASK':
        return state.filter(task => task.id !== action.payload);
      case 'UPDATE_TASK':
        return state.map(task => {
          if (task.id === action.payload.id) {
            return { ...task, text: action.payload.text, createdAt: new Date() };
          }
          return task;
        });
      case 'TOGGLE_COMPLETE':
        return state.map(task => {
          if (task.id === action.payload) {
            return { ...task, completed: !task.completed };
          }
          return task;
        });
      default:
        return state;
    }
  };
  