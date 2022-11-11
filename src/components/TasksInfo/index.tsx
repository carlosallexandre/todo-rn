import { Text, View } from "react-native";
import { colors } from "../../colors";
import { styles } from "./styles";

interface TaskInfo {
  color: string;
  name: string;
  value?: number;
}

function TaskInfo({ color, name, value = 0 }: TaskInfo) {
  return (
    <View style={styles.infoContainer}>
      <Text style={{ color, ...styles.infoLabel }}>{name}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );
}

interface TasksInfoProps {
  createdTasks: number;
  doneTasks: number;
}

export function TasksInfo({ createdTasks, doneTasks }: TasksInfoProps) {
  return (
    <View style={styles.container}>
      <TaskInfo color={colors.blue[500]} name="Criadas" value={createdTasks} />

      <TaskInfo
        color={colors.purple[500]}
        name="Concluídas"
        value={doneTasks}
      />
    </View>
  );
}
