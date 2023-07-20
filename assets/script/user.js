const users = [
  { name: "Abanda Martial", age: 45 },
  { name: "Albertini Pondji", age: 25 },
  { name: "Amboya Saf", age: 30 },
  { name: "Andoula Dimitrie", age: 32 },
  { name: "Antengue Collince", age: 27 },
  { name: "Antsiwoe Nathan", age: 35 },
  { name: "Assoe Jean-baptist", age: 40 },
  { name: "Badawe Leonard", age: 28 },
  { name: "Bambe Simon", age: 29 },
  { name: "Bang Ivan", age: 26 },
  { name: "Beda Yaro", age: 28 },
  { name: "Boutros Karinga", age: 23 },
  { name: "Djouda Dilane", age: 25 },
  { name: "Dounge Gabin", age: 22 },
  { name: "Epeth Miriam", age: 32 },
  { name: "Essindi Henry", age: 33 },
  { name: "Essomo Fernand", age: 26 },
  { name: "Essomo Fernande", age: 24 },
  { name: "Etoue Catherine", age: 21 },
  { name: "Gaba Ferdinand", age: 25 },
  { name: "Hamga Esther", age: 24 },
  { name: "Kamgang Martin", age: 21 },
  { name: "Kambong Franklin", age: 34 },
  { name: "Langle Benoit", age: 30 },
  { name: "Linjoum Inoussa", age: 27 },
  { name: "Lontsi Nathanaël", age: 24 },
  { name: "Mafouzem Alida", age: 25 },
  { name: "Mapon Charlotte", age: 23 },
  { name: "Mapoure Ibrahim", age: 26 },
  { name: "Mbongo Laurent", age: 24 },
  { name: "Mebound Delors", age: 28 },
  { name: "Medjo Jean-pierre", age: 43 },
  { name: "Medou Georges", age: 29 },
  { name: "Mekou Alain", age: 28 },
  { name: "Meliga Stella", age: 34 },
  { name: "Meto Fabiola", age: 23 },
  { name: "Mfekoue Jounedou", age: 31 },
  { name: "Minkonda Arnaud", age: 35 },
  { name: "Minkonda Landry", age: 28 },
  { name: "Mogba Charly", age: 31 },
  { name: "Moguem Michelle", age: 25 },
  { name: "Nanga Clemence", age: 22 },
  { name: "Nanga Quentin", age: 28 },
  { name: "Ndouang Marc", age: 27 },
  { name: "Ngoumenewe Leticia", age: 24 },
  { name: "Olinga Stevy", age: 28 },
  { name: "Payon Ivan", age: 25 },
  { name: "Samendolou Olivia", age: 33 },
  { name: "Tang Laurent", age: 27 },
  { name: "Tchapchet Brown", age: 28 },
  { name: "Yimga Cabrel", age: 25 },
  { name: "Zebidja Legrand", age: 26 }
]

// Function to filter users by name or age
function filterUsers (name, age) {
  const filteredUsers = users.filter((user) => {
    const lowerCaseName = user.name.toLowerCase()
    const lowerCaseSearchName = name.toLowerCase()
    return (
      (!lowerCaseName || lowerCaseName.includes(lowerCaseSearchName)) &&
        (age === '' || user.age === age)
    )
  })

  return filteredUsers
}

// Function to display filtered users
function displayUsers (filteredUsers) {
  const resultsContainer = document.getElementById('results-container')
  resultsContainer.innerHTML = ''

  if (filteredUsers.length === 0) {
    resultsContainer.innerHTML = `<p class='error'>No users found.</p>`
    return
  }

  function getInitial (name) {
    return name
      .split(' ')
      .map((n) => n[0])
      .slice(0, 2)
      .join('.')
  }

  filteredUsers.forEach((user) => {
    const userDiv = document.createElement('div')
    userDiv.classList.add('user')

    userDiv.innerHTML = `
      <div class="person">
        <div class="box">
          <div class="avatar">${getInitial(user.name)}</div>
            <div class="status">
              <h2>${user.name}</h2>
              <p>${user.age} years</p>
            </div>
        </div>
        <button class="delete-btn"><i class="fa fa-times" aria-hidden="true"></i></button>
      </div>
    `

    const deleteBtn = userDiv.querySelector('.delete-btn')
    deleteBtn.addEventListener('click', () => {
      deleteUser(user)
    })

    resultsContainer.appendChild(userDiv)
  })
}

displayUsers(users)

// Function to delete a user
function deleteUser (user) {
  const index = users.indexOf(user)
  if (index > -1) {
    users.splice(index, 1)
    displayUsers(filterUsers('', ''))
  }
}

// Function to handle search button click
function handleSearch () {
  const nameInput = document.getElementById('name-input')
  const ageInput = document.getElementById('age-input')

  const name = nameInput.value.trim()
  const age = ageInput.value.trim()
  console.log(nameInput.value, age.valueOf())

  const filteredUsers = filterUsers(name, age)
  displayUsers(filteredUsers)
}

// Function to show loader while searching users
function showLoader () {
  const loader = document.getElementById('loader')
  loader.classList.remove('hidden')
}

// Function to hide loader
function hideLoader () {
  const loader = document.getElementById('loader')
  loader.classList.add('hidden')
}

// Event listener for search button click
const searchBtn = document.getElementById('search-btn')
searchBtn.addEventListener('click', () => {
  showLoader()
  setTimeout(() => {
    handleSearch()
    hideLoader()
  }, 1000)
})
