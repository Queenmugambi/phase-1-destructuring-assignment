// Strings
const [cowSound, horseSound, sheepSound, pigSound, chickenSound] = farmAnimals.split(' ');
const [Bessie, Dolly, Babe, Little] = farmAnimals.split(' ');
const [blackAndWhite, black, pink] = farmAnimals.split(' ').filter(animal => animal !== 'chicken');

// Arrays
const [red, orange, yellow] = colors;

// Objects
const { name, color, song, job, partner } = muppet;
const { k_album: { the_muppet_movie: { song_2, song_4 } }, k_job, k_partner } = k_muppet;
