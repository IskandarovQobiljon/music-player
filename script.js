const musicMenu = document.querySelector('#style')
    musicPlayer = document.querySelector('.music-display')

// music data
const musicData = [
    {
        id: 1,
        musicAuthor: 'Munisa Rizayeva',
        image: 'https://lastfm.freetls.fastly.net/i/u/avatar170s/1f9c979c56c80d7a3ace707e349fc773',
        musicName: 'Hayolingman',
        url: './music data/0ld0wv369qfjgzo6e0.m4a'
    },
    {
        id: 2,
        musicAuthor: 'Ziyoda',
        image: 'https://i.ytimg.com/vi/E-t-RSo7T-0/maxresdefault.jpg',
        musicName: 'Meni deb',
        url: './music data/1_1aaaaaqobiljon.m4a'
    },
    {
        id: 3,
        musicAuthor: 'Jaloliddin Ahmadaliyev',
        image: 'https://avatars.mds.yandex.net/i?id=b537182d4281a9eba698b398d0e3313e4a379b07-8498042-images-thumbs&n=13',
        musicName: 'Nigoro',
        url: './music data/1__2__3.mp3'
    },
    {
        id: 4,
        musicAuthor: 'Shahzoda',
        image: 'https://megahit.org/uploads/posts/2022-11/637e08eabdea2.jpg',
        musicName: 'Xasta',
        url: './music data/2_5197414738924935795.mp3'
    },
    {
        id: 5,
        musicAuthor: 'Shoxruhxon',
        image: 'https://muzfm.tv/uploads/posts/2021-01/1611230619_shohruhxon.jpg',
        musicName: 'Devona',
        url: './music data/2_5219697518882852430.mp3'
    },
    {
        id: 6,
        musicAuthor: 'Jaymes Young',
        image: 'https://www.lesonparisien.com/images/lsp/artists/4b7cd5d10c354be7cb3ca1374f043881.jpg',
        musicName: 'Infinity',
        url: './music data/___2020.mp3'
    },
    {
        id: 6,
        musicAuthor: 'Jaymes Young',
        image: 'https://www.lesonparisien.com/images/lsp/artists/4b7cd5d10c354be7cb3ca1374f043881.jpg',
        musicName: 'Infinity',
        url: './music data/___2020.mp3'
    },
    {
        id: 6,
        musicAuthor: 'Jaymes Young',
        image: 'https://www.lesonparisien.com/images/lsp/artists/4b7cd5d10c354be7cb3ca1374f043881.jpg',
        musicName: 'Infinity',
        url: './music data/___2020.mp3'
    },
   
   

]

musicData.forEach(item => {
    musicMenu.innerHTML += `
        <li>${item.musicName}</li>
    `
    
})

const lists = document.querySelectorAll('li')
for( let i = 0; i <= lists.length; i++){
    lists[i].addEventListener('click', () => {
        musicPlayer.innerHTML = `
        <div class="img">
        <h3 class="author">${musicData[i].musicAuthor}</h3>
        <img src="${musicData[i].image}" alt="error music">
        </div>
        <audio controls autoplay>
        <source src="${musicData[i].url}" type="audio/mpeg">
        </audio>a
        `
    })
}