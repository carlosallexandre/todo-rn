import { StyleSheet } from "react-native";
import { colors } from "../../colors";

export const styles = StyleSheet.create({
  container: {
    height: 52,
    flexDirection: "row",
  },
  input: {
    flex: 1,
    height: "100%",
    backgroundColor: colors.gray[500],
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.gray[700],
    color: colors.gray[100],
    paddingHorizontal: 18,
    fontFamily: "Inter_400Regular",
    fontSize: 16,
    lineHeight: 22.4,
  },
  button: {
    marginLeft: 4,
    height: "100%",
    width: 52,
    backgroundColor: colors.blue[700],
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: colors.gray[100],
  },
});
