function calculerMoyenne(notes) {
    if (notes.length === 0) {
        return 0;
    }

    const total = notes.reduce((acc, note) => acc + note, 0);
    return total / notes.length;
}

function estAdmis(moyenne) {
    return moyenne >= 10;
}

function getMention(moyenne) {
    if (moyenne >= 16) {
        return 'Très bien';
    }

    if (moyenne >= 14) {
        return 'Bien';
    }

    if (moyenne >= 12) {
        return 'Assez bien';
    }

    if (moyenne >= 10) {
        return 'Passable';
    }

    return 'Refusé';
}

module.exports = {
    calculerMoyenne,
    estAdmis,
    getMention
};