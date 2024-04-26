// Login validation
let score=0
let loginLink = document.getElementById("login-link");
let regLink = document.getElementById("reg-link");
let regForm = document.getElementById("register-form");
let loginForm = document.getElementById("login-form");
let loginSubmit = document.getElementById("login-submit");
let Msg = document.getElementById("msg");
let regform = document.getElementById("reg-form");
let regSubmit = document.getElementById("reg-submit");
let reguname = document.getElementById("reg-uname");
let regpass = document.getElementById("reg-password");
let repass = document.getElementById("re-password");
let regcheck = document.getElementById("reg-check");
let regmsg = document.getElementById("regmsg");
let loginuname = document.getElementById("uname");
let loginpass = document.getElementById("password");
let logincheck = document.getElementById("Check");
loginSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    loginuname.value != "" &&
    loginpass.value != "" &&
    logincheck.checked == true
  ) {
    if (Iscorrectuser()) {
      sessionStorage.setItem("isLogin", true);
      sessionStorage.setItem("loginUser", loginuname.value);
      window.location.href = "home.html";
    } else {
      Msg.innerHTML =
        '<p class="text-danger bg-danger-subtle px-3 py-2">Username or Password is wrong.</p>';
    }
  } else {
    Msg.innerHTML =
      '<p class="text-danger bg-danger-subtle px-3 py-2">Please Fill all Fields!.</p>';
  }
});

function Iscorrectuser() {
  let allUser = JSON.parse(localStorage.getItem("UserDetails"));
  let status = false;
  allUser.forEach((e) => {
    console.log(
      e.uname,
      e.password,
      loginuname.value,
      loginpass.value
    );
    if (
      e.uname == loginuname.value &&
      e.password == loginpass.value
    ) {
      status = true;
    }
  });
  return status;
}

regSubmit.addEventListener("click", (e) => {
  if (regform.checkValidity()) {
    e.preventDefaul
    if (regpass.value == repass.value) {
      let newData = {
        uname: reguname.value,
        password: regpass.value,
      };
      let existData = localStorage.getItem("UserDetails")
        ? JSON.parse(localStorage.getItem("UserDetails"))
        : [];
      existData.push(newData);
      localStorage.setItem("UserDetails", JSON.stringify(existData));
      sessionStorage.setItem("isLogin", true);
      sessionStorage.setItem("loginUser", reguname.value);
      window.location.href = "home.html";
    } else {
      regmsg.innerHTML =
        '<p class="p-2 text-danger bg-danger-subtle">Password and Re-Password not match</p>';
    }
  } else {
    regmsg.innerHTML =
      '<p class="text-danger bg-danger-subtle px-3 py-2">Please Fill all Fields!.</p>';
  }
});
//home tasks after login
let existData1 = localStorage.getItem("UserDetails");
console.log(existData1);
let usernamelogin = document.getElementById('usernameprint');
usernamelogin = existData1.uname;

function QuestionValidate(a,b){
  switch(a){
      case 1 :
        if(b==1){
          score+=1
          console.log(score)
        }      
        break;
      case 2 :
        if(b==1){
          score+=1
        }    
        console.log(score)  
        break;
      case 3 :
        if(b==1){
          score+=1
        }
        console.log(score)
        break;
      case 4 :
        if(b==1){
          score+=1
        }   
        console.log(score)     
        break;
      case 5 :
        if(b==1){
          score+=1
        }   
        console.log(score)     
        break;
      case 6 :
        if(b==1){
          score+=1
        }   
        console.log(score)     
        break;
      case 7 :
        if(b==1){
          score+=1
        }   
        console.log(score)     
        break;
      case 8 :
        if(b==1){
          score+=1
        }   
        console.log(score)     
        break;
      case 9 :
        if(b==1){
          score+=1
        }   
        console.log(score)     
        break;
      default:
        break;

}
}


function suggestions(){
 
  score = sessionStorage.getItem('score');

  if (score >= 8) {
    document.getElementById('stages').innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZKR1nOtCNKU?si=sflSGzH4To2u9bIg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
  } else if (score >= 4 && score <= 7) {
    document.getElementById('stages').innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/oZrQU72dGO0?si=zgkQhJyfHMRS7kaB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
  } else { // score from 0 to 3
    document.getElementById('stages').innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/zpseq7i4_7A?si=tLAdOq6ETyNyUD8B" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
  }
}
document.getElementById('showsuggestions').addEventListener('click', suggestions);


function submitAnswer(){
  sessionStorage.setItem('score',score)
  window.location.assign(`eeg.html?score=${score}`)

}

function showSuggestions(){
  window.location.assign(`suggestions.html?score=${score}`)
}

function printCategory(){

 
  score = sessionStorage.getItem('score')
  if(score== 0){
    document.getElementById('displaycategory').innerText='Try again best of luck \n Your Score is '+score;
  }
  else if(score== 1){
    document.getElementById('displaycategory').innerText='Try again best of luck \n Your Score is '+score;
  }

  else if(score== 2){
    document.getElementById('displaycategory').innerText="Nah don't give up \n Your Score is "+score;
  }
  else if(score== 3){
    document.getElementById('displaycategory').innerText="Nah don't give up \n Your Score is "+score;
  }
  else if(score==4){
    document.getElementById('displaycategory').innerText="Nah keep going\n Your Score is "+score;
  }
  else if(score==5){
    document.getElementById('displaycategory').innerText="Nah keep going \n Your Score is "+score;
  }
  else if(score==6){
    document.getElementById('displaycategory').innerText="Good, you are making progress \n Your Score is "+score;
  }
  else if(score==7){
    document.getElementById('displaycategory').innerText="Good, you are making progress \n Your Score is "+score;
  }
  else if(score==8){
    document.getElementById('displaycategory').innerText="Very good \n Your Score is "+score;
  }
  else{
    document.getElementById('displaycategory').innerText="Excellent\n Your Score is "+score;
  }
}


function moresuggestions() {
  // Use window.location.href to navigate to task 2
  window.location.href = "more-suggestions.html";
}

function Progresstracker() {
  // Specify the relative URL of the next page


  // Redirect the user to the next page
  window.location.href = "ProgressTracker.html";
}

function moresuggestions2() {
  // Specify the relative URL of the next page
  const nextPageUrl = "more-suggestions2.html"; // Assuming the next page is in the same directory

  // Redirect the user to the next page
  window.location.href = nextPageUrl;
}

function moresuggestions() {
  // Specify the relative URL of the next page
  const nextPageUrl = "more-suggestions.html"; // Assuming the next page is in the same directory

  // Redirect the user to the next page
  window.location.href = nextPageUrl;
}

function suggestion1() {
  // Use window.location.href to navigate to task 2
  window.location.href = "suggestions.html";
}

function eeg() {
  // Use window.location.href to navigate to task 2
  window.location.href = "eeg.html";
}

function home() {
  // Use window.location.href to navigate to task 2
  window.location.href = "home.html";
}

function logout() {
  // Use window.location.href to navigate to task 2
  window.location.href = "home.html";
}

function task() {
  // Use window.location.href to navigate to task 2
  window.location.href = "tasks.html";
}

