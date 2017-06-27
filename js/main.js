/**
 * Created by LABORATORIA 0017le on 27/06/2017.
 */
'use strict';

const asistencia=(coders)=>{

    const lista=coders.forEach((e)=>{
        console.log(e.name);
        const li=$('<li>'+e.name+'<input type="checkbox"></li>');
    })

    return lista;
}