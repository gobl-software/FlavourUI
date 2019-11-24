const button = (colors, mixins, components) => {
  let outlined, color;

  if (components && components.button) {
    outlined = components.button.outlined;
    color = components.button.color;
  }

  return {
    root: {
      textAlign: "center",
      verticalAlign: "middle",
      border: "2px solid transparent",
      borderRadius: "0.2rem",
      margin: "0.2rem 0.2rem",
      cursor: "pointer",
      padding: "0.35rem 1.25rem"
    },
    normal: {
      color: colors.text.light,
      transition: "all ease-in-out 200ms",
      "&:hover": {
        "box-shadow": mixins.shadows.light
      }
    },
    outlined: props => ({
      color: `${colors[props.color ? props.color : "primary"]}`,
      backgroundColor: "transparent !important",
      borderColor: colors[props.color ? props.color : "primary"],
      transition: "all ease-in-out 200ms",
      "&:hover": {
        color: `${colors.text.light} !important`,
        boxShadow: mixins.shadows.light,
        backgroundColor: `${
          colors[props.color ? props.color : "primary"]
        } !important`
      },
      ...outlined
    }),
    color: props => ({
      backgroundColor: colors[props.color ? props.color : "primary"],
      "&:hover": {
        backgroundColor: colors.darken(
          colors[props.color ? props.color : "primary"],
          0.07
        )
      },
      ...color
    })
  };
};

export default button;
