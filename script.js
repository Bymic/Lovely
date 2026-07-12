const overlay = document.getElementById("overlay");
const story = document.getElementById("story");
const nextButton = document.getElementById("nextButton");
const music = document.getElementById("bgMusic");

let scene = 0;

const intro = [

"HAI BEB",

"aku punya sesuatuh",

"Tapi..",

"Selesain ini dulu yah",

"Love you beb"

];

function mulaiPetualangan(){

    overlay.classList.add("show");

    scene = 0;

    tampilScene();

}

function tampilScene(){

    story.innerHTML = `
    <div class="dialog">
        ${intro[scene]}
    </div>
    `;

    if(scene == intro.length-1){

        nextButton.innerHTML="🎁 MULAI QUEST";

    }

    else{

        nextButton.innerHTML="LANJUT →";

    }

}

nextButton.onclick = ()=>{

    scene++;

    if(scene < intro.length){

        tampilScene();

    }

    else{

        mulaiLevel1();

    }

}

function mulaiLevel1(){

    story.innerHTML = `

    <h2 class="mysteryTitle"> misteri box </h2>

    <p> pilih kotak yg ada lope nya.</p>

    <div class="boxes">

        <div class="box" onclick="pilihBox(this,false)">
            📦
        </div>

        <div class="box" onclick="pilihBox(this,true)">
            📦
        </div>

        <div class="box" onclick="pilihBox(this,false)">
            📦
        </div>

    </div>

    `;

    nextButton.style.display="none";

}

function pilihBox(box, benar){

    box.classList.add("open");

    if(benar){

        box.innerHTML="💖";

        setTimeout(()=>{

            story.innerHTML=`

            <h2> YEYY BENERR </h2>

            <p>Masih ada satu lagi</p>

            `;

            nextButton.innerHTML="LANJUT →";

            nextButton.style.display="inline-block";

            nextButton.onclick = ()=>{

    levelComplete(mulaiTebakFoto);

};

        },900);

    }

    else{

        box.innerHTML="💨";

        setTimeout(()=>{

            box.classList.remove("open");

            box.innerHTML="📦";

        },700);

    }

}

function levelComplete(nextFunction){

    story.innerHTML=`

    <div class="levelComplete">

        <h2>LEVEL COMPLETE</h2>

        <p>+100 LOVE POINTS ❤️</p>

    </div>

    `;

    nextButton.style.display="none";

    setTimeout(()=>{

        nextFunction();

    },2200);

}

function mulaiTebakFoto(){

    story.innerHTML = `

    <div class="photoGame">

        <h2>Tebak Foto</h2>

        <p> Ini foto kapan coba 😏</p>

        <img
        id="fotoBlur"
        class="blurPhoto"
        src="assets/photos/foto1.jpeg">

        <div class="answers">

            <button class="answerBtn" onclick="jawabFoto(false)">
                Pas makan
            </button>

            <button class="answerBtn" onclick="jawabFoto(true)">
                Pas dirumah
            </button>

            <button class="answerBtn" onclick="jawabFoto(false)">
                Pas nonton
            </button>

        </div>

    </div>

    `;

    nextButton.style.display = "none";

}

function jawabFoto(benar){

    if(benar){

        const foto = document.getElementById("fotoBlur");

        foto.classList.remove("blur");

        foto.classList.add("show");

        story.innerHTML += `
            <h3 class="successText">
                 Yeyyy bener!
            </h3>
        `;

        nextButton.innerHTML = " LANJUT ";

        nextButton.style.display = "inline-block";

        nextButton.onclick = function () {
    tampilSurat();
}

    }

    else{

        alert("Salah kocak.");

    }

}

function buatHati() {

    const hati = document.createElement("div");

    hati.className = "heart";

    const emoji = ["💖","💕","💗","💞","💘","❤️","✨"];

    hati.innerHTML = emoji[Math.floor(Math.random()*emoji.length)];

    hati.style.left = Math.random()*100 + "vw";

    hati.style.animationDuration = (4 + Math.random()*4) + "s";

    hati.style.opacity = Math.random();

    document.body.appendChild(hati);

    setTimeout(() => {
        hati.remove();
    },8000);

}

setInterval(buatHati,250);

