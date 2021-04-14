export const guessWord = (e:any, state: any, handleSuccess: any, handleFailed: any) => {
    if (state.verifiableWords === e.target.attributes[1].value) {
        handleSuccess()
    } else if (state.verifiableWords !== e.target.attributes[1].value) {
        handleFailed();
    }
};