let data = [];
var add;

function addrow() {
    $('.question').each(function (i) {
        add = `<div class="${'container'}">
        ${i + 2}.<input type="text" class="question" required aria-multiline="true"
        g_editable="true" contenteditable="true" value="" placeholder="Question" onchange="validateForm"> <span class="valid"></span>
        <button class="remove" data-remove="${'option' + i}" value="remove"><i class="fa-solid fa-minus"></i></button>
        <div>
        <div class="${'option' + i}"><div class="${'opt' + i}">
        <input type="radio"class="t1" name="o1${i}" data-op="${i + 1}"><input type="text" placeholder="Option 1" class="x" data-ques="${i + 1}" name="text" value="" >
        <br>
        <input type="radio"class="t1" name="o1${i}" data-op="${i + 1}"><input type="text" class="x" placeholder="Option 2" data-ques="${i + 1}" name="text" value="" ><br>
        <input type="radio"class="t1" name="o1${i}" data-op="${i + 1}"><input type="text" class="x" placeholder="Option 3" data-ques="${i + 1}" name="text" value="" ><br>
        <input type="radio"class="t1" name="o1${i}" data-op="${i + 1}"><input type="text" class="x" placeholder="Option 4" data-ques="${i + 1}" name="text" value="" ></div></div>`
    });//  <button class="addoption" onclick="addoptions(`+ j + `)" value="submit" >+</button>
    $('.cont').append(add);
    // test();
}

$(document).on('click', ".remove", function () {
    let a = $(this).attr('data-remove');
    //console.log(a);
    // if(data.includes(a)){
    //     let indexId = data.findIndex(proId => proId === a);
    //     console.log(indexId);
    // }
    $(this).parent().remove();

})

// $('#form').submit(function(e){
//     console.log('why');
//     // e.submit();
//     let valid = $('#form').validate();
//     if( valid == true){
//         console.log('hyy');
//         let a1 = $('.question');
//         // console.log(a1);
//         for (var j = 0; j < a1.length; j++) {
//             if (typeof a1[j] != 'undefined' && a1.value != "") {
//                     var d1 = a1[j].value;
//                 }
//                 data.push(
//                         {
//                                 'question': d1,
//                             }
//                         );
    
//             let a = jQuery('.x[data-ques="' + j + '"]');
//             // console.log("value of a", a);
//             if (typeof data[j]['options'] == 'undefined') {
//                     data[j]['options'] = [];
//                 }
//                 for (var i = 0; i < a.length; i++) {
//                         if (typeof a[i] != 'undefined' && a.value != "") {
//                                 var d = a[i].value;
//                                 // console.log(data[j]);
//                     data[j]['options'].push({
//                             'value': d
//                         });
            
//                     }
//                 }
            
            
            
//                 // let o =  jQuery('.t1[data-op="' + j + '"]');
//                 // console.log(o);
//             let c = document.querySelectorAll('.t1');
//             // console.log(c);
//             if (typeof data[j]['correct'] == 'undefined') {
//                 data[j]['correct'] = [];
//             }
//             for (var k = 0; k < c.length; k++) {
//                     //   console.log(c[k]);
//                     if (c[k].checked == true) {
//                     var ans = c[k].nextElementSibling.value;
//                     // console.log(ans);
//                     //console.log(data[j]);
//                     data[j]['correct'].push({
//                             'right': ans
//                         })
//                     }
//                 }
            
//                 console.log(data);
//                 $('#form').submit();
//             }
            
//         }
//         else{

//         }
//     });
   
