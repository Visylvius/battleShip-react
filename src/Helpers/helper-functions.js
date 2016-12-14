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

export const checkForDiagonalPlacement =
(previousXCoord, previousYCoord, currentXCoord, currentYCoord) => {
  if (previousXCoord === currentXCoord && previousYCoord !== currentYCoord) {
    return 'y';
  } else if (previousYCoord === currentYCoord && previousXCoord !== currentXCoord) {
    return 'x';
  }
  return false;
};

export const placementPointsForLength3orMore = (remainingLength, userCoordinate) => {
  let pointsArr = [];
  for (let i = userCoordinate - remainingLength; i <= userCoordinate + remainingLength; i++) {
    pointsArr.push(i);
  }
  console.log('user points', pointsArr);
  return pointsArr.includes(userCoordinate);
};

export const remainingLength3Placement = (remainingLength, userPoint) => {
  let pointsArr = [];
  console.log('check for negative placement', checkForNegativePlacement(remainingLength, userPoint))
  console.log('check for number > 9', checkForPointsAbove9(remainingLength, userPoint));
  if (checkForNegativePlacement(remainingLength, userPoint)) {
    if (checkForPointsAbove9(remainingLength, userPoint)) {
      console.log('line 38 helper-functions');
      return placementPointsForLength3orMore(remainingLength, userPoint);
    }
  } else if (checkForNegativePlacement(remainingLength, userPoint) === false) {
      if (checkForPointsAbove9(remainingLength, userPoint)) {
        for (let i = Math.abs(remainingLength - userPoint); i <= remainingLength + userPoint; i++) {
          pointsArr.push(i);
        }
        console.log('line 45 helper-functions', pointsArr);
        return pointsArr.includes(userPoint);
    }
  } else if (checkForNegativePlacement(remainingLength, userPoint)) {
      if (checkForPointsAbove9(remainingLength, userPoint) === false) {
        for (let i = userPoint - remainingLength; i <= 9; i++) {
          pointsArr.push(i);
        }
        console.log('line 53 helper-functions', pointsArr);
        return pointsArr.includes(userPoint);
      }
  }
  console.log('pointsArr line 58 helper functions', pointsArr);
  return false;
};
