import * as partition from '../dictionnaries/partitions';

export class MasterPiece {
    listenerInputSplited :string[] = [];
    constructor(listenerInput :string) {
        this.listenerInputSplited = this.splitListenerPartition(listenerInput);
    }

    public generateFullPartition() :number[][] {
        let listenerInput = this.getListenerInput();
        let partition = this.fetchTranslator();
        let noteToRead: number[][] = [];
        listenerInput.forEach((note, index) => {
            let noteCasted = this.castToInteger(note);
            if (partition.hasOwnProperty(noteCasted)) {
                noteToRead[index] = partition[noteCasted]
            }
        });
        return noteToRead;
    }

    private fetchTranslator() :any[number] {
        return partition
    }

    private getListenerInput() {
        return this.listenerInputSplited
    }

    private splitListenerPartition(listenerInput :string) :string[] {
        return listenerInput.split("");
    }

    private castToInteger(inputToCast: string) :number {
        let castedValue;
        try {
            //TODO handle differently this NaN results
            castedValue = parseInt(inputToCast);
        } catch (error) {
            console.error(error);
        }
        return castedValue
    }
}

