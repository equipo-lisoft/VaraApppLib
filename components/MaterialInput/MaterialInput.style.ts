import { StyleSheet } from "react-native";

export const MaterialInputStyle = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 16,
    color: "#000000",
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  input: {
    height: 50,
    flex: 1,
    fontSize: 15,
    marginLeft: 10,
    color: "#000",
  },
  helperText: {
    fontSize: 14,
    color: "#8B0000",
    marginTop: 5,
  },
});
