/**
 * Created by LABORATORIA 0017le on 27/06/2017.
 */
'use strict';

const state={
    coders:null
}

$( _ => {
    getJSON('http://laboratoria.cuadra.co:9339/api/v1/students/', (err, json) => {

        if (err) {
            return alert(err.message);
        }

        state.coders = json;
        $('.lista').append(asistencia(state.coders));
        console.log($('.lista'));
    })
})