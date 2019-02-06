class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(endDate) {
    return endDate - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  };

  blocksTravelled() {

    let eastWest = [
      "1st Avenue",
      "2nd Avenue",
      "3rd Avenue",
      "Lexington Avenue",
      "Park",
      "Madison Avenue",
      "5th Avenue"
    ];

    let i = 1;
    let startHoriz = 0;
    let endHoriz = 0;

    eastWest.forEach(avenue => {
      if (avenue === this.beginningLocation.horizontal) {
        startHoriz = i;
      };

      if (avenue === this.endingLocation.horizontal) {
        endHoriz = i;
      }
      i++;
    });

    const totalHoriz = Math.abs((startHoriz) - (endHoriz));
    const totalVert = Math.abs((this.beginningLocation.vertical) - (this.endingLocation.vertical));
    const totalBlocks = totalVert + totalHoriz;
    return totalBlocks;
  }

  estimatedTime(peak) {
    const blocks = this.blocksTravelled();
    let minutes;
    if (peak) {
      minutes = blocks / 2;
    } else {
      minutes = blocks / 3;
    }
    return minutes;
  }
}
