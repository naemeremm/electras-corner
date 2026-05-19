const connectors = {
  j1772: {
    visual: "T1",
    name: "Type 1 (J1772)",
    regionMain: "North America",
    summary: "The Type 1 connector, also known as J1772, is the standard for AC Level 1 and Level 2 charging in North America.",
    region: "North America",
    regionNote: "Primarily used in the U.S. and Canada.",
    type: "AC Level 1 & Level 2",
    typeNote: "Not intended for DC fast charging.",
    power: "Up to 7.4 kW (Level 2)",
    powerNote: "120V Level 1 / 240V Level 2.",
    vehicles: "Nissan LEAF, Chevy Bolt, older Ford, Toyota Prius Prime, and more",
    facts: [
      "5-pin connector: 2 power, 1 ground, 2 communication.",
      "Used for home, workplace, and public AC charging.",
      "Often paired with CCS1 for DC fast charging."
    ]
  },
  nacs: {
    visual: "N",
    name: "NACS",
    regionMain: "North America",
    summary: "NACS is Tesla’s connector design and an emerging standard across North American charging networks.",
    region: "North America",
    regionNote: "Used widely by Tesla and expanding across North America.",
    type: "AC + DC Fast Charging",
    typeNote: "Supports both everyday charging and fast charging.",
    power: "Up to 250 kW+",
    powerNote: "Power varies by vehicle and charging station.",
    vehicles: "Tesla Model S, 3, X, Y; Ford, Rivian, GM, and others adopting NACS",
    facts: [
      "Compact connector compared with many other fast charging designs.",
      "NACS adoption accelerated across North America after major automaker announcements.",
      "Adapters and native ports are both part of the transition period."
    ]
  },
  ccs1: {
    visual: "C1",
    name: "CCS1",
    regionMain: "North America",
    summary: "CCS1 combines the J1772 AC connector with two added DC pins for fast charging.",
    region: "North America",
    regionNote: "Common across many public DC fast charging stations.",
    type: "AC + DC Fast Charging",
    typeNote: "Supports AC charging and DC fast charging.",
    power: "50 kW – 350 kW",
    powerNote: "Higher power depends on charger and vehicle capability.",
    vehicles: "Ford Mustang Mach-E, Rivian, Chevy Bolt, Hyundai IONIQ 5, BMW i4, and more",
    facts: [
      "CCS stands for Combined Charging System.",
      "The lower two pins are used for DC fast charging.",
      "It has been a major North American non-Tesla DC fast charging connector."
    ]
  },
  ccs2: {
    visual: "C2",
    name: "CCS2",
    regionMain: "Europe",
    summary: "CCS2 combines the Type 2 connector format with additional DC pins for fast charging.",
    region: "Europe and global markets",
    regionNote: "Widely used across Europe and several other markets.",
    type: "AC + DC Fast Charging",
    typeNote: "Supports AC and DC charging.",
    power: "50 kW – 350 kW",
    powerNote: "Depends on site and vehicle capability.",
    vehicles: "Volkswagen ID series, BMW, Mercedes-Benz, Hyundai/Kia, and many European EVs",
    facts: [
      "CCS2 is closely tied to Europe’s Type 2 AC charging ecosystem.",
      "It is one of the most important global DC fast charging standards.",
      "It helps show why connector education needs a global lens."
    ]
  },
  chademo: {
    visual: "CH",
    name: "CHAdeMO",
    regionMain: "Japan",
    summary: "CHAdeMO is an early DC fast charging standard developed in Japan and used by several legacy EV models.",
    region: "Japan and legacy global networks",
    regionNote: "Still found on some older public chargers.",
    type: "DC Fast Charging",
    typeNote: "Primarily used for DC fast charging.",
    power: "Often 50 kW",
    powerNote: "Higher versions exist, but many public units are lower power.",
    vehicles: "Nissan LEAF, Mitsubishi Outlander PHEV, and some older EVs",
    facts: [
      "CHAdeMO was one of the earliest widely deployed DC fast charging systems.",
      "It is declining in many markets but still matters for legacy education.",
      "It is important for understanding how charging standards evolve over time."
    ]
  },
  gbt: {
    visual: "GB",
    name: "GB/T",
    regionMain: "China",
    summary: "GB/T is the major EV charging connector standard used in China, the world’s largest EV market.",
    region: "China",
    regionNote: "Used across China’s EV charging ecosystem.",
    type: "AC and DC standards exist",
    typeNote: "GB/T includes both AC and DC connector standards.",
    power: "Varies by application",
    powerNote: "Power depends on AC/DC use case and infrastructure.",
    vehicles: "BYD, SAIC, Geely, NIO, XPeng, and many China-market EVs",
    facts: [
      "GB/T shows why EV infrastructure education must be global.",
      "China’s EV market makes this connector family highly significant.",
      "It is a key standard for understanding international EV adoption."
    ]
  },
  type2: {
    visual: "T2",
    name: "Type 2 (Mennekes)",
    regionMain: "Europe",
    summary: "Type 2 is the common AC charging connector across Europe and many other markets.",
    region: "Europe and global markets",
    regionNote: "Common across European public and private AC charging.",
    type: "AC Charging",
    typeNote: "Supports single-phase and three-phase AC charging.",
    power: "Varies by AC setup",
    powerNote: "Can support higher AC power where three-phase power is available.",
    vehicles: "Many European EVs and global models",
    facts: [
      "Type 2 is also known as the Mennekes connector.",
      "It is central to Europe’s AC charging ecosystem.",
      "Regional electrical systems influence connector design."
    ]
  }
};

const nodes = document.querySelectorAll(".node");

function updateConnector(key) {
  const data = connectors[key];
  document.getElementById("visual").textContent = data.visual;
  document.getElementById("name").textContent = data.name;
  document.getElementById("region-main").textContent = data.regionMain;
  document.getElementById("summary").textContent = data.summary;
  document.getElementById("region").textContent = data.region;
  document.getElementById("region-note").textContent = data.regionNote;
  document.getElementById("type").textContent = data.type;
  document.getElementById("type-note").textContent = data.typeNote;
  document.getElementById("power").textContent = data.power;
  document.getElementById("power-note").textContent = data.powerNote;
  document.getElementById("vehicles").textContent = data.vehicles;

  const facts = document.getElementById("facts");
  facts.innerHTML = "";
  data.facts.forEach((fact) => {
    const li = document.createElement("li");
    li.textContent = fact;
    facts.appendChild(li);
  });

  nodes.forEach((node) => {
    node.classList.toggle("active", node.dataset.connector === key);
  });
}

nodes.forEach((node) => {
  node.addEventListener("click", () => updateConnector(node.dataset.connector));
});
