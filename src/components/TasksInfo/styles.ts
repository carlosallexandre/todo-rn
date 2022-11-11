import { StyleSheet } from "react-native";
import { colors } from "../../colors";

export const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: "row",
  },
  infoLabel: {
    fontFamily: "Inter_700Bold",
    fontSize: 14,
    lineHeight: 17,
    marginRight: 8,
  },
  infoValue: {
    fontFamily: "Inter_700Bold",
    fontSize: 12,
    lineHeight: 15,
    color: colors.gray[200],
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: colors.gray[400],
    borderRadius: 999,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
