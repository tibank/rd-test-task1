export function noteClick(event) {
    let divBtn = event.target;

    if (divBtn.tagName !== 'div') {
        divBtn = event.target.closest('div[data-btn]');
        if (!divBtn) {
            console.log(`Something wrong with buttons ${event.target}`);
        }
    }
    const action = divBtn.dataset.btn;
    const noteId = divBtn.dataset.noteid;

    console.log(`id: ${noteId} action: ${action}`);
}
