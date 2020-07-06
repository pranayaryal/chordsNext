
const fret1 = 25; const string1= 7 
const fret2 = 57; const string2 = 27
const fret3 = 89; const string3 = 46 
const fret4 = 119; const string4 = 66

const data = {
    Gb: [
        { name: 'Gb', x1:string2, y1:fret1, x2:string3, y2:fret2, x3:string4, y3:fret1, x4:string1, y4: fret3  },
        { name: 'Gbm', x1: string1, y1: fret2, x2: string2, y2:fret1, x3:string3, y3:fret2 },
        { name: 'Gbaug', x1: string1, y1: fret3, x2: string2, y2:fret2, x3:string3, y3:fret2, x4:string4,y4:fret1 },
        { name: 'Gbdim', x1: string1, y1: fret2, x2: string2, y2:fret3, x3:string3, y3:fret2, x4:string4,y4:fret3 },
        { name: 'Gb7', x1: string1, y1: fret3, x2: string2, y2: fret4, x3:string3, y3:fret2, x4:string4,y4:fret4 },
        { name: 'Gbm7', x1: string1, y1: fret2, x2: string2, y2:fret4, x3:string3, y3:fret2, x4:string4,y4:fret4 },
        { name: 'Gbmaj7', x1: string1, y1: fret2, x2: string2, y2:fret4, x3:string3, y3:fret1, x4:string4, y4:fret3 },
        { name: 'Gb6', x1: string1, y1: fret3, x2: string2, y2:fret3, x3:string3, y3:fret2, x4:string4, y4:fret4 },
        { name: 'Gbm6', x1: string1, y1: fret2, x2: string2, y2:fret1, x3:string3, y3:fret2, x4:string4, y4:fret3 },
        { name: 'Gbadd9', x1: string1, y1: fret1, x2: string2, y2:fret1, x3:string3, y3:fret2, x4:string4, y4:fret1 },
        { name: 'Gbm9', x1: string1, y1: fret1, x2: string2, y2:fret2, x3:string3, y3:fret2 },
        { name: 'Gb9', x1: string1, y1: fret1, x2: string2, y2:fret1, x3:string4, y3:fret1 },
        { name: 'Gbsus2', x1: string1, y1: fret1, x2: string2, y2:fret1, x3:string3, y3:fret2, x4:string4, y4:fret4 },
        { name: 'Gbsus4', x1: string1, y1: fret4, x2: string2, y2:fret1, x3:string3, y3:fret2, x4:string4, y4:fret2 },
        { name: 'Gb7sus4', x1: string1, y1: fret2, x2: string2, y2:fret2, x3:string3, y3:fret3, x4:string4, y4:fret3 },
    ],

    A: [
            { name: 'A', x1:string1, y1:fret2, x2:string2, y2:fret1 },
            { name: 'Am', x1: string1, y1: fret2},
            { name: 'Aaug', x1: string1, y1: fret2, x2: string2, y2:fret1, x3:string3, y3:fret1, x4:string4,y4:fret4 },
            { name: 'Adim', x1: string1, y1: fret2, x2: string2, y2:fret3, x3:string3, y3:fret2, x4:string4,y4:fret3 },
            { name: 'A7', x1: string2, y1: fret1 },
            { name: 'Am7',  },
            { name: 'Amaj7', x1: string1, y1: fret1, x2: string2, y2:fret1},
            { name: 'A6', x1: string1, y1: fret2, x2: string2, y2:fret1, x3:string3, y3:fret2 },
            { name: 'Am6', x1: string1, y1: fret2, x2: string3, y2:fret2},
            { name: 'Aadd9', x1: string1, y1: fret2, x2: string2, y2:fret1, x3:string4, y3:fret2},
            { name: 'Am9', x1: string1, y1: fret2, x2: string4, y2:fret2},
            { name: 'A9', x1: string2, y1: fret1, x2: string4, y2:fret2 },
            { name: 'Asus2', x1: string1, y1: fret1, x2: string2, y2:fret3, x3:string3, y3:fret4, x4:string4, y4:fret1, textLower: 3 },
            { name: 'Asus4', x1: string1, y1: fret2, x2: string2, y2:fret2},
            { name: 'A7sus4', x1: string2, y1: fret2},
    ],

    Ab: [
            { name: 'Ab', x1:string1, y1:fret4, x2:string2, y2:fret2, x3:string3, y3:fret3, x4:string4, y4: fret2  },
            { name: 'Abm', x1: string1, y1: fret4, x2: string2, y2:fret3, x3:string3, y3:fret4, x4:string4, y4: fret2},
            { name: 'Abaug', x1: string1, y1: fret1, x2: string4, y2:fret3},
            { name: 'Abdim', x1: string1, y1: fret1, x2: string2, y2:fret2, x3:string3, y3:fret1, x4:string4,y4:fret2 },
            { name: 'Ab7', x1: string1, y1: fret1, x2: string2, y2: fret3, x3:string3, y3:fret2, x4:string4,y4:fret3 },
            { name: 'Abm7', x1: string1, y1: fret1, x2: string2, y2:fret3, x3:string3, y3:fret2, x4:string4,y4:fret2 },
            { name: 'Abmaj7', x1: string1, y1: fret1, x2: string2, y2:fret3, x3:string3, y3:fret3, x4:string4, y4:fret3 },
            { name: 'Ab6', x1: string1, y1: fret1, x2: string2, y2:fret3, x3:string3, y3:fret1, x4:string4, y4:fret3 },
            { name: 'Abm6', x1: string1, y1: fret2, x2: string2, y2:fret3, x3:string3, y3:fret2, x4:string4, y4:fret4 },
            { name: 'Abadd9', x1: string1, y1: fret3, x2: string2, y2:fret3, x3:string3, y3:fret4, x4:string4, y4:fret3 },
            { name: 'Abm9', x1: string1, y1: fret2, x2: string2, y2:fret2, x3:string3, y3:fret3, x4:string4, y4:fret1, textLower: 3 },
            { name: 'Ab9', x1: string1, y1: fret3, x2: string2, y2:fret3, x3:string3, y3:fret2, x4:string4, y4:fret3 },
            { name: 'Absus2', x1: string1, y1: fret1, x2: string2, y2:fret3, x3:string3, y3:fret4, x4:string4, y4:fret1 },
            { name: 'Absus4', x1: string1, y1: fret1, x2: string2, y2:fret3, x3:string3, y3:fret4, x4:string4, y4:fret4 },
            { name: 'Ab7sus4', x1: string1, y1: fret1, x2: string2, y2:fret3, x3:string3, y3:fret2, x4:string4, y4:fret4 },
    ],

    B: [
            { name: 'B', x1:string1, y1:fret4, x2:string2, y2:fret3, x3:string3, y3:fret2, x4:string4, y4: fret2  },
            { name: 'Bm', x1: string1, y1: fret4, x2: string2, y2:fret2, x3:string3, y3:fret2, x4:string4, y4: fret2},
            { name: 'Baug', x1: string1, y1: fret4, x2: string2, y2:fret3, x3:string3, y3:fret3, x4:string4,y4:fret2 },
            { name: 'Bdim', x1: string1, y1: fret4, x2: string2, y2:fret2, x3:string3, y3:fret1, x4:string4,y4:fret2 },
            { name: 'B7', x1: string1, y1: fret2, x2: string2, y2: fret3, x3:string3, y3:fret2, x4:string4,y4:fret2 },
            { name: 'Bm7', x1: string1, y1: fret2, x2: string2, y2:fret2, x3:string3, y3:fret2, x4:string4,y4:fret2 },
            { name: 'Bmaj7', x1: string1, y1: fret4, x2: string2, y2:fret3, x3:string3, y3:fret2, x4:string4, y4:fret1 },
            { name: 'B6', x1: string1, y1: fret1, x2: string2, y2:fret3, x3:string3, y3:fret2, x4:string4, y4:fret2 },
            { name: 'Bm6', x1: string1, y1: fret1, x2: string2, y2:fret2, x3:string3, y3:fret2, x4:string4, y4:fret2 },
            { name: 'Badd9', x1: string1, y1: fret4, x2: string2, y2:fret3, x3:string3, y3:fret2, x4:string4, y4:fret4 },
            { name: 'Bm9', x1: string1, y1: fret2, x2: string2, y2:fret1, x3:string4, y3:fret2 },
            { name: 'B9', x1: string1, y1: fret3, x2: string2, y2:fret2, x3:string3, y3:fret4, x4:string4, y4:fret3, textLower: 3 },
            { name: 'Bsus2', x1: string1, y1: fret4, x2: string2, y2:fret1, x3:string3, y3:fret2, x4:string4, y4:fret2 },
            { name: 'Bsus4', x1: string1, y1: fret4, x2: string2, y2:fret4, x3:string3, y3:fret2, x4:string4, y4:fret2 },
            { name: 'B7sus4', x1: string1, y1: fret2, x2: string2, y2:fret4, x3:string3, y3:fret2, x4:string4, y4:fret2 },
    ],

    Bb: [
            { name: 'Bb', x1:string1, y1:fret3, x2:string2, y2:fret2, x3:string3, y3:fret1, x4:string4, y4: fret1  },
            { name: 'Bbm', x1: string1, y1: fret3, x2: string2, y2:fret1, x3:string3, y3:fret1, x4:string4, y4: fret1},
            { name: 'Bbaug', x1: string1, y1: fret3, x2: string2, y2:fret2, x3:string3, y3:fret2, x4:string4, y4: fret1},
            { name: 'Bbdim', x1: string1, y1: fret3, x2: string2, y2:fret1, x3:string4, y3:fret1},
            { name: 'Bbdim7', x2: string2, y2:fret1, x3:string4, y3:fret1},
            { name: 'Bb7', x1: string1, y1: fret1, x2: string2, y2: fret2, x3:string3, y3:fret1, x4:string4,y4:fret1 },
            { name: 'Bbm7', x1: string1, y1: fret1, x2: string2, y2:fret1, x3:string3, y3:fret1, x4:string4,y4:fret1 },
            { name: 'Bbmaj7', x1: string1, y1: fret3, x2: string2, y2:fret2, x3:string3, y3:fret1},
            { name: 'Bb6', x1: string2, y1: fret2, x2: string3, y2:fret1, x3:string4, y3:fret1},
            { name: 'Bbm6', x1: string1, y1: fret3, x2: string2, y2:fret1, x3:string3, y3:fret3, x4:string4, y4:fret1 },
            { name: 'Bbadd9', x1: string1, y1: fret3, x2: string2, y2:fret2, x3:string3, y3:fret1, x4:string4, y4:fret3 },
            { name: 'Bbm9', x1: string1, y1: fret3, x2: string2, y2:fret1, x3:string3, y3:fret1, x4:string4, y4:fret3 },
            { name: 'Bb9', x1: string1, y1: fret3, x2: string2, y2:fret2, x3:string3, y3:fret4, x4:string4, y4:fret3 },
            { name: 'Bbsus2', x1: string1, y1: fret3, x2: string3, y2:fret1, x3:string4, y3:fret1 },
            { name: 'Bbsus4', x1: string1, y1: fret3, x2: string2, y2:fret3, x3:string3, y3:fret1, x4:string4, y4:fret1 },
            { name: 'Bb7sus4', x1: string1, y1: fret1, x2: string2, y2:fret3, x3:string3, y3:fret1, x4:string4, y4:fret1 },
    ],

    C: [
            { name: 'C', x1:string4, y1:fret3},
            { name: 'Cm', x1: string2, y1: fret3, x2: string3, y2:fret3, x3:string4, y3:fret3},
            { name: 'Caug', x1: string1, y1: fret1, x2: string4, y2:fret3},
            { name: 'Cdim', x1: string2, y1: fret3, x2: string3, y2:fret2, x3:string4, y3:fret3},
            { name: 'C7', x1: string4, y1: fret1 },
            { name: 'Cm7',  x1: string1, y1: fret3, x2: string2, y2:fret3, x3:string3, y3:fret3, x4:string4, y4:fret3 },
            { name: 'Cmaj7', x1: string4, y1: fret2},
            { name: 'C6', },
            { name: 'Cm6', x1: string1, y1: fret2, x2: string2, y2:fret3, x3:string3, y3:fret3, x4:string4, y4:fret3},
            { name: 'Cadd9', x1: string2, y1: fret4, x2: string3, y2:fret3, x3:string4, y3:fret3},
            { name: 'Cm9', x1: string1, y1: fret4, x2: string2, y2:fret2, x3:string3, y3:fret2, x4:string4, y4:fret4, textLower: 3},
            { name: 'C9', x1: string2, y1: fret2, x2: string4, y2:fret1 },
            { name: 'Csus2', x1: string2, y1: fret2, x2: string3, y2:fret3, x3:string4, y3:fret3},
            { name: 'Csus4', x1: string3, y1: fret1, x2: string4, y2:fret3},
            { name: 'C7sus4', x1: string3, y1: fret1, x2: string4, y2:fret1},
    ],

    D: [
            { name: 'D', x1:string1, y1:fret2, x2:string2, y2:fret2, x3:string3, y3:fret2},
            { name: 'Dm', x1: string1, y1: fret2, x2: string2, y2:fret2, x3:string3, y3:fret1},
            { name: 'Daug', x1: string1, y1: fret3, x2: string2, y2:fret2, x3:string3, y3:fret2, x4:string4,y4:fret1},
            { name: 'Ddim', x1: string1, y1: fret1, x2: string2, y2:fret2, x3:string3, y3:fret1},
            { name: 'D7', x1: string1, y1: fret2, x2: string2, y2: fret2, x3:string3, y3:fret2, x4:string4,y4:fret3 },
            { name: 'Dm7', x1: string1, y1: fret2, x2: string2, y2: fret2, x3:string3, y3:fret1, x4:string4,y4:fret3 },
            { name: 'Dmaj7', x1: string1, y1: fret2, x2: string2, y2: fret2, x3:string3, y3:fret2, x4:string4,y4:fret4 },
            { name: 'D6', x1: string1, y1: fret2, x2: string2, y2: fret2, x3:string3, y3:fret2, x4:string4,y4:fret2 },
            { name: 'Dm6', x1: string1, y1: fret2, x2: string2, y2: fret2, x3:string3, y3:fret1, x4:string4,y4:fret2 },
            { name: 'Dadd9', x1: string1, y1: fret1, x2: string2, y2:fret3, x3:string3, y3:fret1, x4:string4, y4:fret4, textLower: 3 },
            { name: 'Dm9', x1: string1, y1: fret1, x2: string2, y2:fret4, x3:string4, y3:fret4, textLower: 3},
            { name: 'D9', x1: string1, y1: fret2, x2: string2, y2:fret4, x3:string3, y3:fret2, x4:string4, y4:fret3 },
            { name: 'Dsus2', x1: string1, y1: fret2, x2: string2, y2:fret2},
            { name: 'Dsus4', x1: string2, y1: fret2, x2: string3, y2:fret3},
            { name: 'D7sus4', x1: string1, y1: fret2, x2: string2, y2:fret2, x3:string3, y3:fret3, x4:string4, y4:fret3 },
    ],

    Db: [
            { name: 'Db', x1:string1, y1:fret1, x2:string2, y2:fret1, x3:string3, y3:fret1, x4:string4, y4: fret4  },
            { name: 'Dbm', x1: string1, y1: fret1, x2: string2, y2:fret4, x3:string3, y3:fret4, x4:string4, y4: fret4},
            { name: 'Dbaug', x1: string1, y1: fret2, x2: string2, y2:fret1, x3:string3, y3:fret1},
            { name: 'Dbdim', x1: string2, y1: fret1, x2: string4, y2:fret4},
            { name: 'Db7', x1: string1, y1: fret1, x2: string2, y2: fret1, x3:string3, y3:fret1, x4:string4,y4:fret2 },
            { name: 'Dbm7', x1: string1, y1: fret1, x2: string2, y2:fret1, x3:string4, y3:fret2},
            { name: 'Dbmaj7', x1: string1, y1: fret1, x2: string2, y2:fret1, x3:string3, y3:fret1, x4:string4, y4:fret3 },
            { name: 'Db6', x1: string1, y1: fret1, x2: string2, y2:fret1, x3:string3, y3:fret1, x4:string4, y4:fret1 },
            { name: 'Dbm6', x1: string1, y1: fret1, x2: string2, y2:fret1, x3:string4, y3:fret1},
            { name: 'Dbadd9', x1: string1, y1: fret1, x2: string2, y2:fret3, x3:string3, y3:fret1, x4:string4, y4:fret4 },
            { name: 'Dbm9', x1: string1, y1: fret1, x2: string2, y2:fret3, x3:string4, y3:fret4},
            { name: 'Db9', x1: string1, y1: fret1, x2: string2, y2:fret3, x3:string3, y3:fret1, x4:string4, y4:fret2 },
            { name: 'Dbsus2', x1: string1, y1: fret1, x2: string2, y2:fret3, x3:string3, y3:fret4, x4:string4, y4:fret4 },
            { name: 'Dbsus4', x1: string1, y1: fret1, x2: string2, y2:fret1, x3:string3, y3:fret2, x4:string4, y4:fret4 },
            { name: 'Db7sus4', x1: string1, y1: fret1, x2: string2, y2:fret1, x3:string3, y3:fret2, x4:string4, y4:fret2 },

    ],

    E: [
            { name: 'E', x1:string1, y1:fret1, x2:string2, y2:fret4, x3:string4, y3:fret2},
            { name: 'Em', x1:string2, y1:fret4, x2:string3, y2:fret3, x3:string4, y3:fret2},
            { name: 'Eaug', x1: string1, y1: fret1, x2: string4, y2:fret3},
            { name: 'Edim', x1: string2, y1: fret1, x2: string4, y2:fret1},
            { name: 'E7', x1:string1, y1:fret1, x2:string2, y2:fret2, x3:string4, y3:fret2},
            { name: 'Em7', x1: string2, y1: fret2, x2: string4, y2:fret2},
            { name: 'Emaj7', x1:string1, y1:fret1, x2:string2, y2:fret3, x3:string4, y3:fret2},
            { name: 'E6', x1: string1, y1: fret4, x2: string2, y2:fret4, x3:string3, y3:fret4, x4:string4, y4:fret4 },
            { name: 'Em6', x1: string2, y1: fret1, x2: string4, y2:fret2},
            { name: 'Eadd9', x1: string1, y1: fret1, x2: string2, y2:fret4, x3:string3, y3:fret2, x4:string4, y4:fret2 },
            { name: 'Em9', x1:string2, y1:fret4, x2:string3, y2:fret2, x3:string4, y3:fret2},
            { name: 'E9', x1: string1, y1: fret1, x2: string2, y2:fret2, x3:string3, y3:fret2, x4:string4, y4:fret2 },
            { name: 'Esus2', x1: string1, y1: fret4, x2: string2, y2:fret4, x3:string3, y3:fret2, x4:string4, y4:fret2 },
            { name: 'Esus4', x1: string1, y1: fret1, x2: string2, y2:fret3, x3:string3, y3:fret4, x4:string4, y4:fret1, textLower: 3 },
            { name: 'E7sus4', x1: string1, y1: fret3, x2: string2, y2:fret3, x3:string3, y3:fret4, x4:string4, y4:fret4, textLower: 3 },
    ],

    Eb: [
            { name: 'Eb', x1:string2, y1:fret3, x2:string3, y2:fret3, x3:string4, y3:fret1},
            { name: 'Ebm', x1: string1, y1: fret3, x2: string2, y2:fret3, x3:string3, y3:fret2, x4:string4,y4:fret1},
            { name: 'Ebaug', x1: string2, y1: fret3, x2: string3, y2:fret3, x3:string4, y3:fret2},
            { name: 'Ebdim', x1: string1, y1: fret2, x2: string2, y2:fret3, x3:string3, y3:fret2},
            { name: 'Eb7', x1: string1, y1: fret3, x2: string2, y2: fret3, x3:string3, y3:fret3, x4:string4,y4:fret4 },
            { name: 'Ebm7', x1: string1, y1: fret3, x2: string2, y2: fret3, x3:string3, y3:fret2, x4:string4,y4:fret4 },
            { name: 'Ebmaj7', x1: string1, y1: fret2, x2: string2, y2: fret2, x3:string3, y3:fret2, x4:string4,y4:fret4, textLower: 3 },
            { name: 'Eb6', x1: string1, y1: fret2, x2: string2, y2: fret2, x3:string3, y3:fret2, x4:string4,y4:fret2 },
            { name: 'Ebm6', x1: string1, y1: fret3, x2: string2, y2: fret3, x3:string3, y3:fret2, x4:string4,y4:fret3 },
            { name: 'Ebadd9', x1: string2, y1: fret3, x2: string3, y2:fret1, x3:string4, y3:fret1 },
            { name: 'Ebm9', x1: string1, y1: fret1, x2: string3, y2:fret3, x3:string4, y3:fret4, textLower: 4},
            { name: 'Eb9', x1: string2, y1: fret1, x2: string3, y2:fret1, x3:string4, y3:fret1},
            { name: 'Ebsus2', x1: string1, y1: fret3, x2: string2, y2:fret3, x3:string3, y3:fret4, x4:string4,y4:fret4 },
            { name: 'Ebsus4', x1: string1, y1: fret1, x2: string2, y2:fret3, x3:string3, y3:fret4, x4:string4,y4:fret1 },
            { name: 'Eb7sus4', x1: string1, y1: fret2, x2: string2, y2:fret2, x3:string3, y3:fret3, x4:string4,y4:fret3, textLower: 3 },
    ],

    F: [
            { name: 'F', x1:string1, y1:fret2, x2:string3, y2:fret1},
            { name: 'Fm', x1:string1, y1:fret1, x2:string3, y2:fret1, x3:string4, y3:fret3},
            { name: 'Faug', x1:string1, y1:fret2, x2:string2, y2:fret1, x3:string3, y3:fret1},
            { name: 'Fdim', x1: string1, y1: fret1, x2: string2, y2:fret2, x3:string3, y3:fret1, x4:string4, y4:fret2 },
            { name: 'F7', x1: string1, y1: fret2, x2: string2, y2:fret3, x3:string3, y3:fret1, x4:string4, y4:fret3 },
            { name: 'Fm7', x1: string1, y1: fret1, x2: string2, y2:fret3, x3:string3, y3:fret1, x4:string4, y4:fret3 },
            { name: 'Fmaj7', x1: string1, y1: fret2, x2: string2, y2:fret4, x3:string3, y3:fret1, x4:string4, y4:fret3 },
            { name: 'F6', x1: string1, y1: fret2, x2: string2, y2:fret2, x3:string3, y3:fret1, x4:string4, y4:fret3 },
            { name: 'Fm6', x1: string1, y1: fret1, x2: string2, y2:fret2, x3:string3, y3:fret1, x4:string4, y4:fret3 },
            { name: 'Fadd9', x1: string3, y1: fret1},
            { name: 'Fm9', x1:string2, y1:fret4, x2:string3, y2:fret3, x3:string4, y3:fret2, textLower: 3},
            { name: 'F9', x1: string1, y1: fret2, x2: string2, y2:fret3, x3:string3, y3:fret3, x4:string4, y4:fret3 },
            { name: 'Fsus2', x1: string3, y1: fret1, x2: string4, y2:fret3},
            { name: 'Fsus4', x1: string1, y1: fret3, x2: string3, y2:fret1, x3:string4, y3:fret1},
            { name: 'F7sus4', x1: string1, y1: fret2, x2: string2, y2:fret2, x3:string3, y3:fret3, x4:string4, y4:fret3, textLower: 5 },
    ],

    G: [
            { name: 'G', x1:string2, y1:fret2, x2:string3, y2:fret3, x3:string4, y3:fret2  },
            { name: 'Gm', x1: string2, y1: fret2, x2: string3, y2:fret3, x3:string4, y3:fret1 },
            { name: 'Gaug', x1: string2, y1: fret3, x2: string3, y2:fret3, x3:string4, y3:fret2 },
            { name: 'Gdim', x1: string2, y1: fret1, x2: string3, y2:fret3, x3:string4, y3:fret1 },
            { name: 'G7', x1: string2, y1: fret2, x2: string3, y2: fret1, x3:string4, y3:fret2 },
            { name: 'Gm7', x1: string2, y1: fret2, x2: string3, y2:fret1, x3:string4, y3:fret1 },
            { name: 'Gmaj7', x1: string2, y1: fret2, x2: string3, y2:fret2, x3:string4, y3:fret2 },
            { name: 'G6', x1: string2, y1: fret2, x2: string4, y2:fret2},
            { name: 'Gm6', x1: string2, y1: fret2, x2: string4, y2:fret1 },
            { name: 'Gadd9', x1: string2, y1: fret1, x2: string3, y2:fret4, x3:string4, y3:fret1, textLower: 3},
            { name: 'Gm9', x1: string1, y1: fret2, x2: string2, y2:fret2, x3:string3, y3:fret3, x4:string4, y4:fret1 },
            { name: 'G9', x1: string1, y1: fret2, x2: string2, y2:fret2, x3:string3, y3:fret1, x4:string4, y4:fret2 },
            { name: 'Gsus2', x1: string2, y1: fret2, x2: string3, y2:fret3 },
            { name: 'Gsus4', x1: string2, y1: fret2, x2: string3, y2:fret3, x3:string4, y3:fret3 },
            { name: 'G7sus4', x1: string2, y1: fret2, x2: string3, y2:fret1, x3:string4, y3:fret3 },
    ]


}

export default data;