function showp1() {
var show_p_1=[];
for(k=1;k<=6;k++){
show_p_1.push("para1_textbox_"+show_p_1[k]);
console.log(show_p_1);
document.getElementById("lp1").innerHTML=show_p_1;
}
}
function showp2() {
    var show_p_2=[];
    for(j=1;j<=6;j++){
    show_p_2.push("para2_textbox_"+show_p_2[j]);
    console.log(show_p_2);
    document.getElementById("lp2").innerHTML=show_p_2;
    }
    }
