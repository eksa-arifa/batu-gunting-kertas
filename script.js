const mulai = document.getElementById('mulai');

mulai.onclick = ()=>{
  permainan();
}

function permainan(){
  
  let player = prompt('Pilih antara batu gunting kertas,dan tulis disini');
  
  let computer = Math.floor(Math.random()* 10);
  
  if (computer <= 4) {
    computer = 'batu';
  }else if(computer >= 5 && computer <= 7){
    computer = 'gunting';
  }else if(computer >= 8){
    computer = 'kertas';
  }
  
  let hasil = "";
  let kesalahan = "input yang kamu masukkan salah!";
  
  if (player == computer) {
    hasil = 'dan komputer seri';
  }else if(player == 'batu'){
    if (computer == 'gunting') {
      hasil = 'menang';
    }else if(computer == 'kertas'){
      hasil = 'kalah';
    }
  }else if(player == 'gunting'){
    if(computer == 'batu'){
      hasil = 'kalah';
    }else if (computer == 'kertas') {
      hasil = 'menang';
    }
  }else if(player == 'kertas'){
    if (computer == 'batu') {
      hasil = 'menang';
    }else if (computer == 'gunting') {
      hasil = 'kalah';
    }
  }else{
    hasil = kesalahan;
  }
  
  alert("Kamu memilih "+player+" dan komputer memilih "+computer+" maka hasilnya kamu "+hasil);
  confirm("Apakah kamu ingin bermain lagi?");
}