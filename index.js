let input = document.getElementById("input");
let fn, sn, res, operator;

function display(num) {
    input.value = input.value + num;
}
function op(o) {
    operator = o;
    input.value = input.value + operator;
}
function clearr() {
    input.value = "";
}
function del() {
    input.value = input.value.slice(0, -1);
}

function calculate() {

    let st = input.value;

    if (operator == "+") {
        let sp = st.split("+");

        fn = sp[0];
        sn = sp[1];

        fn = Number(fn);
        sn = Number(sn);
        res = fn + sn;

        input.value = "";
        input.value = res;
    }
    else if (operator == "-"){
        let sp = st.split("-");

        fn = sp[0];
        sn = sp[1];

        fn = Number(fn);
        sn = Number(sn);
        res = fn - sn;

        input.value = "";
        input.value = res;
    }
    else if (operator == "x" ){
        let sp = st.split("x");

        fn = sp[0];
        sn = sp[1];

        fn = Number(fn);
        sn = Number(sn);
        res = fn * sn;

        input.value = "";
        input.value = res;
    }
    else if (operator == "%"){
        let sp = st.split("%");

        fn = sp[0];
        sn = sp[1];

        fn = Number(fn);
        sn = Number(sn);
        res = fn % sn;

        input.value = "";
        input.value = res;
    }

}
