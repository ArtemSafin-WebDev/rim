let state = {
    scrollLocked: false
};

function setState(newState) {
    state = {
        ...state,
        ...newState
    };
}

function lockScroll() {
    const { scrollLocked } = state;
    if (scrollLocked) return;

    document.documentElement.classList.add('no-scroll');
    setState({
        scrollLocked: true
    });
}

function unlockScroll() {
    const { scrollLocked } = state;

    if (!scrollLocked) return;

    document.documentElement.classList.remove('no-scroll');
    setState({
        scrollLocked: false
    });
}

export { lockScroll, unlockScroll };
