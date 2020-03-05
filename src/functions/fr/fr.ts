import { vec, mat } from "../../types";
import { isVec, isMat } from "../../utils";

function fr(item: vec | mat) {
  return (row?: number) => (column?: number): number | vec | mat => {
    if (isVec(item) && row != null) {
      return item[row];
    }
    if (isMat(item) && (row != null || column != null)) {
      if (column != null && row != null) return item[row][column];
      else if (column == null && row != null) return item[row];
      else if (column != null && row == null) {
        const tempVec: vec = [];
        for (const row of item) tempVec.push(row[column]);
        return tempVec;
      }
    }
    return item;
  };
}

export default fr;
