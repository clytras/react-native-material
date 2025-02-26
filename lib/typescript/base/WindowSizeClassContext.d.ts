import React from 'react';
export type WindowSizeClass = 'base' | 'sm' | 'md' | 'lg' | 'xl';
export type WindowSizes = Record<WindowSizeClass, number>;
export declare const defaultWindowSizes: WindowSizes;
export interface WindowSizeClassProviderProps {
    windowSizes?: WindowSizes;
}
export declare const WindowSizeClassContext: React.Context<WindowSizeClass>;
export declare const useWindowSizeClass: () => WindowSizeClass;
export declare const WindowSizeClassProvider: React.FC<WindowSizeClassProviderProps>;
