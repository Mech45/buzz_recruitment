import * as translator from "../dictionnaries/translator";
import {__Translator} from "../dictionnaries/dict_interfaces";

export class Orchestra {
    private rythmic = 3;
    private spaceCharacter = " ";

    constructor(private partition :number[][]){}

    public playPartition() {
        let masterPartition = this.getPartition();
        let stringifyPartition = "";
        for (let masterIndex = 0; masterIndex < 9; masterIndex += this.rythmic) {
            for (let partition of masterPartition) {
                stringifyPartition += this.generateSequence(partition, masterIndex);
            }
            stringifyPartition += "\n";
        }
        console.log(stringifyPartition);
    }

    public getPartition() :number[][] {
        return this.partition;
    }
    private generateSequence(partiton, index) :string{
        let sequence = "";
        let slicedPartition = partiton.slice(index, index + 3);
        for (let note of slicedPartition) {
            sequence += this.translateNote(note);
        }
        return this.addingSpace(sequence);
    }

    private translateNote(note: number) :string {
        let translator = this.fetchTranslator();
        return translator[note];
    }

    private fetchTranslator() :__Translator {
        return translator
    }

    private addingSpace(sequence :string) :string {
        return sequence += this.spaceCharacter;
    }
}