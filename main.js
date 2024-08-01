const contactsBtn = document.querySelector('.view-contacts-button');
const contacts = document.querySelector('.profile-information-segment');
const lineBreak = document.querySelector('.line-break');


contactsBtn.addEventListener('click', function() {
    contacts.classList.toggle('active');

    if (contacts.classList.contains('active')) {
        contactsBtn.innerHTML = '<p>Close Contacts &uparrow;</p>';
        lineBreak.style.display = 'block';
      } else {
        contactsBtn.innerHTML = '<p>View Contacts &downarrow;</p> ';
        lineBreak.style.display = 'none';
      }
})


const navLinks = document.querySelector('.nav-links');
const menuBtn = document.querySelector('.menu-button');

menuBtn.addEventListener('click', function() {
  navLinks.classList.toggle('active');

  if (navLinks.classList.contains('active')) {
    menuBtn.innerHTML = '<p><i class="fa-solid fa-x"></i></p>';
    } else {
      menuBtn.innerHTML = '<p><i class="fa-solid fa-bars"></i></p>';
    }
})


