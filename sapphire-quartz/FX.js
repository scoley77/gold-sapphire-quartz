const splash = document.querySelector('.loading-container');

const fade = function() {
  setTimeout(()=>{
    document.querySelector('#loading-container').style.opacity = '0';
  }, 2000);
  setTimeout(()=>{
    document.querySelector('.invite-container').style.opacity = '1';
  }, 3000);
  setTimeout(()=>{
    document.querySelector('#loading-container').style.visibility = 'hidden';
  }, 3000);
  
};

fade();
