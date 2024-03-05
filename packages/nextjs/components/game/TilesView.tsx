import React from "react";
import { Tile } from "~~/helper";

const TilesView = ({ tile }: { tile: Tile }) => {
  const classArray = ["tile"];
  classArray.push("rounded-md bg-primary  text-[#766] max-w-[100px] w-full h-[100px] tile" + tile.value);
  if (!tile.mergedInto) {
    classArray.push(`position_${tile.row}_${tile.column}`);
  }
  if (tile.mergedInto) {
    classArray.push("merged");
  }
  if (tile.isNew()) {
    classArray.push("new");
  }
  if (tile.hasMoved()) {
    classArray.push(`row_from_${tile.fromRow()}_to_${tile.toRow()}`);
    classArray.push(`column_from_${tile.fromColumn()}_to_${tile.toColumn()}`);
    classArray.push("isMoving");
  }
  const classess = classArray.join(" ");
  return <span className={classess}></span>;
};

export default TilesView;
