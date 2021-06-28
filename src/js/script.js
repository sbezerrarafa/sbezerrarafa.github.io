// var button = document.querySelector('#mais');

// function mostra() {
//   if (document.getElementById('mais').style.display == 'flex ') {
//     document.getElementById('mais').style.display = 'none';
//   } else {
//     document.getElementById('mais').style.display = 'flex';
//   }
// }

$('#btnmostra').click(function () {
  $('#mais').slideToggle(300);
});

$('.btn-carrinho').click(function () {
  $('#carrinho').addClass('active');
});

$('.btn-carrinho').click(function () {
  var cont = $('.vl-carrinho').val();
  $('.fn-carrinho').text(cont);
});

let adcionar = Number($('.vl-carrinho').val());
$('.btn-mais').click(function () {
  adcionar += 1;
  $('.vl-carrinho').val(adcionar);
  console.log(carrinho);
});

let subtrair = Number($('.vl-carrinho').val());
$('.btn-menos').click(function () {
  subtrair -= 1;
  $('.vl-carrinho').val(subtrair);
  console.log(carrinho);
});

function mudarNome() {
  if (document.getElementById('btnmostra').value == 'ver mais') {
    document.getElementById('btnmostra').value = 'ver menos';
  } else {
    document.getElementById('btnmostra').value = 'ver menos';
  }
}
function mostramodal() {
  if (document.getElementById('mostrando').style.display == 'none') {
    document.getElementById('mostrando').style.display = 'flex';
  } else {
    document.getElementById('mostrando').style.display = 'none';
  }
}
function fechamodal() {
  if (document.getElementById('mostrando').style.display == 'flex') {
    document.getElementById('mostrando').style.display = 'none';
  } else {
    document.getElementById('mostrando').style.display = 'flex';
  }
}
function img1() {
  document.getElementById('trocarimg').src = 'src/images/img1.png';
}
function img2() {
  document.getElementById('trocarimg').src = 'src/images/img2.png';
}
function img3() {
  document.getElementById('trocarimg').src = 'src/images/img3.png';
}
