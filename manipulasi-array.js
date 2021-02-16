// Manipulasi array

// 1. menambah isi array
// var arr = [];
// arr[0] = "Gmea";
// arr[2] = "nadia";
// arr[3] = "no";

// 2. Menghapus isi array
var arr = ["Gema","Nadia","Ramadhana"];
arr[1] = undefined;
console.log(arr);

// 3. Menampilkan array
var arr = ["Gema","Nadia","Ramadhana"];

for (i=0; i<arr.length; i++){
    console.log('mahasiswa ke ' + i + ' : ' + arr[i]);
}

//array method

// 1. join
var arr = ['Gema','Nadia','Ramadhana'];
console.log(arr.join(' '));

// push, pop, shift, unshift
// 2. push - menambah element di akhir array
arr.push('Doddy','fitri');
console.log(arr.join(' '));

// 3. pop - menghilangkan element terakhir pada array
arr.pop();
arr.pop();
console.log(arr.join(' '));

// 4. unshift - menambahkan element pertama
arr.unshift('kakeane');
console.log(arr.join(' '));

// 5. shift - menghilangkan element pertama
arr.shift();
console.log(arr.join(' '));


// 6. Splice - menyisipkan element array di tengah tengah
// arr.splice(indexawal, maudihapusberapa, elemenbaru1,elemenbaru2)
arr.splice(1,0);
console.log(arr.join(' '));

// 7.slice - mengambil array di dalam array, 
// arr.slice(awal,akhir) 'akhir' akhir ga include di array baru

var arr2 = arr.slice(2,4);
console.log(arr2.join(' '));