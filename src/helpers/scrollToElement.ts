export function scrollToElement() {
    const scrollTo = (refEl: any) => {
        refEl.scrollIntoView({ block: 'start', behavior: 'smooth' });
    };

    return scrollTo;
}
