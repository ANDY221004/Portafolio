document.getElementById('agregar-btn').onclick = function() {
    const tareaTexto = document.getElementById('nueva-tarea').value;
    if (tareaTexto) {
        const li = document.createElement('li');
        li.textContent = tareaTexto;

        const completarBtn = document.createElement('button');
        completarBtn.textContent = 'Completar';
        completarBtn.onclick = function() {
            li.removeChild(completarBtn);
            li.removeChild(deleteIcon);
            
            const checkIcon = document.createElement('span');
            checkIcon.innerHTML = '✓';
            checkIcon.className = 'check-icon';
            
            li.appendChild(checkIcon);
            document.getElementById('tareas-cumplidas').appendChild(li);
        };

        const deleteIcon = document.createElement('button');
        deleteIcon.innerHTML = '×';
        deleteIcon.className = 'delete-icon';
        deleteIcon.onclick = function() {
            li.remove();
        };

        li.appendChild(completarBtn);
        li.appendChild(deleteIcon);
        document.getElementById('lista-tareas').appendChild(li);
        document.getElementById('nueva-tarea').value = '';
    }
};