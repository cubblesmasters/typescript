export interface CubxComponentPrototype {
    is: string;

    /**
     * Called when the local DOM of an elementary has been created
     */
    created?: () => void;
    /**
     * Called when the local DOM of an elementary has been initialized
     */
    ready?: () => void;
    /**
     * Called when the HTML element of an elementary has been attached
     * to the DOM
     */
    connected?: () => void;
    /**
     * Called when the HTML element of an elementary has been detached
     * from the DOM
     */
    disconnected?: () => void;
    /**
     * Called when the Cubbles framework is ready to work; that is, when all
     * dependencies are included, all components and all connections are created
     * and the initialization is done.
     */
    contextReady?: () => void;

    /**
     * This function can be implemented for each slot
     * Called when the value of a slot has changed after calling the
     * set[SlotId](value) method. It is useful when you need to perform
     * additional logic after a slot has changed.
     */
    // model[SlotId]Changed? : () => void;
}
