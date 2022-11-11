import { StyleSheet } from "react-native";
import { colors } from "../../colors";

export const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderColor: colors.gray[400],
    paddingVertical: 48,
    alignItems: "center",
  },
  strongText: {
    marginTop: 16,
    fontFamily: "Inter_700Bold",
    fontSize: 14,
    lineHeight: 19.6,
    color: colors.gray[300],
  },
  regularText: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    lineHeight: 19.6,
    color: colors.gray[300],
  },
});
