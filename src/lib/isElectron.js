

export function isElectron() {
    return window.navigator.userAgent.toLowerCase().indexOf("electron") > -1;
}
