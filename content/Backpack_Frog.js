class backpack {
  constructor(
    id,
    image,
    name,
    volume,
    color,
    lidOpen,
    dateAquired,
    PockNum,
    strapLength
  ) {
    this.id = id;
    this.image = image;
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.PockNum = PockNum;
    this.strapLength = {
      Right: strapLength,
      Left: strapLength,
    };
    this.lidOpen = lidOpen;
    this.dateAquired = dateAquired;
  }

  updateLength = (rightLength, leftLength) => {
    this.strapLength.Right = rightLength;
    this.strapLength.Left = leftLength;
  };

  updateLid = (lidStatus) => {
    this.lidOpen = lidStatus;
  };

  backpackAge = () => {
    let current = new Date();
    let purchaseDate = new Date(this.dateAquired);
    let conv = 1000 * 360 * 24;
    let difference = current - purchaseDate;
    let tillNow = Math.floor(difference / conv);
    return tillNow;
  };
}

export default backpack;
