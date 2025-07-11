import { endsUpInValidPosition } from "../utilities/endsUpInValidPosition";
import useMapStore from "./map";
import useGameStore from "./game";

export const state = {
  currentRow: 0,
  currentTile: 0,
  movesQueue: [],
  ref: null,
};

export function queueMove(direction) {
  const isValidMove = endsUpInValidPosition(
    { rowIndex: state.currentRow, tileIndex: state.currentTile },
    [...state.movesQueue, direction]
  );

  if (!isValidMove) return;

  state.movesQueue.push(direction);
}

export function stepCompleted() {
  const direction = state.movesQueue.shift();

  if (direction === "forward") state.currentRow += 1;
  if (direction === "backward") state.currentRow -= 1;
  if (direction === "left") state.currentTile -= 1;
  if (direction === "right") state.currentTile += 1;

  if (state.currentRow === useMapStore.getState().rows.length - 10) {
    useMapStore.getState().addRows();
  }

  useGameStore.getState().updateScore(state.currentRow);
}

export function setRef(ref) {
  state.ref = ref;
}

export function reset() {
  state.currentRow = 0;
  state.currentTile = 0;
  state.movesQueue = [];

  if (!state.ref) return;
  state.ref.position.x = 0;
  state.ref.position.y = 0;
  state.ref.children[0].rotation.z = 0;
}