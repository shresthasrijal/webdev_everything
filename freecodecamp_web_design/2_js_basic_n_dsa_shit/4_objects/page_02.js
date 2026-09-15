const cargoManifest = {
  containerId: 1,
  destination: "Monterey, California, USA",
  weight: 831,
  unit: "lb",
  hazmat: false,
};

function normalizeUnits(manifest) {
  const normalizedCargo = { ...manifest };

  if (manifest.unit === "lb") {
    normalizedCargo.weight = manifest.weight * 0.45;
    normalizedCargo.unit = "kg";
  }

  return normalizedCargo;
}

function validateManifest(manifest) {
  const cargo = { ...manifest };
  const errors = {};

  if (!cargo.hasOwnProperty("containerId")) {
    errors.containerId = "Missing";
  } else if (
    typeof cargo.containerId !== "number" ||
    !Number.isInteger(cargo.containerId) ||
    cargo.containerId <= 0
  ) {
    errors.containerId = "Invalid";
  }

  if (!cargo.hasOwnProperty("destination")) {
    errors.destination = "Missing";
  } else if (
    typeof cargo.destination !== "string" ||
    cargo.destination.trim().length === 0
  ) {
    errors.destination = "Invalid";
  }

  if (!cargo.hasOwnProperty("weight")) {
    errors.weight = "Missing";
  } else if (
    typeof cargo.weight !== "number" ||
    Number.isNaN(cargo.weight) ||
    cargo.weight <= 0
  ) {
    errors.weight = "Invalid";
  }

  if (!cargo.hasOwnProperty("unit")) {
    errors.unit = "Missing";
  } else if (cargo.unit !== "kg" && cargo.unit !== "lb") {
    errors.unit = "Invalid";
  }

  if (!cargo.hasOwnProperty("hazmat")) {
    errors.hazmat = "Missing";
  } else if (typeof cargo.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return errors;
}

function processManifest(manifest) {
  const validation = validateManifest(manifest);

  if (Object.keys(validation).length === 0) {
    const normalizedCargo = normalizeUnits(manifest);

    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${normalizedCargo.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validation);
  }
}