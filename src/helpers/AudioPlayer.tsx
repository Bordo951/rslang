export function loadAudio(audioName: string) {
    const baseUrl = "https://vhoreho-rslang.herokuapp.com/";
    return new Audio(`${baseUrl}${audioName}`);
}

export function loadFailedAudio() {
    return new Audio("audio/faild.mp3");
}