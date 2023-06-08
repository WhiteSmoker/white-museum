export const formatPokeStat = (stat: string, comma: string) => {
  if (!stat) {
    return "--";
  }
  if (stat.includes("special-")) {
    return stat.replace("special-", "sp" + comma);
  }
  return stat;
};
