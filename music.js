class Music {
    constructor(title,singer,img,file){
        this.title = title;
        this.singer=singer;
        this.img = img;
        this.file = file;
    }

    getName(){
        return this.title+ " - "+ this.singer;
    }
}

const musicList =[
    new Music("Sarılsak Geçerdi","Kaldı 8","f0.jpeg","4.mp3"),
    new Music("Sarılınca Geçmiyor","Kaldı 8","f1.jpg","5.mp3"),
    new Music("Senden Yoksun","Madrigal","m1.jpg","6.mp3"),
    new Music("Gonna Be Okay","Brent Morgan","gb1.jpeg","7.mp3")
];