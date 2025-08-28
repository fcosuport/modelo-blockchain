/**
 * Validation class
 */
export default class Validation {
    success: boolean;
    message: string;

    /**
     * creates a new validation object
     * @param sucess if the validation was successful
     * @param message the validaion message, if validation failed
     */

    constructor(sucess: boolean = true, message: string = "") {
        this.success = sucess;
        this.message = message;
    }
}