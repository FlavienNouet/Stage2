document.addEventListener('DOMContentLoaded', function() {
    // Récupération de l'élément où afficher le calendrier
    var calendarEl = document.getElementById('calendar');
    
    // Initialisation de FullCalendar
    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: ['dayGrid', 'interaction'],  // Plugins nécessaires pour l'affichage du calendrier
        initialView: 'dayGridMonth',  // Vue initiale : affichage par mois
        headerToolbar: {
            left: 'prev,next today',  // Boutons à gauche
            center: 'title',          // Titre du calendrier
            right: 'dayGridMonth,dayGridWeek,dayGridDay'  // Affichage mensuel, hebdomadaire et journalier
        },
        events: [
            {
                title: 'Réunion avec l\'équipe',
                start: '2024-11-15T10:00:00',
                end: '2024-11-15T12:00:00',
                description: 'Réunion pour discuter des projets',
                backgroundColor: '#FF8C00',
                borderColor: '#FF8C00',
            },
            {
                title: 'Rendez-vous avec le client',
                start: '2024-11-18T14:00:00',
                end: '2024-11-18T15:30:00',
                description: 'Réunion avec le client pour discuter des besoins',
                backgroundColor: '#4CAF50',
                borderColor: '#4CAF50',
            }
        ]
    });

    calendar.render();  // Affichage du calendrier
});

// Fonction pour afficher la section active
function showTab(tab) {
    const pages = document.querySelectorAll('.page');
    pages.forEach((page) => {
        if (page.id === tab) {
            page.style.display = 'block'; // Afficher la section active
        } else {
            page.style.display = 'none'; // Masquer les autres sections
        }
    });
}




// Fonction pour gérer l'envoi de messages dans la section chat
function sendMessage() {
    const userMessage = document.getElementById('user-message').value;
    const chatBox = document.getElementById('chat-box');
    
    if (userMessage) {
        chatBox.innerHTML += `<div class="user">${userMessage}</div>`;
        document.getElementById('user-message').value = '';  // Effacer le champ de texte

        // Simuler une réponse du bot
        setTimeout(() => {
            chatBox.innerHTML += `<div class="bot">Désolé, je n'ai pas compris votre message.</div>`;
            chatBox.scrollTop = chatBox.scrollHeight;  // Scroller vers le bas
        }, 1000);
    }
}
