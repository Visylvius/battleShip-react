export const checkForNegativePlacement = (remainingLength, coord) => {
  if (coord - remainingLength <= 0) {
    return false;
  }
  return true;
};

export const checkForPointsAbove9 = (remainingLength, coord) => {
  if (coord + remainingLength >= 9) {
    return false;
  }
  return true;
};

export const loopForNegativeCoordinate = (remainingLength, userCoord, lowestCoord, highestCoord ) => {
  let pointsArr = [];
  if (remainingLength <= 2) {
    for (let i = Math.abs(lowestCoord - remainingLength); i < highestCoord + remainingLength; i++) {
      pointsArr.push(i);
    }
    return pointsArr.includes(userCoord);
  } else if (remainingLength >= 3) {
      for (let i = Math.abs(lowestCoord - remainingLength); i <= highestCoord + remainingLength; i++) {
        pointsArr.push(i);
      }
      return pointsArr.includes(userCoord);
  }
}

export const loopForCoordinateOver9 = (remainingLength, userCoord, lowestCoord, highestCoord) => {
  let pointsArr = [];
  if (remainingLength <= 2) {
    for (let i = lowestCoord; i <= 9; i++) {
      pointsArr.push(i);
    }
    return pointsArr.includes(userCoord);
  } else if (remainingLength >= 3) {
      for (let i = lowestCoord - remainingLength; i <= 9; i++) {
        pointsArr.push(i);
      }
      return pointsArr.includes(userCoord);
  }
}

export const checkForDiagonalPlacement =
(previousXCoord, previousYCoord, currentXCoord, currentYCoord) => {
  if (previousXCoord === currentXCoord && previousYCoord !== currentYCoord) {
    return 'y';
  } else if (previousYCoord === currentYCoord && previousXCoord !== currentXCoord) {
    return 'x';
  }
  return false;
};

export const checkForMiddlePoint = (lowestCoord, highestCoord) => {
  let pointsArr = [];
    for (let i = lowestCoord + 1; i < highestCoord; i++) {
      pointsArr.push(i);
    }
  return pointsArr.length === 1;
}

export const placementPointsForLength3orMore = (remainingLength, userCoordinate) => {
  let pointsArr = [];
  for (let i = userCoordinate - remainingLength; i <= userCoordinate + remainingLength; i++) {
    pointsArr.push(i);
  }
  console.log('user points', pointsArr);
  return pointsArr.includes(userCoordinate);
};

export const placementPointsForLength3orLess = (remainingLength, userPoint, lowestCoord, highestCoord) => {
  let pointsArr = [];
  if (checkForMiddlePoint(lowestCoord, highestCoord)) {
    for (let i = lowestCoord - 1; i <= highestCoord + 1; i++) {
      pointsArr.push(i);
    }
  } else {
    for (let i = lowestCoord - remainingLength; i <= highestCoord + remainingLength; i++) {
      pointsArr.push(i);
    }
  }
  return pointsArr.includes(userPoint);
};

export const remainingLength3Placement = (remainingLength, userPoint, lowestCoord, highestCoord) => {
  let pointsArr = [];
  console.log('check for negative placement', checkForNegativePlacement(remainingLength, userPoint))
  console.log('check for number > 9', checkForPointsAbove9(remainingLength, userPoint));
  if (checkForNegativePlacement(remainingLength, userPoint) && checkForPointsAbove9(remainingLength, userPoint)) {
    console.log('line 38 helper-functions');
    return placementPointsForLength3orMore(remainingLength, userPoint);
  } else if (checkForNegativePlacement(remainingLength, userPoint) === false && checkForPointsAbove9(remainingLength, userPoint)) {
      console.log('in if statement for negative placement')
      return loopForNegativeCoordinate(remainingLength, userPoint, lowestCoord, highestCoord);
    } else if (checkForNegativePlacement(remainingLength, userPoint) && checkForPointsAbove9(remainingLength, userPoint) === false) {
        console.log('in if statement of point above 9');
        return loopForCoordinateOver9(remainingLength, userPoint, lowestCoord, highestCoord);
      }
  console.log('pointsArr line 58 helper functions', pointsArr);
  return false;
};

export const remainingLength3orLessPlacement = (remainingLength, userPoint, lowestCoord, highestCoord) => {
  let pointsArr = [];
  console.log('check for negative placement', checkForNegativePlacement(remainingLength, userPoint))
  console.log('check for number > 9', checkForPointsAbove9(remainingLength, userPoint));
  if (checkForNegativePlacement(remainingLength, userPoint) && checkForPointsAbove9(remainingLength, userPoint)) {
    return placementPointsForLength3orLess(remainingLength, userPoint, lowestCoord, highestCoord);
  } else if () {

  }
}
