import { StyleSheet } from "react-native";
import { colors } from "../../colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingRight: 8,
    paddingLeft: 12,
    backgroundColor: colors.gray[500],
    borderWidth: 1,
    borderColor: colors.gray[400],
    borderRadius: 8,
    marginBottom: 8,
  },
  checkbox: {
    borderRadius: 999,
    height: 17.45,
    width: 17.45,
  },
  taskName: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
    color: colors.gray[100],
    fontFamily: "Inter_400Regular",
    marginHorizontal: 8,
  },
  taskDoneName: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    color: colors.gray[300],
  },
  deleteButton: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
});
