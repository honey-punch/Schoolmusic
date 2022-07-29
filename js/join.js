// header
// category menu
const categoryBtnOpen = document.querySelector('.category-btn.open');
const categoryBtnClose = document.querySelector('.category-btn.close');
const categoryArea = document.querySelector('.category-area');
const category = document.querySelector('.category');

categoryBtnOpen.addEventListener('click', () => {
  categoryArea.classList.add('grid');
  categoryBtnOpen.style.display = 'none';
  categoryBtnClose.style.display = 'inline';
  category.style.background = 'var(--dark-grey-color)';
})
categoryBtnOpen.addEventListener('mouseover', () => {
  categoryBtnOpen.style.background = 'var(--dark-grey-color)';
})
categoryBtnOpen.addEventListener('mouseout', () => {
  categoryBtnOpen.style.background = 'var(--main-color)';
})

categoryBtnClose.addEventListener('click', () => {
  categoryArea.classList.remove('grid');
  categoryBtnOpen.style.display = 'inline';
  categoryBtnClose.style.display = 'none';
  category.style.background = 'var(--main-color)';
})
categoryBtnClose.addEventListener('mouseover', () => {
  categoryBtnClose.style.background = 'var(--main-color)';
})
categoryBtnClose.addEventListener('mouseout', () => {
  categoryBtnClose.style.background = 'var(--dark-grey-color)';
})

// main
// validation
const userId = document.querySelector('#user-id');
const password = document.querySelector('#password');
const passwordAgain = document.querySelector('#password-again');
const userName = document.querySelector('#user-name');
const mobile = document.querySelector('#mobile');
const birth = document.querySelector('#birth');

const man = document.querySelector('#man');
const woman = document.querySelector('#woman');

const termAgree = document.querySelector('#term-agree');
const personalAgree = document.querySelector('#personal-agree');

const checkUserId = /^[a-z]+[a-z0-9]{6,18}$/g;
const checkPassword = /^.*(?=^.{8,16}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
const checkUserName = /[ㄱ-힣]/;
const checkMobile = /^\d{10,11}$/;
const checkBirth = /^\d{8}$/;

// 회원가입하기 버튼 누르면 실행되는 validation 함수
function alertPlaceholder(element) {
  if (element.value == '') {
    alert(element.getAttribute('placeholder'));
    element.focus();
    return false;
  }
}

function alertGuide(element, check, guide) {
  if (element.value.match(check) == null) {
    alert(guide.textContent);
    element.focus();
    return false;
  }
}

function joinValidation() {
  
  // id
  if (userId.value == '') {
    alert(userId.getAttribute('placeholder'));
    userId.focus();
    return false;
  }

  if (userId.value.match(checkUserId) == null) {
    alert(guideUserId.textContent);
    userId.focus();
    return false;
  }

  // password
  if (password.value == '') {
    alert(password.getAttribute('placeholder'));
    password.focus();
    return false;
  }

  if (password.value.match(checkPassword) == null) {
    alert(guidePassword.textContent);
    password.focus();
    return false;
  }

  if (password.value !== passwordAgain.value) {
    alert(guidePasswordAgain.textContent);
    passwordAgain.focus();
    return false;
  }

  // name
  if (userName.value == '') {
    alert(userName.getAttribute('placeholder'));
    userName.focus();
    return false;
  }

  if (userName.value.match(checkUserName) == null) {
    alert(guideUserName.textContent);
    userName.focus();
    return false;
  }

  //mobile
  if (mobile.value == '') {
    alert(mobile.getAttribute('placeholder'));
    mobile.focus();
    return false;
  }

  if (mobile.value.match(checkMobile) == null) {
    alert(guideMobile.textContent);
    mobile.focus();
    return false;
  }

  // birth
  if (birth.value == '') {
    alert(birth.getAttribute('placeholder'));
    birth.focus();
    return false;
  }

  if (birth.value.match(checkBirth) == null) {
    alert(guideBirth.textContent);
    birth.focus();
    return false;
  }

  // sex
  if (!man.checked && !woman.checked) {
    alert('성별을 체크해주세요.');
    man.focus();
    return false;
  }

  // agree
  if (!termAgree.checked) {
    alert('이용약관에 동의해주세요.');
    termAgree.focus();
    return false;
  }
  if (!personalAgree.checked) {
    alert('개인정보수집이용에 동의해주세요');
    personalAgree.focus();
    return false;
  }

  document.join.submit();
}

// 수시로 체크해주어 하단에 문구를 뜨게하는 스크립트
const guideUserId = document.querySelector('.guide-user-id');
const guidePassword = document.querySelector('.guide-password');
const guidePasswordAgain = document.querySelector('.guide-password-again');
const guideUserName = document.querySelector('.guide-user-name');
const guideMobile = document.querySelector('.guide-mobile');
const guideBirth = document.querySelector('.guide-birth');

passwordAgain.addEventListener('input', () => {
  if (password.value !== passwordAgain.value) {
    guidePasswordAgain.classList.add('flex');
  } else {
    guidePasswordAgain.classList.remove('flex');
  }
})

function showGuide(element, check, guide) {
  element.addEventListener('input', () => {
    if(element.value.match(check) == null) {
      guide.classList.add('flex');
    } else {
      guide.classList.remove('flex');
    }
  })
}
showGuide(userId, checkUserId, guideUserId);
showGuide(password, checkPassword, guidePassword);
showGuide(userName, checkUserName, guideUserName);
showGuide(mobile, checkMobile, guideMobile);
showGuide(birth, checkBirth, guideBirth);



// footer
// to top
const toTopBtn = document.querySelector('.to-top');
toTopBtn.addEventListener('click',function(){
  window.scrollTo({top: 0, behavior:'smooth'});
});
