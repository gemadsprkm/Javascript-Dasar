var penumpang = [];

var tambahPenumpang = function (x, y) {

    if (y.includes(x)) {
        console.log(y.join(" || "));
        console.log(x + " sudah ada di dalam angkot")
    }

    else {
        if (y.includes(undefined)) {
            y[y.indexOf(undefined)] = x;
        }

        else {
            y.push(x);
        }

        console.log(y.join(" || "));
    }

}

tambahPenumpang("gema", penumpang);
tambahPenumpang("dodi", penumpang);
tambahPenumpang("bani", penumpang);
tambahPenumpang("santi", penumpang);
penumpang[0] = undefined;
penumpang[1] = undefined;
tambahPenumpang("nadia", penumpang);
tambahPenumpang("rama", penumpang);
tambahPenumpang("rama", penumpang);


