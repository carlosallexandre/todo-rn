import { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { colors } from "../../colors";
import { Icon } from "../Icon";
import { styles } from "./styles";

interface NewTaskProps {
  onAddNewTask(taskName: string): void;
}

export function NewTask({ onAddNewTask }: NewTaskProps) {
  const [isFocused, setIsFocused] = useState(false);

  const [taskName, setTaskName] = useState("");

  function handleAddNewTask() {
    onAddNewTask(taskName);
    setTaskName("");
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={{
          ...styles.input,
          borderColor: isFocused ? colors.purple[700] : colors.gray[500],
        }}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={colors.gray[300]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={taskName}
        onChangeText={setTaskName}
        onSubmitEditing={handleAddNewTask}
      />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.6}
        onPress={handleAddNewTask}
      >
        <Icon name="plus" />
      </TouchableOpacity>
    </View>
  );
}
