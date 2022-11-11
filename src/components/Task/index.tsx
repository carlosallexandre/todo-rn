import { Text, TouchableOpacity, View } from "react-native";
import CheckBox from "expo-checkbox";
import { Icon } from "../Icon";
import { styles } from "./styles";
import { colors } from "../../colors";

interface TaskProps {
  task: {
    id: number;
    name: string;
    isDone?: boolean;
  };
  onRemove(id: number): void;
  onCheck(id: number): void;
}

export function Task({ task, onCheck, onRemove }: TaskProps) {
  return (
    <View style={styles.container}>
      <CheckBox
        value={task?.isDone ?? false}
        style={styles.checkbox}
        color={task?.isDone ? colors.purple[700] : colors.blue[500]}
        onValueChange={() => onCheck(task.id)}
      />
      <Text
        style={{
          ...styles.taskName,
          ...(task?.isDone ? styles.taskDoneName : {}),
        }}
      >
        {task.name}
      </Text>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => onRemove(task.id)}
      >
        <Icon name="trash" />
      </TouchableOpacity>
    </View>
  );
}
