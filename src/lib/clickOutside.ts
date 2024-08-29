// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function clickOutside(node: Node) {

    const handleClick = (event: MouseEvent) => {
        if (!node.contains(event.target as Node) && !event.defaultPrevented) {
            node.dispatchEvent(
                new CustomEvent('click_outside', { bubbles: false, cancelable: false })
            )
        }
    }

    document.addEventListener('click', handleClick, true);

    return {
        destroy() {
            document.removeEventListener('click', handleClick, true);
        }
    }
}
