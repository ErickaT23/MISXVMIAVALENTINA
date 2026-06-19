const config = {
    event: {
        defaultEventId: "misxv-mia-valentina-2026",
        eventIdParam: "eventId",
        legacyFallback: {
            read: false,
            write: false,
            subscribe: false
        }
    },
    admin: {
        adminKey: "twodesign123",
        keyParam: "key",
        legacyKeyParam: "admin"
    },
    seo: {
        titulo: "Mía Valentina | Mis XV 2026",
        descripcion: "Mis Quince Años de Mía Valentina - 1 de agosto, 2026",
        autor: "Two Design"
    },
    pareja: {
        nombres: "Mía Valentina",
        fecha: "01-08-2026",
        fechaVisible: "1 · 08 · 2026"
    },
    musica: {
        titulo: "Nuestra Canción",
        archivo: "audio/nuestra-cancion.mp3"
    },
    evento: {
        ceremonia: {
            titulo: "Ceremonia",
            lugar: "Iglesia Católica San José",
            hora: "5:00 PM",
            direccion: "Morales, Izabal",
            ubicacionUrl: "https://maps.google.com/?q=15.476117,-88.828629"
        },
        recepcion: {
            titulo: "Recepción",
            lugar: "Salón Palmeras",
            hora: "6:30 PM",
            direccion: "Morales, Izabal",
            ubicacionUrl: "https://maps.app.goo.gl/w1bEQT8YfcrjTxfCA"
        }
    },
    textos: {
        mensajeInvitado: "Eres muy especial para nosotros",
        mensajePases: "Hemos reservado para ti {pases} lugares especiales"
    },
    footer: {
        hashtag: "#misquincemiavalentina",
        instagramUrl: "https://instagram.com/thetwodesign",
        facebookUrl: "https://facebook.com/thetwodesign",
        marcaTexto: "Diseño",
        marcaNombre: "Two Design",
        marcaUrl: "https://thetwodesign.com"
    }
};
window.config = config;
