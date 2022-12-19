const persons = [
  { name: 'Abanda Martial', age: 45 },
  { name: 'Albertini Pondji', age: 25 },
  { name: 'Amboya Saf', age: 30 },
  { name: 'Andoula Dimitrie', age: 32 },
  { name: 'Antengue Collince', age: 27 },
  { name: 'Antsiwoe Nathan', age: 35 },
  { name: 'Assoe Jean-baptist', age: 40 },
  { name: 'Badawe Leonard', age: 27 },
  { name: 'Bambe Simon', age: 29 },
  { name: 'Bang Ivan', age: 26 },
  { name: 'Beda Yaro', age: 28 },
  { name: 'Boutros Karinga', age: 23 },
  { name: 'Djouda Dilane', age: 25 },
  { name: 'Dounge Gabin', age: 22 },
  { name: 'Epeth Miriam', age: 32 },
  { name: 'Essindi Henry', age: 33 },
  { name: 'Essomo Fernand', age: 26 },
  { name: 'Essomo Fernande', age: 24 },
  { name: 'Etoue Catherine', age: 21 },
  { name: 'Gaba Ferdinand', age: 25 },
  { name: 'Hamga Esther', age: 24 },
  { name: 'Kamgang Martin', age: 21 },
  { name: 'Kambong Franklin', age: 34 },
  { name: 'Langle Benoit', age: 30 },
  { name: 'Linjoum Inoussa', age: 27 },
  { name: 'Lontsi Nathanaël', age: 24 },
  { name: 'Mafouzem Alida', age: 25 },
  { name: 'Mapon Charlotte', age: 23 },
  { name: 'Mapoure Ibrahim', age: 26 },
  { name: 'Mbongo Laurent', age: 24 },
  { name: 'Mebound Delors', age: 28 },
  { name: 'Medjo Jean-pierre', age: 43 },
  { name: 'Medou Georges', age: 29 },
  { name: 'Mekou Alain', age: 28 },
  { name: 'Meliga Stella', age: 34 },
  { name: 'Meto Fabiola', age: 23 },
  { name: 'Mfekoue Jounedou', age: 31 },
  { name: 'Minkonda Arnaud', age: 35 },
  { name: 'Minkonda Landry', age: 28 },
  { name: 'Mogba Charly', age: 31 },
  { name: 'Moguem Michelle', age: 25 },
  { name: 'Nanga Clemence', age: 22 },
  { name: 'Nanga Quentin', age: 27 },
  { name: 'Ndouang Marc', age: 27 },
  { name: 'Ngoumenewe Leticia', age: 24 },
  { name: 'Olinga Stevy', age: 28 },
  { name: 'Payon Ivan', age: 25 },
  { name: 'Samendolou Olivia', age: 33 },
  { name: 'Tang Laurent', age: 27 },
  { name: 'Tchapchet Brown', age: 28 },
  { name: 'Yimga Cabrel', age: 25 },
  { name: 'Zebidja Legrand', age: 26 }
]

const form = document.querySelector('form')
const userContent = document.querySelector('.users')

function getInitials ({ name }) {
  return name.split(' ').map((n) => n[0]).slice(0, 2).join('.')
}

function displayUser ({ age, name }) {
  return `<div class="users">
    <div class="box">
      <div class="initials">${getInitials({ name })}</div>
        <div class="status">
          <h2>${name}</h2>
          <p>${age} years old${age < 1 ? 's' : ''}</p>
        </div>
        <div class="icon">
          <i class="fa fa-window-close" aria-hidden="true"></i>
        </div>
    </div>
</div>`
}

function displayUsers (person) {
  return person.length
    ? person.map(displayUser).join('')
    : renderMessage('Sorry! No user found');;
}

function compareNames (name, searchTerm) {
  return name.toLowerCase().includes(searchTerm.toLowerCase());;
}

/* function searchUsers (name, age) {
  return persons.filter(
    (user) => (!name || compareNames(user.name, name)) && (!age || user.age === age)
  )
} */

function shouldResolve () {
  return Math.random() < 0.85
}

function searchUser (name, age) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve()) {
        resolve(
          persons.filter(
            (users) =>
              (!name || compareNames(users.name, name)) &&
                (!age || users.age === age)
          )
        );;;

      } else {
        reject (new Error([]));;;
      }
    }, 2000);;
  });;;

}

/* function loader () {
  return '<div class="load"></div>'
} */

function renderMessage (message) {
  return `<div class="message">${message}</div>`;;;

}

userContent.innerHTML = displayUsers(persons)

form.addEventListener('submit', (e) => {
  e.preventDefault();;;
  userContent.innerHTML = renderMessage('Searching users...');;
  searchUser(e.target.name.value, +e.target.age.value)
    .then((result) => {
      userContent.innerHTML = displayUser(result);;;

    })
    .catch((e) => {
      userContent.innerHTML = renderMessage('Error loading users! Please try Again')
    });;;
    
});;
