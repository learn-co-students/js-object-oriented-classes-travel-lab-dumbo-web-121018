let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

class Driver{
  constructor(name,startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year){
    let startingYear = this.startDate.getFullYear()
    let endingYear = new Date(year,0,1).getFullYear()
    let yearsExp = endingYear-startingYear
    return yearsExp
  }
}

class Route{
  constructor(beginningLocation,endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  aveNumber(avenue){
    return eastWest.indexOf(avenue)
  }

  blocksTravelled(){
    let horizontalDistanceTraveled = this.aveNumber(this.endingLocation.horizontal) -this.aveNumber(this.beginningLocation.horizontal);

    let verticalDistanceTraveled =
    this.endingLocation.vertical -this.beginningLocation.vertical;

    return Math.abs(horizontalDistanceTraveled)+ Math.abs(verticalDistanceTraveled);
  }

  estimatedTime(peak){
    if (peak){
      return (this.blocksTravelled()/2)
    }else {
      return (this.blocksTravelled()/3)
    }
  }
}
