import { Text, View } from "react-native";
import { Icon } from "../Icon";
import { styles } from "./styles";

export function EmptyListTask() {
  return (
    <View style={styles.container}>
      <Icon name="clipboard" />
      <Text style={styles.strongText}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.regularText}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
