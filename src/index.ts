import { MobileApi } from './api/MobileApi';

/**
 * This is the entry point for the application.
 * 
 * It creates an instance of the TypeScript singleton MobileApi
 * and assigns it to a JavaScript global variable MobileApi.
 * 
 * The MobileApi singleton upon creation will instantiate
 * the Viewport singleton which, in turn, creates the rest
 * of the user interface.
 * 
 */

export function start() {
    (window as any).MobileApi = MobileApi.getInstance();
}

/** call the start function */
start();

