import {MasterPiece} from "./src/conductorHelpers/masterPiece";
import {Orchestra} from "./src/conductorHelpers/orchestra";

const masterPiece = new MasterPiece("01234567890074523");
const masterPartition = masterPiece.generateFullPartition();
const orchestra = new Orchestra(masterPartition);

orchestra.playPartition();