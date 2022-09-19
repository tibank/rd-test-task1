import { createModal } from './createModal';
import { updateModal } from './updateModal';
import '../../../css/modal.css';

export function showModalNote(note) {
    let modal = document.querySelector('.modal-layer');
    if (!modal) {
        const root = document.getElementById('root');
        modal = createModal(note);
        root.append(modal);
    } else {
        
    }

    modal.style.display = 'flex';
    updateModal(note);
}
