import { StyleSheet } from "react-native";
import { colors } from "../../colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.gray[700],
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 70,
  },
  input: {
    marginTop: -26,
    paddingHorizontal: 24,
  },
  info: {
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  list: {
    marginTop: 20,
    flex: 1,
    paddingHorizontal: 24,
  },
});
