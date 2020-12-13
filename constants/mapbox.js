export const defaultMapbox = {
  year: [
    "match",
    ["get", "year"],
    1960,
    "#FFF200",
    1990,
    "#FC6600",
    2000,
    "#FC0FCD",
    2015,
    "#3BB143",
    "#7C4700"
  ],
  diameter: [
    "match",
    ["get", "diameter"],
    4,
    "#B44357",
    6,
    "#7C47FF",
    8,
    "#BB1430",
    12,
    "#FC0FCD",
    20,
    "#FC6600",
    30,
    "#FFF200",
    "#7C4700"
  ],
  material_type_code: [
    "match",
    ["get", "material_type_code"],
    0,
    "#F6BD60",
    1,
    "#F7EDE2",
    2,
    "#F5CAC3",
    3,
    "#B3A490",
    4,
    "#F28462",
    "#7C4700"
  ]
};
