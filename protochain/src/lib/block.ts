import CryptoJS from 'crypto-js';
import Validation from './validation.js';

/**
 * Block class
 */
export default class Block {
    index: number;
    timestamp: number;
    hash: string;
    previousHash: string;
    data: string;

    /**
     * Comentarios
     * @param block The block data
     */
    constructor(block?: Block){
        this.index = block?.index || 0 ;
        this.timestamp = block?.timestamp || Date.now();
        this.previousHash = block?.previousHash || "";
        this.data = block?.data || "" ;
        this.hash = block?.hash || this.getHash();
    }

    getHash(): string {
        return CryptoJS.SHA256(this.index + this.data + this.timestamp + this.previousHash).toString();
    }

    /**
     * Validates the block
     * @returns Returns if the block is valid
     */

    isValid(previousHash: string, previousIndex: number): Validation{
        if(previousIndex !== this.index - 1) return new Validation(false, "Invalid index.");
        if (this.hash !== this.getHash()) return new Validation(false, "Invalid hash.");
        if (!this.data) return new Validation(false, "Invalid data.");
        if (this.timestamp < 1) return new Validation(false, "Invalid timestamp.");
        if (this.previousHash !== previousHash) return new Validation(false, "Invalid previous hash.");
        return new Validation();
    }

}