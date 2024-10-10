const btnPlay = document.querySelector('#button .mulai')
const messege = document.querySelector('.messege-box')
const messege1 = document.querySelector('.messege-box1')
const messege2 = document.querySelector('.messege-box2')
const messege2P = document.querySelector('.messege-box2 .pesan p')
const hilang1 = document.querySelector('.hilang1')
const hilang2 = document.querySelector('.hilang2')
const nama = document.querySelectorAll('.nama h2')[0]
const nama1 = document.querySelectorAll('.nama h2')[1]
const waktu = document.getElementById('waktu')
const jam = waktu.querySelector('h1')
const hari = waktu.querySelector('p')
const bg1 = document.querySelector('.background1')
const bg2 = document.querySelector('.background2')
const body = document.querySelector('.body')
const audio = document.querySelector('.audio')

body.classList.add('background1')

const date = new Date()
const hour = String(date.getHours()).padStart(2, '0')
const minutes = String(date.getMinutes()).padStart(2, '0')
const day = date.getDay()
const tgl = date.getDate()
const month = date.getMonth()
const year = date.getFullYear()

hari.innerHTML = `${dayID()}, ${tgl} ${monthID()} ${year}`
jam.innerHTML = `${hour}:${minutes}`

// Dirubah 
const pengirim = "Yohana";
const nomorWa = "jooanaa00_" // awalan nomor 0 harus di awalin 62
const textWa = "Ah bisa aja kamu"
const pesan = `Seperti biasanya, kamu masuk di slide longtext. \n\n


Aku mau ucapain banyak" terimakasih buat selama ini, terimakasih udah jalan sejauh ini, terimakasih udah nerima kurang lebihnya aku, terimakasih atas sabarmu, terimakasih buat semua yang kamu kasih ke aku, yang aku gabisa bales satu per satu, makasih atas effort, perhatian, apapun itu dalam bentuk apapun itu, aku ucapain terimakasih banyak

Aku minta maaf aku bukan cewe yang bisa ngerti kamu, ngga paham sama pikiran kamu
Maaf buat perilaku yang nyakitin kamu, maaf selalu ngerepotin kamu, im so lucky have you
Jangan bosen sama aku, jangan jauh sama aku, tetep sama aku, aku udah cukup berantakan apalagi kalo ga sama kamu.`;

if (pengirim) {
  nama.innerHTML = pengirim;
  nama1.innerHTML = pengirim;
} else {
  nama.innerHTML = "Nama Kamu";
  nama1.innerHTML = "Nama Kamu";
}

btnPlay.addEventListener('click', () => {
  audio.play()
  messege1.style.display = "block";
  messege1.style.transform = "translateX(0)"
  btnPlay.style.display = "none";
  hilang1.style.display = "block";
})

hilang1.addEventListener('click', () => {
  messege1.style.display = "none";
  messege2.style.transform = "translateX(0)"
  hilang1.style.display = "none"
  hilang2.style.display = "block"

  // Langsung tampilkan pesan tanpa meminta nama
  let i = 0;
  const speed = 50;
  let txt = `${pesan}`;

  const typeWriter = () => {
    if (i < txt.length) {
      messege2P.innerHTML += txt.charAt(i);
      i++;
      messege2.classList.remove('kelip')
      hilang2.style.display = "none"
      setTimeout(typeWriter, speed)
    } else {
      messege2.classList.add('kelip')
      body.classList.replace('background2')
      body.classList.add('muncul')
      hilang2.style.display = "block"
    }
  }
  typeWriter()

})

hilang2.addEventListener('click', () => {
  window.open(`https://instagram.com/${nomorWa}/?text=${textWa}`, '_blank')
})

