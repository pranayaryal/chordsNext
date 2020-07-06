import data from '../data';

export function getChordData(chord){

    const details = data[chord];

    return {
        chord,
        details 
    }
}

export function getAllChordNames(){

    const chordNames = Object.keys(data);
    console.log('you are here');

    return chordNames.map(chord => {
        return {
            params: {
                chord: chord
            }
        }
    })

}