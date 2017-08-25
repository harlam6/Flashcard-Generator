

module.exports = Cloze;

function Cloze (deletez, full) {
  
  this.deletez = deletez;
  this.full = full;
  this.partial = full.replace(deletez, "...");
  };