import { WindowSizeClass } from '../base/WindowSizeClassContext';
export type WindowSizeQuery<T> = Partial<Record<WindowSizeClass, T>> & {
    base: T;
};
export type WindowSize = <T>(query: WindowSizeQuery<T>) => T;
export declare const useWindowSize: () => WindowSize;