$(document).on('click', ".submit", function (e) {
    e.preventDefault();
    
    if(validateForm() == true){
        console.log('hello');
        // let a1 = $('.question');
    // console.log(a1);
    // for (var j = 0; j < a1.length; j++) {
    //     if (typeof a1[j] != 'undefined' && a1.value != "") {
    //         var d1 = a1[j].value;
    //     }
    //     data.push(
    //         {
    //             'question': d1,
    //         }
    //     );

    //     let a = jQuery('.x[data-ques="' + j + '"]');
    //     // console.log("value of a", a);
    //     if (typeof data[j]['options'] == 'undefined') {
    //         data[j]['options'] = [];
    //     }
    //     for (var i = 0; i < a.length; i++) {
    //         if (typeof a[i] != 'undefined' && a.value != "") {
    //             var d = a[i].value;
    //             // console.log(data[j]);
    //             data[j]['options'].push({
    //                 'value': d
    //             });

    //         }
    //     }

    //     // let o =  jQuery('.t1[data-op="' + j + '"]');
    //     // console.log(o);
    //     let c = document.querySelectorAll('.t1');
    //     // console.log(c);
    //     if (typeof data[j]['correct'] == 'undefined') {
    //         data[j]['correct'] = [];
    //     }
    //     for (var k = 0; k < c.length; k++) {
    //         //   console.log(c[k]);
    //         if (c[k].checked == true) {
    //             var ans = c[k].nextElementSibling.value;
    //             // console.log(ans);
    //             //console.log(data[j]);
    //             data[j]['correct'].push({
    //                 'right': ans
    //             })
    //         }
    //     }

    //     $('#form').submit();
    //     console.log(data);
    
    
    } else {

    }

    var div = $('#disp');
    // $(document).on('click', ".display", function () {

    data.forEach(function (i, index) {

        //   console.log(j);
        div.append(`<div class="z${index}"><span class="q2">${index + 1}:<span>${i['question']}
        </span></span><br></div><br>`);
        let t = i['options'];
        // console.log(t.classList.add("j1"));
        var span = $(`.z${index}`);
        for (let j = 0; j < t.length; j++) {
            span.append(`<div class="showw"><input id="${j}" type="radio" name="q${index}">
            <label class="dispshow" for="${j}">${t[j].value}</label><br></div>`);

        }

    });



    let j1 = localStorage.setItem('link', JSON.stringify(data));

    

});

function validateForm(){
    let form = document.getElementById('form');
    let check = form.checkValidity();
    console.log("check:",check);
    // if(check == true){
    //     console.log('good to see u');
    // }
    if( check == true){
        console.log('hyy');
        let a1 = $('.question');
        // console.log(a1);
        for (var j = 0; j < a1.length; j++) {
            if (typeof a1[j] != 'undefined' && a1.value != "") {
                    var d1 = a1[j].value;
                }
                data.push(
                        {
                                'question': d1,
                            }
                        );
    
            let a = jQuery('.x[data-ques="' + j + '"]');
            // console.log("value of a", a);
            if (typeof data[j]['options'] == 'undefined') {
                    data[j]['options'] = [];
                }
                for (var i = 0; i < a.length; i++) {
                        if (typeof a[i] != 'undefined' && a.value != "") {
                                var d = a[i].value;
                                // console.log(data[j]);
                    data[j]['options'].push({
                            'value': d
                        });
            
                    }
                }
            
            
            
                // let o =  jQuery('.t1[data-op="' + j + '"]');
                // console.log(o);
            let c = document.querySelectorAll('.t1');
            // console.log(c);
            if (typeof data[j]['correct'] == 'undefined') {
                data[j]['correct'] = [];
            }
            for (var k = 0; k < c.length; k++) {
                    //   console.log(c[k]);
                    if (c[k].checked == true) {
                    var ans = c[k].nextElementSibling.value;
                    // console.log(ans);
                    //console.log(data[j]);
                    data[j]['correct'].push({
                            'right': ans
                        })
                    }
                }
            
                console.log(data);
                $('#form').submit();
            }
            location.href = 'contact.html';
        }
        else{
            console.log("not valid");
            let yes = document.querySelectorAll('.valid');
            console.log(yes);
            yes.forEach(e =>{
                console.log(e);
                e.innerText = "Please fill all details";
            })
        }
}





// function test() {
//     console.log();
//     let f1 = document.querySelectorAll('.question, .x');
    
//     $('.question').change(validateForm); 
    
/*     for (let a1 = 0; a1 < f1.length; a1++) {
        console.log(f1[a1].value);
        $('input[id="see"]').attr('disabled', true);
        $(f1).change(function () {
            console.log(f1);
            
            
            if (f1[a1].value != "" || f1[a1].value != "") {
                // if (f1[a1].value.checked == true) {
                $('input[id="see"]').attr('disabled', false);

            } else {
            } 
        })
    }   */

$(document).ready(function () {
    // test();
    // let f1 = document.querySelectorAll('.question, .x')
    // console.log(f1);
    // let f2 = document.querySelectorAll('.x')
    // console.log(f2);

    // f1.forEach((e) => {
    //     console.log(e.value);
    // $('input[id="see"]').attr('disabled',true);
    // $(f1).change(function(){
    //     if ($(this).val() != "")
    //     {
    //       $("input[name='submit']").removeAttr('disabled');
    //     }
    //   });

    // let enable;
    // console.log(e.value);
    // if (e.value != "" || e.value != null) {
    //     console.log('valid');
    //     enable = true;
    //     // document.getElementById('see').enabled = true;
    //     if (enable == true) $("input[name='submit']").attr('disabled', '');

    // }
    // return false;
});
