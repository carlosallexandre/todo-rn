import { useState } from "react";
import { FlatList, View } from "react-native";
import { EmptyListTask } from "../../components/EmptyListTask";
import { Logo } from "../../components/Logo";
import { NewTask } from "../../components/NewTask";
import { Task } from "../../components/Task";
import { TasksInfo } from "../../components/TasksInfo";
import { styles } from "./styles";

interface Task {
  id: number;
  name: string;
  isDone?: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const createdTasks = tasks.length;

  const doneTasks = tasks.reduce(
    (acc, task) => (task?.isDone ? acc + 1 : acc),
    0
  );

  function removeTask(id: Task["id"]) {
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
  }

  function toggleTask(id: Task["id"]) {
    setTasks((prevState) => {
      const draftState = [...prevState];
      const taskIndex = draftState.findIndex((task) => task.id === id);
      const [task] = draftState.splice(taskIndex, 1);
      draftState.splice(
        draftState.length - doneTasks + (task?.isDone ? 1 : 0),
        0,
        {
          ...task,
          isDone: !task?.isDone,
        }
      );
      return draftState;
    });
  }

  function addTask(taskName: string) {
    const newTask = {
      id: Date.now(),
      name: taskName,
    };

    setTasks((prevState) => [newTask, ...prevState]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
      </View>

      <View style={styles.input}>
        <NewTask onAddNewTask={addTask} />
      </View>

      <View style={styles.info}>
        <TasksInfo createdTasks={createdTasks} doneTasks={doneTasks} />
      </View>

      <FlatList
        style={styles.list}
        data={tasks}
        renderItem={({ item }) => (
          <Task task={item} onRemove={removeTask} onCheck={toggleTask} />
        )}
        ListEmptyComponent={<EmptyListTask />}
      />
    </View>
  );
}
