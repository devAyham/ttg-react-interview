import { Dispatch } from 'redux';
import { ITask } from '../../../interfaces/ITask';

export const TodoActionTypes = {
  addTodo: 'TODO/ADD',
  deleteTodo: 'TODO/REMOVE',
};

export class TodoActions {
  addTodo =
    ({ title, description }: { title: string; description?: string }) =>
    (dispatch: Dispatch, getState: any) => {
      const {
        todo: {
          current: { todos },
        },
      } = getState();

      dispatch({
        type: TodoActionTypes.addTodo,
        payload: [{ id: todos.length, title, description }, ...todos],
      });
    };

  removeTodo = (id: number) => (dispatch: Dispatch, getState: any) => {
    const {
      todo: {
        current: { todos },
      },
    } = getState();

    dispatch({
      type: TodoActionTypes.deleteTodo,
      payload: todos.filter((t: ITask) => t.id !== id),
    });
  };
}
