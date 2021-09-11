
document.getElementById('lbsinput').addEventListener('input' , function (e) {
    let lbs = e.target.value;
    document.querySelector('.gramout').innerHTML = lbs * 1000;
    document.querySelector('.pout').innerHTML = lbs / 0.0022046;
    document.querySelector('.ounout').innerHTML = lbs * 35.274;
});



// link : https://blissful-wescoff-fb3379.netlify.app/