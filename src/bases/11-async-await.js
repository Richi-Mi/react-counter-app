
const getImagenPromise = async () => {
    try {
        const apiKey = '2qbkneR3g0Wx7Sj44n2DC54uZOg6Ox5j';
        const httpCall = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }` );

        const { data } = await httpCall.json();    

        const { url } = data.images.original;
        const img  = document.createElement('img');
        img.src = url;

        document.body.append( img )
    } catch (err) {
        console.error( err )
    }
}
getImagenPromise()