function buatSticker(){

    const stiker=document.createElement("div");

    stiker.className="heart";

    const isi=[
        "🌸",
        "🎀",
        "⭐",
        "🧸",
        "💝",
        "🎉",
        "🦭"
    ];

    stiker.innerHTML=isi[Math.floor(Math.random()*isi.length)];

    stiker.style.left=Math.random()*100+"vw";

    stiker.style.animationDuration=
    (6+Math.random()*3)+"s";

    document.body.appendChild(stiker);

    setTimeout(()=>{
        stiker.remove();
    },9000);

}

setInterval(buatSticker,900);

function tampilSurat(){

    document.querySelector(".questTitle").innerHTML = "";

    nextButton.style.display = "none";

    const surat = `
        Buat Khalis Zahra Bilqis
        Sayang...
        Selamat Ulang Tahun yaa sayangku. Semoga panjang umur, sehat selalu.
        Makasih udah bareng sama aku lagi setahun ini.
        Maafin aku klo aku suka ngeyel.
        bikin kamu kesel.
        bikin kamu nangis.
        bikin kamu sakit hati.
        Aku seneng kita masih bareng sampe sekarang buat rayain ulang tahun kamu, makasih udah nemenin aku dan nerima aku apa adanya.
        dan juga sampe bertahan nunggu aku punya motor biar kita bisa jalan jalan enak, love you sayangg💖
    `;

    story.innerHTML = `
        <div class="letter">

            <div class="letterTitle">
                💌 Surat Buat kamu 💖
            </div>

            <span id="typewriter"></span>

        </div>
    `;

    const typewriter = document.getElementById("typewriter");

    let i = 0;
    const speed = 45;

    function ketik(){

        if(i < surat.length){

            typewriter.innerHTML += surat.charAt(i);

            i++;

            setTimeout(ketik, speed);

        }

        else{

            setTimeout(()=>{

                nextButton.innerHTML = "🎁 BUKA HADIAH TERAKHIR";

                nextButton.style.display = "inline-block";

                nextButton.classList.add("showButton");

                nextButton.onclick = ending;

            },800);

        }

    }

    ketik();

}

function ending(){

    document.querySelector(".questTitle").innerHTML=" HADIAH TERAKHIR :)";

    story.innerHTML=`

    <div class="giftScene">

        <h2>Klik hadiahnya yaa</h2>

        <div class="giftBox" onclick="bukaHadiah()">
            🎁
        </div>

    </div>

    `;

    nextButton.style.display="none";

}

function bukaHadiah(){

    story.innerHTML = `

    <div class="finalScene">

        <h1>❤️ HAPPY BIRTHDAY</h1>

        <h2>SAYANGGGGGGG</h2>

        <div class="gallery">

            <img src="assets/photos/foto12.jpeg" onclick="lihatFoto(this.src)">
            <img src="assets/photos/foto2.jpeg" onclick="lihatFoto(this.src)">
            <img src="assets/photos/foto3.jpeg" onclick="lihatFoto(this.src)">
            <img src="assets/photos/foto4.jpeg" onclick="lihatFoto(this.src)">
            <img src="assets/photos/foto5.jpeg" onclick="lihatFoto(this.src)">
            <img src="assets/photos/foto6.jpeg" onclick="lihatFoto(this.src)">

        </div>

        <div id="photoModal">

            <span onclick="tutupFoto()">✖</span>

            <img id="modalImg">

        </div>

        <p>
        Semoga kita terus bareng terus pertahanin hubungan dan bahagia selalu.
        Aku sayang banget sama kamu ❤️
        </p>

    </div>

    `;

firework();

    music.volume = 0;

    music.play();

    let volume = 0;

    const fade = setInterval(()=>{

        volume += 0.05;

        music.volume = volume;

        if(volume >= 0.6){

            clearInterval(fade);

        }

    },200);

}



function lihatFoto(src){

    document.getElementById("photoModal").style.display="flex";

    document.getElementById("modalImg").src=src;

}

function tutupFoto(){

    document.getElementById("photoModal").style.display="none";

}

function firework(){

    const emoji=[

        "🎆",
        "🎇",
        "✨",
        "🎉",
        "🎊",
        "💖"

    ];

    for(let i=0;i<35;i++){

        const f=document.createElement("div");

        f.className="firework";

        f.innerHTML=emoji[
            Math.floor(Math.random()*emoji.length)
        ];

        f.style.left=Math.random()*100+"vw";

        f.style.top=(40+Math.random()*50)+"vh";

        document.body.appendChild(f);

        setTimeout(()=>{

            f.remove();

        },2000);

    }

}
