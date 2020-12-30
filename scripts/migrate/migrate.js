// Example of how to import compendium content.
async function importBwTags(content) {
  // Reference a Compendium pack by it's callection ID
  const pack = game.packs.find(p => p.collection === `brokenworlds.tags`);

  // Create temporary Actor entities which impose structure on the imported data
  Item.createMany(content, { temporary: true }).then(items => {
    // Save each temporary Actor into the Compendium pack
    for (let i of items) {
      pack.importEntity(i);
      console.log(`Imported Item ${i.name} into Compendium pack ${pack.collection}`);
    }
  });
}

// Load an external JSON data file which contains data for import
const content = [
  { "name": "+1 ongoing", "type": "tag" },
  { "name": "-1 ongoing", "type": "tag" },
  { "name": "+1 forward", "type": "tag" },
  { "name": "-1 forward", "type": "tag" },
  { "name": "Intimate", "type": "tag" },
  { "name": "Hand", "type": "tag" },
  { "name": "Close", "type": "tag" },
  { "name": "Far", "type": "tag" },
  { "name": "Extreme", "type": "tag" },
  { "name": "Armor Piercing", "type": "tag" },
  { "name": "Area", "type": "tag" },
  { "name": "Brutal", "type": "tag" },
  { "name": "Destructive", "type": "tag" },
  { "name": "Focus", "type": "tag" },
  { "name": "Fine", "type": "tag" },
  { "name": "Forceful", "type": "tag" },
  { "name": "Hidden", "type": "tag" },
  { "name": "Infinite", "type": "tag" },
  { "name": "Light", "type": "tag" },
  { "name": "Lingering", "type": "tag" },
  { "name": "Loading", "type": "tag" },
  { "name": "Messy", "type": "tag" },
  { "name": "Potent", "type": "tag" },
  { "name": "Precise", "type": "tag" },
  { "name": "Thrown", "type": "tag" },
  { "name": "Unwieldy", "type": "tag" },
  { "name": "Vicious", "type": "tag" },
  { "name": "Reeling", "type": "tag" },
  { "name": "Crippled", "type": "tag" },
  { "name": "Stunned", "type": "tag" },
  { "name": "Evasive", "type": "tag" },
  { "name": "Unstoppable", "type": "tag" },
  { "name": "Huge", "type": "tag" },
  { "name": "Group", "type": "tag" }
];

importBwTags(content);