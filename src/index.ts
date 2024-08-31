import { DesktopApi } from './api/DesktopApi';

/**
 * This is the entry point for the application.
 * 
 * It creates an instance of the TypeScript singleton DesktopApi
 * and assigns it to a JavaScript global variable DesktopApi.
 * 
 * The DesktopApi singleton upon creation will instantiate
 * the Viewport singleton which, in turn, creates the rest
 * of the user interface.
 * 
 */

export * from './api/index';
export * from './constants/index';
export * from './data/index';
export * from './handlers/index';
export * from './interfaces/index';
export * from './qx/index';
export * from './server/index';
export * from './session/index';
export * from './ui/index';
export * from './util/index';

export function start() {
    (window as any).DesktopApi = DesktopApi.getInstance();
}

/** call the start function */
start();

